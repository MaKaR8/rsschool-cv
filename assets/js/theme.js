function teme(){
      const themeBtn = document.querySelector('.theme__pic');
      const skills = document.querySelector('body');
      const root = document.querySelector('.theme__pic');

      if (root.dataset.sost === 'off') {
            themeBtn.style.setProperty('--theme-d2', 'url(/assets/img/svg/theme/Vector.svg) no-repeat center')
            skills.style.setProperty('--global-b', '#fff')
            skills.style.setProperty('--global-g', '#222222')
            skills.style.setProperty('--global-w', '#070707')
            skills.style.setProperty('--invert', '100%')
            root.dataset.sost='on'
            console.log(root.dataset.sost)
      } else if (root.dataset.sost === 'on') {
            themeBtn.style.setProperty('--theme-d2', 'url(/assets/img/svg/theme/carbon_sun.svg) no-repeat center')
            skills.style.setProperty('--global-b', '#070707')
            skills.style.setProperty('--global-g', '#f6f6f6')
            skills.style.setProperty('--global-w', '#fff')
            skills.style.setProperty('--invert', '0%')
            root.dataset.sost = 'off'
            console.log(root.dataset.sost)
      }
}



