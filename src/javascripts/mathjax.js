window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
  },
  options: {
    // Only process what arithmatex wraps
    ignoreHtmlClass: '.*|',
    processHtmlClass: 'arithmatex',
  },
};

// Typeset helper
function typeset() {
  if (window.MathJax?.typesetPromise) {
    MathJax.startup?.output?.clearCache?.();
    MathJax.typesetClear();
    MathJax.texReset();
    return MathJax.typesetPromise();
  }
}

// Material for MkDocs uses instant navigation with `document$`
if (window.document$) {
  document$.subscribe(() => { typeset(); });
} else {
  // Fallback for non-Material or if instant nav is disabled
  window.addEventListener('DOMContentLoaded', () => { typeset(); });
}
