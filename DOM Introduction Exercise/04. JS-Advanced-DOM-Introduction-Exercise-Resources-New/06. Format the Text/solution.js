function solve() {
  let inputText = document.getElementById("input").value;
  let sentences = inputText.split('.');
  sentences.pop();

  for (let i = 0; i < sentences.length; i+= 3) {
    let result = "";
    
    if(i + 3 < sentences.length) {
      result += sentences[i] + '.' + sentences[i + 1] + '.' + sentences[i + 2] + '.';
    } else {
      for(let j = i; j < sentences.length; j++) {
        result += sentences[j] + '.';
      }
    }

    let output = document.getElementById("output");
    output.innerHTML += `<p>${result}</p>`;;
  }
}