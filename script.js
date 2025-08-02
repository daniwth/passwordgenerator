document.getElementById('generate').addEventListener('click', function() {
  var length = document.getElementById('length').value;
  var symbols = document.getElementById('symbols').checked;
  var numbers = document.getElementById('numbers').checked;
  var lowercase = document.getElementById('lowercase').checked;
  var uppercase = document.getElementById('uppercase').checked;

  var characters = '';
  var password = '';

  if (symbols) {
    characters += '!@#$%^&*()';
  }

  if (numbers) {
    characters += '0123456789';
  }

  if (lowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (uppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  document.getElementById('password').value = password;
});

document.getElementById('copy').addEventListener('click', function() {
  var passwordField = document.getElementById('password');
  if (!passwordField.value) return;
  navigator.clipboard.writeText(passwordField.value);
});
