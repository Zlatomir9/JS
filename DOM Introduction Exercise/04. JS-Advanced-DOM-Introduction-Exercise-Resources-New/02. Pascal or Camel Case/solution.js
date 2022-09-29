function solve() {
    let text = document.getElementById("text").value;
    let convention = document.getElementById("naming-convention").value;
    let result = "";
    
    if(convention === "Camel Case") {
        let splittedText = text.split(' ');
        result += splittedText[0][0].toLowerCase() + splittedText[0].slice(1).toLowerCase();
        for(let i = 1; i < splittedText.length; i++) {
            result += splittedText[i][0].toUpperCase() + splittedText[i].slice(1).toLowerCase();
        }
    } else if (convention === "Pascal Case") {
      let splittedText = text.split(' ');
      for(let i = 0; i < splittedText.length; i++) {
        result += splittedText[i][0].toUpperCase() + splittedText[i].slice(1).toLowerCase();
    }
    } else {
      document.getElementById("result").innerText = "Error!";
      return;
    }

    document.getElementById("result").innerText = result;
}