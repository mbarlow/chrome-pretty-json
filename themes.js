// Theme definitions for JSON pretty printing
const THEMES = {
  'gruvbox-dark': {
    name: 'Gruvbox Dark',
    background: '#282828',
    foreground: '#ebdbb2',
    string: '#b8bb26',
    number: '#d3869b',
    boolean: '#fe8019',
    null: '#928374',
    key: '#83a598',
    punctuation: '#a89984',
    lineNumbers: '#665c54',
    selection: '#3c3836'
  },
  'catppuccin-dark': {
    name: 'Catppuccin Dark',
    background: '#1e1e2e',
    foreground: '#cdd6f4',
    string: '#a6e3a1',
    number: '#fab387',
    boolean: '#f38ba8',
    null: '#6c7086',
    key: '#89b4fa',
    punctuation: '#bac2de',
    lineNumbers: '#45475a',
    selection: '#313244'
  },
  'github': {
    name: 'GitHub',
    background: '#ffffff',
    foreground: '#24292f',
    string: '#032f62',
    number: '#005cc5',
    boolean: '#d73a49',
    null: '#6f42c1',
    key: '#22863a',
    punctuation: '#586069',
    lineNumbers: '#8b949e',
    selection: '#0366d625'
  },
  'vscode-dark': {
    name: 'VS Code Dark',
    background: '#1e1e1e',
    foreground: '#d4d4d4',
    string: '#ce9178',
    number: '#b5cea8',
    boolean: '#569cd6',
    null: '#808080',
    key: '#9cdcfe',
    punctuation: '#cccccc',
    lineNumbers: '#858585',
    selection: '#264f78'
  },
  'monokai': {
    name: 'Monokai',
    background: '#272822',
    foreground: '#f8f8f2',
    string: '#e6db74',
    number: '#ae81ff',
    boolean: '#66d9ef',
    null: '#75715e',
    key: '#f92672',
    punctuation: '#f8f8f2',
    lineNumbers: '#90908a',
    selection: '#49483e'
  },
  'dracula': {
    name: 'Dracula',
    background: '#282a36',
    foreground: '#f8f8f2',
    string: '#f1fa8c',
    number: '#bd93f9',
    boolean: '#ff79c6',
    null: '#6272a4',
    key: '#8be9fd',
    punctuation: '#f8f8f2',
    lineNumbers: '#6272a4',
    selection: '#44475a'
  }
};

// Default theme
const DEFAULT_THEME = 'gruvbox-dark';
