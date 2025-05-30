// Email copy functionality
function copyEmail() {
  const email = 'contact@tempsense.dev';
  const emailText = document.getElementById('email-text');
  const copySuccess = document.getElementById('copy-success');
  
  // Try to copy to clipboard
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(email).then(() => {
      showCopySuccess();
    }).catch(() => {
      fallbackCopyTextToClipboard(email);
    });
  } else {
    fallbackCopyTextToClipboard(email);
  }
  
  function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      showCopySuccess();
    } catch (err) {
      console.error('Fallback: Could not copy text: ', err);
    }
    
    document.body.removeChild(textArea);
  }
  
  function showCopySuccess() {
    copySuccess.classList.add('show');
    
    setTimeout(() => {
      copySuccess.classList.remove('show');
      emailText.textContent = 'contact [at] tempsense.dev';
    }, 2000);
  }
}
