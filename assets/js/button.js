function button_con() {
   const but_send = document.getElementById('but_send');
   const but_sab = document.getElementById('but_sub');
   const flex = document.querySelector('body');
   const root = document.querySelector('.You');

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
         root.dataset.sost = 'Thank';
         console.log(hash)
         
         but_send.innerHTML = 'thanks!'
      }, 1000);
   });

}

button_con()