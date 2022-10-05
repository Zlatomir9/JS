function solve() {
  let btns = document.querySelectorAll("button");

  btns[0].addEventListener("click", generate);
  btns[1].addEventListener("click", buy);

  function generate() {
    let inputItems = JSON.parse(document.querySelectorAll("textarea")[0].value);
    let tBody = document.getElementsByTagName("tbody")[0];

    for (let item of inputItems) {
      let tableRow = document.createElement("tr");
      tableRow.innerHTML = `<td><img src=${item.img}></td>`+
                            `<td><p>${item.name}</p></td>` +
                            `<td><p>${item.price}</p></td>` +
                            `<td><p>${item.decFactor}</p></td>` +
                            `<td><input type="checkbox"></td>`;

      tBody.appendChild(tableRow);
    };
  };

  function buy() {
    let boughtItems = document.querySelectorAll("textarea")[1];
    let table = Array.from(document.querySelectorAll("tbody tr"));
    let result = [];
    for (let el of table) {
      if (el.querySelector("input[type=checkbox]:checked")) {
        let tableData = Array.from(el.querySelectorAll("td"));
        let info = {
          name: tableData[1].children[0].textContent,
          price: tableData[2].children[0].textContent,
          decFactor: tableData[3].children[0].textContent
        };

        result.push(info);
      }
    }

    let names = "";
    let totalPrice = 0;
    let decFactor = 0;
    console.log(result);

    for (let i = 0; i < result.length; i++) {
      let item = result[i];
      let sep = i == result.length - 1 ? "" : ", ";
      names += item.name + sep;
      totalPrice += Number(item.price);
      decFactor += Number(item.decFactor);
    }

    decFactor /= result.length;
    boughtItems.value = `Bought furniture: ${names}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor}`;
  };
}