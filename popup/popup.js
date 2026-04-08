document.addEventListener('DOMContentLoaded', function () {
  var themeGrid = document.getElementById('themeGrid');
  var statusEl = document.getElementById('status');
  var currentTheme = 'gruvbox-dark';

  var themes = {
    'gruvbox-dark': { name: 'Gruvbox Dark', colors: ['#b8bb26', '#d3869b', '#fe8019', '#83a598'] },
    'catppuccin-dark': { name: 'Catppuccin Dark', colors: ['#a6e3a1', '#fab387', '#f38ba8', '#89b4fa'] },
    'github': { name: 'GitHub', colors: ['#032f62', '#005cc5', '#d73a49', '#22863a'] },
    'vscode-dark': { name: 'VS Code Dark', colors: ['#ce9178', '#b5cea8', '#569cd6', '#9cdcfe'] },
    'monokai': { name: 'Monokai', colors: ['#e6db74', '#ae81ff', '#66d9ef', '#f92672'] },
    'dracula': { name: 'Dracula', colors: ['#f1fa8c', '#bd93f9', '#ff79c6', '#8be9fd'] }
  };

  chrome.storage.sync.get(['theme'], function (result) {
    currentTheme = result.theme || 'gruvbox-dark';
    render();
  });

  function render() {
    themeGrid.innerHTML = '';
    Object.keys(themes).forEach(function (id) {
      var theme = themes[id];
      var card = document.createElement('div');
      card.className = 'theme-card' + (id === currentTheme ? ' selected' : '');

      var name = document.createElement('div');
      name.className = 'theme-name';
      name.textContent = theme.name;
      card.appendChild(name);

      var dots = document.createElement('div');
      dots.className = 'theme-dots';
      theme.colors.forEach(function (color) {
        var dot = document.createElement('span');
        dot.style.backgroundColor = color;
        dots.appendChild(dot);
      });
      card.appendChild(dots);

      card.addEventListener('click', function () {
        selectTheme(id);
      });

      themeGrid.appendChild(card);
    });
  }

  function selectTheme(id) {
    currentTheme = id;
    chrome.storage.sync.set({ theme: id }, function () {
      render();
      showStatus('Theme applied');
    });
  }

  function showStatus(message) {
    statusEl.textContent = message;
    statusEl.classList.add('visible');
    setTimeout(function () {
      statusEl.classList.remove('visible');
    }, 2000);
  }
});
