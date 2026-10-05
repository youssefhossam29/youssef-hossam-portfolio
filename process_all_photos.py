import os
import rembg
from PIL import Image, ImageDraw, ImageFilter, ImageOps

print("Loading original photo...")
orig = Image.open('files/Youssef Hossam.png')

# 1. Head & shoulders crop matching omar.png framing
# Center is x=2550, y=1900
# In omar.png, head has breathing room on top, shoulders extend to bottom of ribcage/chest
crop_box = (1150, 680, 3950, 3480) # 2800 x 2800
cropped_headshot = orig.crop(crop_box)
cropped_headshot.thumbnail((1200, 1200), Image.Resampling.LANCZOS)

session = rembg.new_session('u2net_human_seg')

print("Removing background with u2net_human_seg...")
cutout = rembg.remove(cropped_headshot, session=session)

# Clean up any faint alpha artifacts near borders if any
cutout.save('images/youssef-cutout.png', 'PNG')
print("Saved images/youssef-cutout.png (Transparent head & shoulders without frame/background)")

# Also create a half-body / upper body cutout (from head to waist)
half_box = (900, 650, 4200, 4500)
cropped_half = orig.crop(half_box)
cropped_half.thumbnail((1200, 1400), Image.Resampling.LANCZOS)
cutout_half = rembg.remove(cropped_half, session=session)
cutout_half.save('images/youssef-halfbody-cutout.png', 'PNG')
print("Saved images/youssef-halfbody-cutout.png")

def hex_to_rgb(hex_str):
    hex_str = hex_str.lstrip('#')
    return tuple(int(hex_str[i:i+2], 16) for i in (0, 2, 4))

def build_badge(output_path, primary_hex, ring_hex=None, gap_hex='#FFFFFF', size=700):
    if ring_hex is None:
        ring_hex = primary_hex
        
    badge = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(badge)
    
    center = size // 2
    
    # Exact proportions from omar.png:
    # Outer circle diameter is ~90% of canvas
    outer_r = int(size * 0.45)
    ring_w = int(size * 0.018)  # ~12px
    gap_w = int(size * 0.065)   # ~45px
    inner_r = outer_r - ring_w - gap_w
    
    ring_rgb = hex_to_rgb(ring_hex) + (255,)
    inner_rgb = hex_to_rgb(primary_hex) + (255,)
    gap_rgb = hex_to_rgb(gap_hex) + (255,)
    
    # 1. Outer thin ring
    draw.ellipse(
        [center - outer_r, center - outer_r, center + outer_r, center + outer_r],
        outline=ring_rgb,
        width=ring_w
    )
    
    # 2. Inner filled circle
    draw.ellipse(
        [center - inner_r, center - inner_r, center + inner_r, center + inner_r],
        fill=inner_rgb
    )
    
    # 3. Person positioning
    person = Image.open('images/youssef-cutout.png').convert("RGBA")
    bbox = person.getbbox()
    if bbox:
        person = person.crop(bbox)
        
    pw, ph = person.size
    
    # Target height: In omar.png, person's head reaches the top edge of inner circle (or slightly beyond),
    # and shoulders reach the bottom of the outer ring.
    # Height from slightly above inner circle to bottom of outer ring:
    target_h = int(inner_r * 2 + gap_w + ring_w + 10)
    aspect = pw / ph
    target_w = int(target_h * aspect)
    
    person_scaled = person.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    px = center - (target_w // 2)
    py = (center + outer_r - ring_w) - target_h + 10
    
    # Bottom clipping mask: clip to outer ring at the bottom, keep head intact at top
    mask = Image.new("L", (size, size), 0)
    mask_draw = ImageDraw.Draw(mask)
    
    # Top 60% unmasked (head sticks out freely)
    mask_draw.rectangle([0, 0, size, center + int(inner_r * 0.35)], fill=255)
    
    # Bottom 40% clipped to inside the outer ring
    mask_draw.ellipse(
        [center - outer_r + ring_w, center - outer_r + ring_w,
         center + outer_r - ring_w, center + outer_r - ring_w],
        fill=255
    )
    
    person_layer = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    person_layer.paste(person_scaled, (px, py), person_scaled)
    
    badge.paste(person_layer, (0, 0), mask)
    badge.save(output_path, "PNG", optimize=True)
    print(f"Saved {output_path}")

# Generate Badge 1: Primary Brand Blue #0649C1
build_badge('images/youssef-badge-primary.png', primary_hex='#0649C1', ring_hex='#0649C1')

# Generate Badge 2: Accent Indigo #676CDB
build_badge('images/youssef-badge-accent.png', primary_hex='#676CDB', ring_hex='#676CDB')

# Generate Badge 3: Gradient / Dual Palette (Inner #0649C1, Ring #676CDB)
build_badge('images/youssef-badge-dual.png', primary_hex='#0649C1', ring_hex='#676CDB')

print("All badge variants successfully created!")
