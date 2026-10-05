import os
import sys
from PIL import Image, ImageDraw, ImageFilter, ImageOps

def create_circular_badge(person_headshot, size=(600, 600), primary_color=(6, 73, 193), ring_color=(6, 73, 193), gap_color=(255, 255, 255, 255)):
    """
    Creates a badge exactly structured like omar.png:
    - Outer circular ring
    - Gap (white or subtle tint)
    - Inner filled circle (primary_color)
    - Person cutout placed on top, head slightly breaking inner circle or aligned, shoulders clipped to outer circle.
    """
    width, height = size
    badge = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(badge)
    
    # Radii
    outer_margin = 16
    outer_radius = (width // 2) - outer_margin
    ring_width = 8
    gap_width = 16
    inner_radius = outer_radius - ring_width - gap_width
    
    center_x = width // 2
    center_y = height // 2
    
    # 1. Draw outer ring
    draw.ellipse(
        [center_x - outer_radius, center_y - outer_radius,
         center_x + outer_radius, center_y + outer_radius],
        outline=ring_color,
        width=ring_width
    )
    
    # 2. Draw inner circle with primary color
    draw.ellipse(
        [center_x - inner_radius, center_y - inner_radius,
         center_x + inner_radius, center_y + inner_radius],
        fill=primary_color
    )
    
    # 3. Scale and position the person
    # We want person to fit comfortably inside the circle, shoulders touching/overlapping bottom
    person_w, person_h = person_headshot.size
    target_person_h = int(height * 0.78)
    scale = target_person_h / person_h
    new_w = int(person_w * scale)
    new_h = target_person_h
    person_resized = person_headshot.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Calculate offset so person is centered horizontally and bottom aligns with outer circle
    person_x = center_x - (new_w // 2)
    # The bottom of person should align with bottom edge of outer circle (center_y + outer_radius - ring_width)
    person_y = (center_y + outer_radius - ring_width) - new_h + 10
    
    # Mask to clip person to outer circle boundary at the bottom
    clip_mask = Image.new("L", size, 0)
    clip_draw = ImageDraw.Draw(clip_mask)
    # Allow top to stick out a little if desired, but clip bottom at outer_radius - ring_width/2
    clip_draw.ellipse(
        [center_x - outer_radius + (ring_width // 2), center_y - outer_radius + (ring_width // 2),
         center_x + outer_radius - (ring_width // 2), center_y + outer_radius - (ring_width // 2)],
        fill=255
    )
    # Also allow head above the inner circle
    clip_draw.rectangle([0, 0, width, center_y], fill=255)
    
    # Paste person onto badge with clipping
    temp_person = Image.new("RGBA", size, (0, 0, 0, 0))
    temp_person.paste(person_resized, (person_x, person_y), person_resized)
    
    # Composite using clip_mask
    badge.paste(temp_person, (0, 0), clip_mask)
    
    return badge

print("Badge creation logic defined.")
