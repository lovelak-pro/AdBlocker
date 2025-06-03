# Ad Blocker Chrome Extension

Ad Blocker is a simple Chrome extension that modifies the current tab's URL to help bypass ads on YouTube by altering the domain. It features a popup interface with a single button to trigger the URL modification.

## Features

- One-click button to modify the current tab's URL.
- Designed for YouTube ad bypassing.
- Clean and simple popup UI.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (top right).
4. Click "Load unpacked" and select the project directory.

## Usage

1. Navigate to a YouTube video page.
2. Click the Ad Blocker extension icon in your browser toolbar.
3. In the popup, click the **Remove Ad** button.
4. The page will reload with a modified URL.

## Screenshots

![App Screenshot](assets/Screenshot-v0.0.1.png)

## Project Structure

- [`manifest.json`](manifest.json): Chrome extension manifest file.
- [`popup.html`](popup.html): Popup UI for the extension.
- [`popup.js`](popup.js): JavaScript logic for modifying the URL.
- `assets/`: Folder for images and other assets.

## Credits

Made By [Lovelak](http://lovelak.rf.gd)

---

**Disclaimer:** This extension is for educational purposes only.
