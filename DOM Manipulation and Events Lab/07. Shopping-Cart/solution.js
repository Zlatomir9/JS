function solve() {
   let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
   let textArea = document.getElementsByTagName('textarea')[0];

   let products = [];
   let totalPrice = 0;

   let checkOut = false;

   shoppingCart.addEventListener('click', function (e) {
      if (e.target.nodeName !== 'BUTTON') {
         return;
      };

      if (checkOut) {
         return;
      }

      let btn = e.target;

      if (Array.from(btn.classList).indexOf('add-product') >= 0) {
         let product = e.target.parentElement.parentElement;
         let name = product.querySelectorAll('.product-title')[0].textContent;
         let price = product.querySelectorAll('.product-line-price')[0].textContent;

         textArea.textContent += `Added ${name} for ${price} to the cart.\n`;

         if (products.indexOf(name) < 0) {
            products.push(name);
         }

         totalPrice += Number(price);
      } else if (Array.from(btn.classList).indexOf('checkout') >= 0) {
         let list = products.join(', ')
         textArea.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`;
         checkOut = true;
      }
   });
}