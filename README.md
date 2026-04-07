# Chrome Pretty JSON

A minimal Chrome extension that automatically pretty-prints JSON responses with customizable theming. No data is sent to third parties - everything runs locally in your browser.

<p align="center">
  <img src="https://github.com/user-attachments/assets/4acca3c8-47c5-4603-8834-c26c420a990b" width="600" />
</p>

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

## Privacy

This extension:
- ✅ Processes all data locally in your browser
- ✅ Stores preferences in local Chrome storage
- ✅ Makes no external network requests
- ✅ Sends no telemetry or analytics
- ❌ Does not track usage or collect data

## License

MIT License - see LICENSE file for details.
