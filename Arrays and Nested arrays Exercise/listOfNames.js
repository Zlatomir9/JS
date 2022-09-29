function listOfNames(names){

    names.sort((a, b) => {
        const nameA = a.toUpperCase();
        const nameB = b.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    });

    for(let i = 0; i < names.length; i++){
        console.log(`${i + 1}.${names[i]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);