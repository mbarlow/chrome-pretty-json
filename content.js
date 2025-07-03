// Content script for JSON pretty printing
(function() {
  'use strict';

  let currentTheme = DEFAULT_THEME;

  // Load saved theme
  chrome.storage.sync.get(['theme'], function(result) {
    if (result.theme) {
      currentTheme = result.theme;
    }
    init();
  });

  function init() {
    // Check if this is a JSON response
    if (isJsonResponse()) {
      formatJson();
    }
  }

  function isJsonResponse() {
    // Check content type
    const contentType = document.contentType || '';
    if (contentType.includes('application/json')) {
      return true;
    }

    // Check if URL ends with .json
    if (location.pathname.endsWith('.json')) {
      return true;
    }

    // Check if the page contains only JSON-like content
    const body = document.body;
    if (body && body.children.length === 1) {
      const text = body.textContent.trim();
      if (text.length > 0 && (text.startsWith('{') || text.startsWith('['))) {
        try {
          JSON.parse(text);
          return true;
        } catch (e) {
          return false;
        }
      }
    }

    return false;
  }

  function formatJson() {
    const body = document.body;
    const jsonText = body.textContent;

    try {
      const jsonObj = JSON.parse(jsonText);
      const prettyJson = JSON.stringify(jsonObj, null, 2);

      // Clear the body and create new formatted content
      body.innerHTML = '';
      body.className = 'json-pretty-container';

      // Create the formatted JSON container
      const container = document.createElement('div');
      container.className = 'json-content';

      // Create line numbers
      const lines = prettyJson.split('\n');
      const lineNumbers = document.createElement('div');
      lineNumbers.className = 'line-numbers';

      const codeBlock = document.createElement('div');
      codeBlock.className = 'json-code';

      lines.forEach((line, index) => {
        // Line number
        const lineNum = document.createElement('div');
        lineNum.textContent = (index + 1).toString();
        lineNumbers.appendChild(lineNum);

        // Code line
        const codeLine = document.createElement('div');
        codeLine.className = 'code-line';
        codeLine.innerHTML = highlightJson(line);
        codeBlock.appendChild(codeLine);
      });

      container.appendChild(lineNumbers);
      container.appendChild(codeBlock);
      body.appendChild(container);

      // Apply theme
      applyTheme(currentTheme);

    } catch (e) {
      console.error('Failed to parse JSON:', e);
    }
  }

  function highlightJson(line) {
    return line
      .replace(/(".*?")\s*:/g, '<span class="json-key">$1</span>:')
      .replace(/:\s*(".*?")/g, ': <span class="json-string">$1</span>')
      .replace(/:\s*(true|false)/g, ': <span class="json-boolean">$1</span>')
      .replace(/:\s*(null)/g, ': <span class="json-null">$1</span>')
      .replace(/:\s*(-?\d+\.?\d*)/g, ': <span class="json-number">$1</span>')
      .replace(/([{}[\],])/g, '<span class="json-punctuation">$1</span>');
  }

  function applyTheme(themeName) {
    const theme = THEMES[themeName] || THEMES[DEFAULT_THEME];
    const root = document.documentElement;

    Object.entries(theme).forEach(([key, value]) => {
      if (key !== 'name') {
        root.style.setProperty(`--json-${key}`, value);
      }
    });
  }

  // Listen for theme changes
  chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (namespace === 'sync' && changes.theme) {
      currentTheme = changes.theme.newValue;
      applyTheme(currentTheme);
    }
  });

})();
