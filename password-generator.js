const generator = require('generate-password');

function passwordGenerator2(
  length = 10,
  numbers = false,
  symbols = false,
  uppercase = false
) {
  const password = generator.generate({
    length,
    numbers,
    symbols,
    uppercase,
  });

  console.log(password);
}

function passwordGenerator() {
  const password = generator.generate({
    length: 10,
    numbers: false,
  });

  console.log(password);
}

module.exports = { passwordGenerator, passwordGenerator2 };
