function hyphenate(text) {
  let anyletter = "[a-яА-Яa-zA-Z]",
    vowel = "[аеёиоуыэюaeiouy]",
    consonant = "[бвгджзклмнпрстфхцчшщbcdfghjklmnpqrstvwxz]",
    special = "[йъь'&-]",
    shy = "\xAD",
    regExps = [
      new RegExp(`(${anyletter}${vowel})(${anyletter}${anyletter})`, "ig"),
      new RegExp(`(${anyletter}${vowel})(${consonant}${vowel}${anyletter})`, "ig"),
      new RegExp(`(${anyletter}${vowel}${consonant})(${vowel}${anyletter})`, "ig")
    ];

  return function() {
    for (var i = 1; i < regExps.length; ++i) {
      text = text.replace(regExps[i], "$1" + shy + "$2");
    }
    return text
  }
};

document.body.querySelectorAll('.hyphenated').forEach(item => { console.log(item.innerText); return item.textContent = hyphenate(item.innerText)() });

<
script type = "text/javascript"
charset = "utf-8"
async src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A48aa09255f7b87136b085b14a724126378ab3965881b489652c6c51f68f6d150&amp;width=500&amp;height=500&amp;lang=ru_RU&amp;scroll=true" > < /script>