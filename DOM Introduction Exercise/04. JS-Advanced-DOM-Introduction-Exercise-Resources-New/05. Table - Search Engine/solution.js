function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let table = document.querySelectorAll("table > tbody > tr");
      let searchField = document.getElementById("searchField").value;

      for (i = 0; i < table.length; i++) {

         if (table[i].innerText.includes(searchField)) {
            table[i].classList.add('select');
         }
      }
   }
}