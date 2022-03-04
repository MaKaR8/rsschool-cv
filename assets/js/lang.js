// index.js
import langArr from './translate.js';

const LangBtns = document.querySelectorAll('.header__lang');
const allLang = ['en', 'ru'];

for (let LangBtn of LangBtns) {
   if (LangBtn.dataset.i18 === 'ru') {
      LangBtn.addEventListener('click', () => {
         changeURLLanguage('ru');
         for (let LangBtn of LangBtns) {
            LangBtn.style.background = 'var(--global-w)'
            LangBtn.style.color = 'var(--global-b)'
         }
         LangBtn.style.background = 'var(--global-b)'
         LangBtn.style.color = 'var(--global-w)'
      });
   } else if (LangBtn.dataset.i18 === 'en') {
      LangBtn.addEventListener('click', () => {
         changeURLLanguage('en');
         for (let LangBtn of LangBtns) {
            LangBtn.style.background = 'var(--global-w'
            LangBtn.style.color = 'var(--global-b)'
         }
         LangBtn.style.background = 'var(--global-b)'
         LangBtn.style.color = 'var(--global-w)'
      });
   }
}

// перенаправить на url с указанием языка
function changeURLLanguage(lang) {
   location.href = window.location.pathname + '#' + lang;
   location.reload();
}

function changeLanguage() {
   let hash = window.location.hash;
   let elements = document.querySelectorAll('a, li, div, h1, h2, button');

   hash = hash.substr(1);
   console.log(hash);
   if (!allLang.includes(hash)) {
      location.href = window.location.pathname + '#en';
      location.reload();
   }
   document.querySelector('title').innerHTML = langArr[hash]['сurriculum vitae'];
   for (let elem of elements) {
      if (elem.dataset.i18) {
         // console.log(elem.dataset.i18);
         elem.innerHTML = langArr[hash][elem.dataset.i18];
      }
   }
}

changeLanguage();
