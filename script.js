document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('regenerate').addEventListener('click', generatePassword);

function generatePassword() {
  const length = document.getElementById('length').value;
  const includeSymbols = document.getElementById('symbols').checked;
  const includeLetters = document.getElementById('letters').checked;
  const includeNumbers = document.getElementById('numbers').checked;

  let characters = '';
  let password = '';

  if (includeSymbols) {
    characters += '!@#$%^&*()';
  }

  if (includeLetters) {
    characters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (includeNumbers) {
    characters += '0123456789';
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById('password').value = password;
}