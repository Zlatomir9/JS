function search() {
   let towns = document.getElementById("towns").getElementsByTagName("li");
   let searchText = document.getElementById("searchText").value;
   let matches = 0;

   for (let town of towns) {

      let text = town.textContent;

      if (text.includes(searchText)) {
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
         matches++;
      } else {
         town.style.textDecoration = "none";
         town.style.fontWeight = "";
      }
   };


   document.getElementById("result").innerText = `${matches} matches found`;
}
