const skills = document.querySelector('body');
const root = document.querySelector('.theme__pic');
const currentTheme = localStorage.getItem("theme");
let flag = 0;

function teme_but(){
      // root.dataset.sost = currentTheme;
      if (root.dataset.sost === 'on') {
            root.dataset.sost = 'off';
            localStorage.setItem("theme", root.dataset.sost);
            alert(root.dataset.sost);
            teme();
      } else if (root.dataset.sost === 'off') {
            root.dataset.sost = 'on';
            localStorage.setItem("theme", root.dataset.sost);
            alert(root.dataset.sost);
            teme();
      }
}

function teme(){
      if (flag === 0){
            root.dataset.sost = currentTheme;
            flag += 1;
      }
      if (root.dataset.sost === 'on') {
            root.style.setProperty('--theme-d2', 'url(/assets/img/svg/theme/Vector.svg) no-repeat center')
            skills.style.setProperty('--global-b', '#fff');
            skills.style.setProperty('--global-g', '#222222');
            skills.style.setProperty('--global-w', '#070707');
            skills.style.setProperty('--invert', '100%');
      } else if (root.dataset.sost === 'off') {
            root.style.setProperty('--theme-d2', 'url(/assets/img/svg/theme/carbon_sun.svg) no-repeat center')
            skills.style.setProperty('--global-b', '#070707');
            skills.style.setProperty('--global-g', '#f6f6f6');
            skills.style.setProperty('--global-w', '#fff');
            skills.style.setProperty('--invert', '0%');
      }
}
teme()



