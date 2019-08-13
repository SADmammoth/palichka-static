function hyphenate(text) {
  let anyletter = "[a-яА-Яa-zA-Z]",
    vowel = "[аеёиоуыэюaeiouy]",
    consonant = "[бвгджзклмнпрстфхцчшщbcdfghjklmnpqrstvwxz]",
    special = "[йъь'&-]",
    shy = "\xAD",
    regExps = [
      new RegExp(`(${vowel})(${anyletter}${anyletter})`, "ig"),
      new RegExp(`(${vowel})(${consonant}${vowel}${anyletter})`, "ig"),
      new RegExp(`(${vowel}${consonant})(${vowel}${anyletter})`, "ig")
    ];

  return function () {
    for (var i = 1; i < regExps.length; ++i) {
      text = text.replace(regExps[i], "$1" + shy + "$2");
    }
    return text
  }
};

document.body.querySelectorAll('.hyphenated').forEach(item => { console.log(item.innerText); return item.textContent = hyphenate(item.innerText)() });