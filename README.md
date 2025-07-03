# Chrome Pretty JSON

A minimal Chrome extension that automatically pretty-prints JSON responses with customizable theming. No data is sent to third parties - everything runs locally in your browser.

## Features

- 🎨 **Multiple built-in themes**: Gruvbox Dark, Catppuccin Dark, GitHub, VS Code Dark, and more
- 🚀 **Automatic detection**: Instantly formats JSON responses without manual intervention
- 🔒 **Privacy-focused**: All processing happens locally, no external requests
- ⚡ **Lightweight**: Minimal code footprint for fast performance
- 🎯 **Zero configuration**: Works out of the box with sensible defaults

## Supported Themes

- **Gruvbox Dark** - Retro groove color scheme
- **Catppuccin Dark** - Soothing pastel theme
- **GitHub** - Clean, familiar GitHub styling
- **VS Code Dark** - Popular dark theme from VS Code
- **Monokai** - Classic dark theme with vibrant colors
- **Dracula** - Dark theme with carefully chosen colors

## Installation

Since this extension prioritizes privacy and local execution, install it manually:

1. Clone this repository:
   ```bash
   git clone https://github.com/mbarlow/chrome-pretty-json.git
   cd chrome-pretty-json
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" (toggle in top right)

4. Click "Load unpacked" and select the `chrome-pretty-json` directory

5. The extension will automatically activate for JSON responses

## Usage

1. Navigate to any URL that returns JSON (APIs, `.json` files, etc.)
2. The extension automatically detects and formats the JSON
3. Click the extension icon to change themes
4. Your theme preference is saved locally

## Development

The extension consists of minimal, essential files:
- `manifest.json` - Extension configuration
- `content.js` - JSON detection and formatting logic
- `popup.html/js` - Theme selection interface
- `themes.js` - Color scheme definitions
- `icon.svg` - Extension icon (convert to PNG with ImageMagick)

## Generate Icons

Convert the SVG icon to required sizes:

```bash
# Install ImageMagick if needed
sudo apt-get install imagemagick  # Ubuntu/Debian
brew install imagemagick          # macOS

# Generate icon sizes
convert icon.svg -resize 16x16 icon16.png
convert icon.svg -resize 48x48 icon48.png
convert icon.svg -resize 128x128 icon128.png
```

## Privacy

This extension:
- ✅ Processes all data locally in your browser
- ✅ Stores preferences in local Chrome storage
- ✅ Makes no external network requests
- ✅ Sends no telemetry or analytics
- ❌ Does not track usage or collect data

## License

MIT License - see LICENSE file for details.