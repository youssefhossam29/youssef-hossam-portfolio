from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
import os

font_path = 'C:/Windows/Fonts/georgia.ttf'
if not os.path.exists(font_path):
    font_path = 'C:/Windows/Fonts/times.ttf'

font = TTFont(font_path)
glyph_set = font.getGlyphSet()
cmap = font.getBestCmap()
scale = 52.0 / font['head'].unitsPerEm

current_x = 24.0
baseline_y = 52.0

svg_paths = []
for ch in 'Youssef':
    glyph_name = cmap[ord(ch)]
    glyph = glyph_set[glyph_name]
    pen = SVGPathPen(glyph_set)
    glyph.draw(pen)
    path_d = pen.getCommands()
    advance_w = font['hmtx'][glyph_name][0] * scale
    if path_d:
        svg_paths.append(f'    <path d="{path_d}" transform="translate({current_x:.2f}, {baseline_y:.2f}) scale({scale:.5f}, {-scale:.5f})" fill="currentColor" />')
    current_x += advance_w

# Dot rests precisely on baseline next to 'f'
dot_r = 4.2
dot_cx = round(current_x + 5.5, 2)
dot_cy = round(baseline_y - dot_r + 0.5, 2) # resting on baseline!

# Slashes merged through the letter 'Y'
x1_a, y1_a, x2_a, y2_a = 26.0, 56.0, 48.0, 18.0
x1_b, y1_b, x2_b, y2_b = 31.0, 56.0, 53.0, 18.0

accent_color = '#676CDB'
total_width = int(dot_cx + 15)

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {total_width} 72" width="{total_width}" height="72" fill="none">
  <!-- Brand Wordmark Logo (Denvo-inspired, 100% vector outlines) -->
  <defs>
    <filter id="accentGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="{accent_color}" flood-opacity="0.35" />
    </filter>
  </defs>

  <g color="#F8FAFC">
    <!-- Letters (Youssef) -->
{chr(10).join(svg_paths)}

    <!-- Double slash merged seamlessly as part of letter Y -->
    <line x1="{x1_a}" y1="{y1_a}" x2="{x2_a}" y2="{y2_a}" stroke="{accent_color}" stroke-width="2.6" stroke-linecap="round" filter="url(#accentGlow)" />
    <line x1="{x1_b}" y1="{y1_b}" x2="{x2_b}" y2="{y2_b}" stroke="{accent_color}" stroke-width="2.6" stroke-linecap="round" filter="url(#accentGlow)" />

    <!-- Period dot resting right on baseline closely following 'f' -->
    <circle cx="{dot_cx}" cy="{dot_cy}" r="{dot_r}" fill="{accent_color}" filter="url(#accentGlow)" />
  </g>
</svg>
'''

with open('images/logo-wordmark.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print(f"Updated images/logo-wordmark.svg with dot_cx={dot_cx}, dot_cy={dot_cy}")
