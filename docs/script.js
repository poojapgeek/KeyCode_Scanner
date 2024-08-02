document.addEventListener('DOMContentLoaded', (event) => {
  const inputField = document.getElementById('input');
  const asciiDisplay = document.getElementById('asciiValue');

  inputField.addEventListener('keydown', (event) => {
      const key = event.key;
      const asciiValue = key.charCodeAt(0);
      asciiDisplay.textContent = `Key: ${key}, ASCII Value: ${asciiValue}`;
  });
});
