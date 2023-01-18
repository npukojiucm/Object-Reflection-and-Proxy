class Validator {
  validateUserName(name) {
    const entryStr = /^[a-zA-Z]/gi;
    const endStr = /[^\d_\-]$/gi;
    const re = /[a-zA-z\-]*\d{0,3}[^\d_\-]*/gi;
    
    if (entryStr.test(name) && endStr.test(name)) return name.match(re).join('');
    throw new Error('Нельзя использовать больше 3 цифр подряд');
  }

  validatePhoneNumber(number) {
    const re = /(\+?\d)/g;
    const result = number.replace(/^8/, '+7');
    return result.match(re).join('');
  }
}

