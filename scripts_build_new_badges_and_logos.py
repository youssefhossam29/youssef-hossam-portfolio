import os
import base64
import numpy as np
from scipy.ndimage import distance_transform_edt
from PIL import Image, ImageDraw, ImageFilter, ImageChops, ImageFont

def hex_to_rgb(hex_str):
    hex_str = hex_str.lstrip('#')
    return tuple(int(hex_str[i:i+2], 16) for i in (0, 2, 4))

def make_gradient_circle(size, cx, cy, r, color1_hex, color2_hex):
    """Creates a smooth diagonal gradient clipped to a circle."""
    c1 = np.array(hex_to_rgb(color1_hex), dtype=float)
    c2 = np.array(hex_to_rgb(color2_hex), dtype=float)

    # Diagonal gradient grid
    y, x = np.ogrid[:size, :size]
    # Normalized coordinate along 135 degree diagonal
    t = ((x - (cx - r)) + (y - (cy - r))) / (2.0 * 2.0 * r)
    t = np.clip(t, 0.0, 1.0)[:, :, None]

    grad_rgb = ((1.0 - t) * c1 + t * c2).astype(np.uint8)

    # Circle mask
    dist_from_c = np.sqrt((x - cx)**2 + (y - cy)**2)
    circle_alpha = np.clip((r + 0.5 - dist_from_c) * 255.0, 0.0, 255.0).astype(np.uint8)

    grad_rgba = np.dstack([grad_rgb, circle_alpha])
    return Image.fromarray(grad_rgba, mode='RGBA')

def build_new_style_badge(
    output_png_path,
    output_webp_path,
    color_type='primary', # 'primary', 'accent', 'dual'
    canvas_size=1024,
    border_px=15
):
    """
    Builds the modern sticker-style avatar badge matching new.jpg:
    - No outer ring.
    - Solid circle background (or dual gradient).
    - White contour / sticker frame around Youssef's head, face, and suit.
    - Subtle soft drop shadow behind the white contour.
    - Head pops out slightly at the top.
    - Bottom curved cleanly to the circle boundary.
    """
    cutout = Image.open('logo/youssef-cutout.png').convert('RGBA')
    person_cropped = cutout.crop((228, 100, 1115, 930))
    b = person_cropped.getbbox()
    person = person_cropped.crop(b)
    pw, ph = person.size

    cx = canvas_size // 2
    cy = canvas_size // 2

    circle_r = int(canvas_size * 0.43) # ~440px
    circle_cy = cy + int(canvas_size * 0.04)

    # 1. Background Circle
    if color_type == 'primary':
        bg = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
        draw_bg = ImageDraw.Draw(bg)
        draw_bg.ellipse(
            [cx - circle_r, circle_cy - circle_r, cx + circle_r, circle_cy + circle_r],
            fill=hex_to_rgb('#0649C1') + (255,)
        )
    elif color_type == 'accent':
        bg = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
        draw_bg = ImageDraw.Draw(bg)
        draw_bg.ellipse(
            [cx - circle_r, circle_cy - circle_r, cx + circle_r, circle_cy + circle_r],
            fill=hex_to_rgb('#676CDB') + (255,)
        )
    elif color_type == 'dual':
        bg = make_gradient_circle(canvas_size, cx, circle_cy, circle_r, '#0649C1', '#676CDB')

    # 2. Scale & Position Person
    target_h = int(circle_r * 1.95)
    aspect = pw / ph
    target_w = int(target_h * aspect)
    person_scaled = person.resize((target_w, target_h), Image.Resampling.LANCZOS)

    px = cx - (target_w // 2) + int(40 * (target_w / 391))
    py = (circle_cy + circle_r) - target_h + 10

    person_layer = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
    person_layer.paste(person_scaled, (px, py))

    # 3. Mathematically smooth white contour (sticker border)
    person_alpha = np.array(person_layer.split()[3])
    binary = person_alpha > 20
    dist = distance_transform_edt(~binary)

    alpha_contour = np.clip((border_px + 1.0 - dist) / 1.5, 0.0, 1.0) * 255.0
    contour_img = Image.fromarray(alpha_contour.astype(np.uint8), mode='L')

    white_border_layer = Image.new('RGBA', (canvas_size, canvas_size), (255, 255, 255, 255))
    white_border_layer.putalpha(contour_img)

    # 4. Subtle soft drop shadow behind white border onto the circle
    shadow_mask = contour_img.filter(ImageFilter.GaussianBlur(7))
    shadow_arr = (np.array(shadow_mask) * 0.32).astype(np.uint8)
    shadow_img = Image.fromarray(shadow_arr, mode='L')
    shadow_layer = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 255))
    shadow_layer.putalpha(shadow_img)

    shifted_shadow = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
    shifted_shadow.paste(shadow_layer, (0, 4))

    # 5. Bottom clipping mask to circle
    mask = Image.new('L', (canvas_size, canvas_size), 0)
    draw_mask = ImageDraw.Draw(mask)
    draw_mask.rectangle([0, 0, canvas_size, circle_cy + int(circle_r * 0.2)], fill=255)
    draw_mask.ellipse(
        [cx - circle_r, circle_cy - circle_r, cx + circle_r, circle_cy + circle_r],
        fill=255
    )

    fg = Image.alpha_composite(shifted_shadow, white_border_layer)
    fg = Image.alpha_composite(fg, person_layer)

    fg_alpha = ImageChops.multiply(fg.split()[3], mask)
    fg.putalpha(fg_alpha)

    final_badge = Image.alpha_composite(bg, fg)

    final_badge.save(output_png_path, 'PNG', optimize=True)
    final_badge.save(output_webp_path, 'WEBP', quality=98, method=6)
    print(f'Successfully built {output_png_path} and {output_webp_path}')
    return final_badge

def build_high_res_logo_avatar(
    badge_img,
    output_prefix,
    svg_path=None,
    scale=4
):
    """
    Renders ultra high-res (4x retina, 1440x320) logo-avatar and logo-avatar-dark.
    """
    base_w, base_h = 360, 80
    w = base_w * scale
    h = base_h * scale

    bold_font_path = 'C:/Windows/Fonts/segoeuib.ttf'
    font_name = ImageFont.truetype(bold_font_path, int(23 * scale))
    font_sub = ImageFont.truetype(bold_font_path, int(14 * scale))

    badge_scaled = badge_img.resize((int(68 * scale), int(68 * scale)), Image.Resampling.LANCZOS)
    badge_x = int(4 * scale)
    badge_y = int(6 * scale)

    # 1. Dark background version (#0B1120)
    img_dark = Image.new('RGBA', (w, h), (11, 17, 32, 255))
    img_dark.paste(badge_scaled, (badge_x, badge_y), badge_scaled)
    draw_dark = ImageDraw.Draw(img_dark)
    draw_dark.text((int(86 * scale), int(16 * scale)), 'Youssef Hossam', font=font_name, fill=(255, 255, 255, 255))
    draw_dark.text((int(87 * scale), int(46 * scale)), 'Software Engineer', font=font_sub, fill=(6, 73, 193, 255))

    img_dark.save(f'{output_prefix}-dark.png', 'PNG', optimize=True)
    img_dark.save(f'{output_prefix}-dark.webp', 'WEBP', quality=98, method=6)

    # 2. Transparent background version
    img_trans = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    img_trans.paste(badge_scaled, (badge_x, badge_y), badge_scaled)
    draw_trans = ImageDraw.Draw(img_trans)
    draw_trans.text((int(86 * scale), int(16 * scale)), 'Youssef Hossam', font=font_name, fill=(255, 255, 255, 255))
    draw_trans.text((int(87 * scale), int(46 * scale)), 'Software Engineer', font=font_sub, fill=(6, 73, 193, 255))

    img_trans.save(f'{output_prefix}.png', 'PNG', optimize=True)
    img_trans.save(f'{output_prefix}.webp', 'WEBP', quality=98, method=6)

    print(f'Generated high-res {output_prefix} [.png, .webp, -dark.png, -dark.webp]')

    # 3. If svg_path specified, generate SVG embedding the badge
    if svg_path:
        # Resize badge to high quality 512x512 for SVG embedding
        svg_badge = badge_img.resize((512, 512), Image.Resampling.LANCZOS)
        import io
        buf = io.BytesIO()
        svg_badge.save(buf, format='PNG', optimize=True)
        b64_str = base64.b64encode(buf.getvalue()).decode('utf-8')

        svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 76" width="350" height="76" fill="none">
  <!-- Brand Logo Variant (Sticker / Pop-Out Style matching new.jpg) -->
  <defs>
    <filter id="avatarDropShadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0649C1" flood-opacity="0.30" />
    </filter>
  </defs>

  <g class="logo-avatar-new-group">
    <!-- Embedded High-Definition Badge -->
    <image href="data:image/png;base64,{b64_str}" x="2" y="3" width="70" height="70" filter="url(#avatarDropShadow)" />

    <!-- Name: 'Youssef Hossam' in Bold White #FFFFFF -->
    <text x="84" y="37" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Manrope', 'Alexandria', 'Segoe UI', sans-serif" font-weight="800" font-size="23" letter-spacing="-0.3px">Youssef Hossam</text>

    <!-- Subtitle: 'Software Engineer' in Primary Royal Blue #0649C1 Bold -->
    <text x="85" y="57" fill="#0649C1" font-family="'Plus Jakarta Sans', 'Manrope', 'Alexandria', 'Segoe UI', sans-serif" font-weight="700" font-size="14" letter-spacing="0.3px">Software Engineer</text>
  </g>
</svg>'''
        with open(svg_path, 'w', encoding='utf-8') as f:
            f.write(svg_content)
        print(f'Generated SVG: {svg_path}')

if __name__ == '__main__':
    # Step 1: Build the 3 new sticker-style badges matching new.jpg
    b_primary_new = build_new_style_badge(
        'logo/youssef-badge-primary-new.png',
        'logo/youssef-badge-primary-new.webp',
        color_type='primary'
    )
    b_accent_new = build_new_style_badge(
        'logo/youssef-badge-accent-new.png',
        'logo/youssef-badge-accent-new.webp',
        color_type='accent'
    )
    b_dual_new = build_new_style_badge(
        'logo/youssef-badge-dual-new.png',
        'logo/youssef-badge-dual-new.webp',
        color_type='dual'
    )

    # Step 2: High-resolution upgrade for EXISTING logo-avatar & logo-avatar-dark
    # Load existing badge
    b_primary_old = Image.open('logo/youssef-badge-primary.png').convert('RGBA')
    build_high_res_logo_avatar(
        b_primary_old,
        output_prefix='logo/logo-avatar',
        scale=4
    )

    # Step 3: High-resolution new logo-avatar & logo-avatar-dark (in new.jpg style)
    build_high_res_logo_avatar(
        b_primary_new,
        output_prefix='logo/logo-avatar-new',
        svg_path='logo/logo-avatar-new.svg',
        scale=4
    )

    print("All tasks successfully executed!")
