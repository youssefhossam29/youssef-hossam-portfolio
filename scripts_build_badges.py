import os
from PIL import Image, ImageDraw, ImageChops

def hex_to_rgb(hex_str):
    hex_str = hex_str.lstrip('#')
    return tuple(int(hex_str[i:i+2], 16) for i in (0, 2, 4))

def build_badge(output_path, inner_hex, ring_hex=None, canvas_size=600, shift_x=39, scale_mult=1.06):
    """
    Builds a professional circular headshot badge inspired by omar.png.
    - Outer thin colored ring
    - Floating transparent gap
    - Inner solid circular background
    - Centered bust portrait with breathing room around head/face
    - Shoulders extending across gap and clipped smoothly inside outer ring
    """
    if ring_hex is None:
        ring_hex = inner_hex

    cutout_path = 'images/youssef-cutout.png'
    if not os.path.exists(cutout_path):
        print(f"Error: {cutout_path} not found")
        return

    cutout = Image.open(cutout_path).convert('RGBA')
    # Crop to bust matching omar.png (head + neck + shoulders to mid-chest)
    person_cropped = cutout.crop((228, 100, 1115, 930))
    b = person_cropped.getbbox()
    person = person_cropped.crop(b)
    pw, ph = person.size

    cx = canvas_size // 2
    cy = canvas_size // 2

    # Proportions matching omar.png:
    outer_r = int(canvas_size * 0.474) # ~284
    ring_w = max(2, int(canvas_size * 0.018)) # ~10
    gap_w = int(canvas_size * 0.110) # ~66
    inner_r = outer_r - ring_w - gap_w # ~208

    badge = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(badge)

    ring_rgba = hex_to_rgb(ring_hex) + (255,)
    inner_rgba = hex_to_rgb(inner_hex) + (255,)

    # 1. Outer ring
    draw.ellipse(
        [cx - outer_r, cy - outer_r, cx + outer_r, cy + outer_r],
        outline=ring_rgba,
        width=ring_w
    )

    # 2. Inner filled circle
    draw.ellipse(
        [cx - inner_r, cy - inner_r, cx + inner_r, cy + inner_r],
        fill=inner_rgba
    )

    # 3. Person scaling and positioning
    target_h = int(canvas_size * 0.68 * scale_mult)
    aspect = pw / ph
    target_w = int(target_h * aspect)
    person_scaled = person.resize((target_w, target_h), Image.Resampling.LANCZOS)

    # Symmetric facial center alignment on cx
    px = cx - (target_w // 2) + int(shift_x * (target_w / 391))
    py = (cy + outer_r - ring_w) - target_h + 10

    person_layer = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
    person_layer.paste(person_scaled, (px, py))

    # Mask for bottom clipping to inside the outer ring
    mask = Image.new('L', (canvas_size, canvas_size), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rectangle([0, 0, canvas_size, cy + int(inner_r * 0.3)], fill=255)
    mask_draw.ellipse(
        [cx - outer_r + ring_w, cy - outer_r + ring_w,
         cx + outer_r - ring_w, cy + outer_r - ring_w],
        fill=255
    )

    person_alpha = person_layer.split()[3]
    clipped_alpha = ImageChops.multiply(person_alpha, mask)
    person_layer.putalpha(clipped_alpha)

    final_badge = Image.alpha_composite(badge, person_layer)

    # Cleanly redraw outer ring over bottom shoulder edge
    draw_final = ImageDraw.Draw(final_badge)
    draw_final.ellipse(
        [cx - outer_r, cy - outer_r, cx + outer_r, cy + outer_r],
        outline=ring_rgba,
        width=ring_w
    )

    final_badge.save(output_path, 'PNG', optimize=True)
    print(f'Saved {output_path}')

if __name__ == '__main__':
    # 1. Primary Badge (#0649C1)
    build_badge('images/youssef-badge-primary.png', inner_hex='#0649C1', ring_hex='#0649C1')

    # 2. Accent Badge (#676CDB)
    build_badge('images/youssef-badge-accent.png', inner_hex='#676CDB', ring_hex='#676CDB')

    # 3. Dual Badge (Inner #0649C1, Ring #676CDB)
    build_badge('images/youssef-badge-dual.png', inner_hex='#0649C1', ring_hex='#676CDB')
