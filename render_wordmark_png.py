from PIL import Image, ImageDraw, ImageFont
import os

width, height = 480, 140
img = Image.new("RGBA", (width, height), (11, 17, 32, 255)) # Dark slate bg
draw = ImageDraw.Draw(img)

font_path = "C:/Windows/Fonts/georgia.ttf"
if not os.path.exists(font_path):
    font_path = "C:/Windows/Fonts/times.ttf"

font = ImageFont.truetype(font_path, 66)

text_x = 42
text_y = 38

# Draw text "Youssef"
draw.text((text_x, text_y), "Youssef", font=font, fill=(248, 250, 252, 255))

text_bbox = draw.textbbox((text_x, text_y), "Youssef", font=font)
text_end_x = text_bbox[2]
text_bottom_y = text_bbox[3]

accent_rgb = (103, 108, 219, 255) # #676CDB

# In Denvo., the double slash // cuts diagonally across the letter
# For 'Y', it cuts through the stem and right arm:
slash_start_y = text_bottom_y + 4
slash_end_y = text_y + 12

# Line 1:
draw.line([(text_x + 6, slash_start_y), (text_x + 36, slash_end_y)], fill=accent_rgb, width=4)
# Line 2:
draw.line([(text_x + 13, slash_start_y), (text_x + 43, slash_end_y)], fill=accent_rgb, width=4)

# Draw period dot tightly following 'f' on the baseline
dot_radius = 5.0
dot_center_x = text_end_x + 7
dot_center_y = text_bottom_y - dot_radius - 1 # Resting right on the baseline!

draw.ellipse(
    [dot_center_x - dot_radius, dot_center_y - dot_radius,
     dot_center_x + dot_radius, dot_center_y + dot_radius],
    fill=accent_rgb
)

img.save("images/logo-wordmark.png", "PNG", optimize=True)
print(f"Updated logo-wordmark.png: text_end={text_end_x}, dot_cx={dot_center_x}, dot_cy={dot_center_y}")
