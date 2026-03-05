# Articulate Vision Logo Assets

This directory contains the official Articulate Vision logo files.

## Files

### logo.svg
- **Usage:** Main logo displayed in navbar and footer across all website pages
- **Format:** SVG (Scalable Vector Graphics)
- **Colors:** Gradient from magenta (#ec4899) → purple (#8b5cf6) → cyan (#06b6d4)
- **Design:** Hexagonal shape with layered depth effect and white "A" letter
- **Best for:** Web display, icons, any size scaling needed

### favicon.svg
- **Usage:** Browser tab icon (favicon)
- **Format:** SVG
- **Colors:** Same gradient as main logo
- **Design:** Identical to main logo, optimized for small sizes

### logo.png (Optional - User-provided)
- **Usage:** High-resolution raster version for presentations, print, or email signatures
- **Format:** PNG with transparency
- **Note:** If you have the original PNG logo file, place it here for reference
- **Recommended names:** 
  - `logo.png` (standard size)
  - `logo@2x.png` (retina/high-DPI)
  - `logo-large.png` (presentation/print version)

## Implementation

All website pages automatically use:
- `/assets/images/logo.svg` for visible logo display
- `/assets/images/favicon.svg` for browser tab icon

## Logo Usage Guidelines

1. **Minimum size:** 32×32 pixels (logo remains legible)
2. **Clear space:** Maintain padding equal to height of "A" letter on all sides
3. **Backgrounds:** Logo works on light and dark backgrounds (white "A" maintains visibility)
4. **Do not:** Alter colors, reshape hexagon, or change letter style
5. **Accessibility:** Always include alt text: "Articulate Vision Logo"

## Color Codes

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Magenta (Secondary) | #ec4899 | Gradient start (top-left) |
| Purple (Primary) | #8b5cf6 | Gradient middle |
| Cyan (Accent) | #06b6d4 | Gradient end (bottom-right) |
| White | #FFFFFF | Letter "A" |

## Technical Details

**SVG Structure:**
- ViewBox: 0 0 200 200
- Hexagon coordinates: Centered with 30px margin
- Gradient: Linear from top-left to bottom-right
- Font: Montserrat Black (900 weight) for "A" letter
- Inner hexagon: 70% opacity for depth effect
