function preloadImages(array) {
   if (!preloadImages.list) {
      preloadImages.list = [];
   }
   let list = preloadImages.list;
   for (let i = 0; i < array.length; i++) {
      let img = new Image();
      img.onload = function () {
         let index = list.indexOf(this);
         if (index !== -1) {
            list.splice(index, 1);
         }
      }
      list.push(img);
      img.src = array[i];
   }
}

preloadImages(["/assets/img/svg/theme/carbon_sun.svg","/assets/img/svg/theme/Vector.svg", "/assets/img/index.jpg"]);