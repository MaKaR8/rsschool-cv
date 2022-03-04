function button_con() {
   const but_send = document.getElementById('but_send');
   const but_sab = document.getElementById('but_sub');
   const flex = document.querySelector('body');
   const root = document.querySelector('.you');

   but_send.addEventListener("click", function () {
      setTimeout(() => {
      flex.style.setProperty('--flex', 'none')
      flex.style.setProperty('--none', 'flex')
      }, 800);
   });

   but_sab.addEventListener("click", function () {
      setTimeout(() => {
         flex.style.setProperty('--flex', 'flex')
         flex.style.setProperty('--none', 'none')
         root.dataset.i18 = 'Thank';
         sessionStorage.setItem("you", root.dataset.i18);
         location.reload();
      }, 800);
   });

}

button_con()