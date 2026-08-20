# Design System (ImageSpell)

This file defines the design tokens, visual style, and component guidelines for the ImageSpell application. It is structured to be easily parsed by AI design tools (like Stitch) to generate consistent UI components.

## 1. Theme & Vibe
- **Style**: Modern, clean, and minimalistic.
- **Vibe**: Professional, creative, and accessible. The interface should not distract from the images being edited.
- **Mode**: Support for both Light and Dark modes.

## 2. Colors
- **Primary Action**: `#4F46E5` (Indigo) - used for primary buttons, active states, and highlights.
- **Secondary Action**: `#F3F4F6` (Light Gray) - used for secondary buttons and backgrounds.
- **Background (Light)**: `#FFFFFF` (Pure White) - main app background.
- **Background (Dark)**: `#121212` (Deep Gray) - main app background in dark mode.
- **Text (Primary)**: `#111827` (Very Dark Gray) - for headings and main body text.
- **Text (Secondary)**: `#6B7280` (Gray) - for subtext, placeholders, and subtle labels.
- **Success**: `#10B981` (Emerald Green) - for positive feedback (e.g., successful spell check).
- **Error**: `#EF4444` (Red) - for warnings and destructive actions.

## 3. Typography
- **Primary Font**: `Inter` or `Google Sans`.
- **Headings**: Bold (700) or Semi-bold (600), tight letter spacing.
- **Body Text**: Regular (400), readable line height (1.5).
- **Small Text**: Used for image metadata, file sizes, or tooltips.

## 4. Components

### Buttons
- **Shape**: Rounded corners (`border-radius: 8px`).
- **Primary Button**: Solid Indigo background with white text. Subtle shadow.
- **Secondary Button**: Light gray background with dark text. No shadow.
- **Hover States**: Slightly darker background or increased shadow opacity.

### Cards & Containers
- **Styling**: White background (in light mode), rounded corners (`12px`), and a soft drop shadow (`box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)`).
- **Usage**: Displaying image previews, tool settings panels, and spelling correction suggestions.

### Inputs & Forms
- **Fields**: Light gray background or subtle border.
- **Focus State**: Indigo outline (`ring-2 ring-indigo-500`) to clearly indicate active fields.

## 5. Layout & Spacing
- **Grid**: 12-column responsive layout.
- **Spacing**: Use a standard 8px spacing system (8, 16, 24, 32, 48px).
- **Main Area**: The center of the screen should be dedicated to the image canvas. Tools and spelling suggestions should be placed in sidebars or floating panels to maximize workspace.

## 6. Micro-interactions & Animation
- **Transitions**: Smooth, subtle transitions (`150ms ease-in-out`) for hover states and opening/closing panels.
- **Feedback**: Immediate visual feedback for drag-and-drop actions (e.g., highlighting the drop zone).
