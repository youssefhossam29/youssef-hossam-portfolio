import os
import base64
from PIL import Image, ImageDraw, ImageFont

def build_avatar_logo():
    # 1. Read badge as base64 for self-contained SVG
    badge_path = 'images/youssef-badge-primary.png'
    with open(badge_path, 'rb') as f:
        b64_badge = base64.b64encode(f.read()).decode('utf-8')

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 76" width="350" height="76" fill="none">
  <!-- Brand Logo Variant 1: Avatar Badge + Professional Typography -->
  <defs>
    <filter id="badgeGlow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0649C1" flood-opacity="0.35" />
    </filter>
  </defs>

  <g class="logo-avatar-group">
    <!-- Embedded Self-Contained Avatar Badge -->
    <image href="data:image/png;base64,{b64_badge}" x="2" y="3" width="70" height="70" filter="url(#badgeGlow)" />

    <!-- Name: 'Youssef Hossam' in Bold White #FFFFFF -->
    <text x="84" y="37" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Manrope', 'Alexandria', 'Segoe UI', sans-serif" font-weight="800" font-size="23" letter-spacing="-0.3px">Youssef Hossam</text>

    <!-- Subtitle: 'Software Engineer' in Primary Royal Blue #0649C1 Bold -->
    <text x="85" y="57" fill="#0649C1" font-family="'Plus Jakarta Sans', 'Manrope', 'Alexandria', 'Segoe UI', sans-serif" font-weight="700" font-size="14" letter-spacing="0.3px">Software Engineer</text>
  </g>
</svg>'''

    with open('images/logo-avatar.svg', 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print("Updated images/logo-avatar.svg")

    # 2. Render PNG preview
    w, h = 360, 80
    bold_font_path = 'C:/Windows/Fonts/segoeuib.ttf'
    font_name = ImageFont.truetype(bold_font_path, 23)
    font_sub = ImageFont.truetype(bold_font_path, 14)

    # Dark background preview
    img_dark = Image.new('RGBA', (w, h), (11, 17, 32, 255))
    badge = Image.open('images/youssef-badge-primary.png').convert('RGBA')
    badge_scaled = badge.resize((68, 68), Image.Resampling.LANCZOS)
    img_dark.paste(badge_scaled, (4, 6), badge_scaled)

    draw_dark = ImageDraw.Draw(img_dark)
    draw_dark.text((86, 16), 'Youssef Hossam', font=font_name, fill=(255, 255, 255, 255))
    draw_dark.text((87, 46), 'Software Engineer', font=font_sub, fill=(6, 73, 193, 255))

    img_dark.save('images/logo-avatar-dark.png', 'PNG', optimize=True)

    # Transparent background PNG
    img_trans = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    img_trans.paste(badge_scaled, (4, 6), badge_scaled)
    draw_trans = ImageDraw.Draw(img_trans)
    draw_trans.text((86, 16), 'Youssef Hossam', font=font_name, fill=(255, 255, 255, 255))
    draw_trans.text((87, 46), 'Software Engineer', font=font_sub, fill=(6, 73, 193, 255))

    img_trans.save('images/logo-avatar.png', 'PNG', optimize=True)
    print("Generated images/logo-avatar.png and images/logo-avatar-dark.png")

if __name__ == '__main__':
    build_avatar_logo()
