function hyphenate(text) {
  let anyletter = "[a-яА-Яa-zA-Z]",
    vowel = "[аеёиоуыэюaeiouy]",
    consonant = "[бвгджзклмнпрстфхцчшщbcdfghjklmnpqrstvwxz]",
    special = "[йъь'&-]",
    shy = "\xAD",
    regExps = [
      new RegExp("(" + special + ")(" + anyletter + anyletter + ")", "ig"),
      new RegExp("(" + vowel + ")(" + vowel + vowel + ")", "ig"),
      new RegExp("(" + vowel + consonant + ")(" + consonant + vowel + ")", "ig"),
      new RegExp("(" + vowel + vowel + ")(" + consonant + vowel + ")", "ig"),
      new RegExp("(" + vowel + consonant + ")(" + consonant + consonant + vowel + ")", "ig"),
      new RegExp("(" + vowel + consonant + consonant + ")(" + consonant + consonant + vowel + ")", "ig")
    ];

  return function () {
    for (var i = 1; i < 7; ++i) {
      text = text.replace(regExps[i], "$1" + shy + "$2");
    }
    return text
  }
};

document.body.querySelectorAll('.hyphenated').forEach(item => { console.log(item.innerText); return item.textContent = hyphenate(item.innerText)() });