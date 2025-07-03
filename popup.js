// Popup script for theme selection
document.addEventListener('DOMContentLoaded', function() {
  const themeGrid = document.getElementById('themeGrid');
  const status = document.getElementById('status');
  let currentTheme = 'gruvbox-dark';

  // Theme color previews for each theme
  const themeColors = {
    'gruvbox-dark': ['#b8bb26', '#d3869b', '#fe8019', '#83a598'],
    'catppuccin-dark': ['#a6e3a1', '#fab387', '#f38ba8', '#89b4fa'],
    'github': ['#032f62', '#005cc5', '#d73a49', '#22863a'],
    'vscode-dark': ['#ce9178', '#b5cea8', '#569cd6', '#9cdcfe'],
    'monokai': ['#e6db74', '#ae81ff', '#66d9ef', '#f92672'],
    'dracula': ['#f1fa8c', '#bd93f9', '#ff79c6', '#8be9fd']
  };

  // Load current theme
  chrome.storage.sync.get(['theme'], function(result) {
    currentTheme = result.theme || 'gruvbox-dark';
    renderThemes();
  });

  function renderThemes() {
    themeGrid.innerHTML = '';

    Object.entries(THEMES).forEach(([themeId, theme]) => {
      const themeOption = document.createElement('div');
      themeOption.className = 'theme-option';
      if (themeId === currentTheme) {
        themeOption.classList.add('selected');
      }

      const themeName = document.createElement('div');
      themeName.className = 'theme-name';
      themeName.textContent = theme.name;

      const themePreview = document.createElement('div');
      themePreview.className = 'theme-preview';

      const colors = themeColors[themeId] || [];
      colors.forEach(color => {
        const dot = document.createElement('div');
        dot.className = 'color-dot';
        dot.style.backgroundColor = color;
        themePreview.appendChild(dot);
      });

      themeOption.appendChild(themeName);
      themeOption.appendChild(themePreview);

      themeOption.addEventListener('click', function() {
        selectTheme(themeId);
      });

      themeGrid.appendChild(themeOption);
    });
  }

  function selectTheme(themeId) {
    currentTheme = themeId;

    // Save theme
    chrome.storage.sync.set({ theme: themeId }, function() {
      // Update UI
      document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.remove('selected');
      });
      event.currentTarget.classList.add('selected');

      // Show success message
      showStatus('Theme applied successfully!', 'success');
    });
  }

  function showStatus(message, type) {
    status.textContent = message;
    status.className = `status ${type}`;
    status.style.display = 'block';

    setTimeout(() => {
      status.style.display = 'none';
    }, 2000);
  }

  // Include themes data inline since we can't import modules in popup
  const THEMES = {
    'gruvbox-dark': {
      name: 'Gruvbox Dark'
    },
    'catppuccin-dark': {
      name: 'Catppuccin Dark'
    },
    'github': {
      name: 'GitHub'
    },
    'vscode-dark': {
      name: 'VS Code Dark'
    },
    'monokai': {
      name: 'Monokai'
    },
    'dracula': {
      name: 'Dracula'
    }
  };
});
