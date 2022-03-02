function button_con() {
   const but_send = document.getElementById('but_send');
   const but_sab = document.getElementById('but_sub');
   const flex = document.querySelector('body');

   but_send.addEventListener("click", function () {
      setTimeout(() => {
      flex.style.setProperty('--flex', 'none')
      flex.style.setProperty('--none', 'flex')
      }, 1000);
   });

   but_sab.addEventListener("click", function () {
      setTimeout(() => {
         flex.style.setProperty('--flex', 'flex')
         flex.style.setProperty('--none', 'none')
         but_send.innerHTML = 'thanks!'
      }, 1000);
   });

}

button_con()