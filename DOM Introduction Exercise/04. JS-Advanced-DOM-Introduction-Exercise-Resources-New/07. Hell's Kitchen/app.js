function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.getElementById('inputs').getElementsByTagName('textarea')[0].value);
      let result = [];
      let output = document.querySelector("#bestRestaurant p");
      let workersOutput = document.querySelector("#workers p");
      for (let i = 0; i < input.length; i++) {
         let [name, workers] = input[i].split(' - ');

         if (!result.find(e => e.name === name)) {
            result.push({
               name,
               averageSalary: 0,
               bestSalary: 0,
               sumSalary: 0,
               workerList: []
            });
         }

         let currRestaurant = result.find(e => e.name === name);
         workers = workers.split(", ");

         for (let j = 0; j < workers.length; j++) {
            let [name, salary] = workers[j].split(" ");
            salary = Number(salary);
            currRestaurant.sumSalary += salary;
            if (currRestaurant.bestSalary < salary) {
               currRestaurant.bestSalary = salary.toFixed(2);
            }

            currRestaurant.workerList.push({
               name,
               salary
            });

            currRestaurant.averageSalary = (currRestaurant.sumSalary / currRestaurant.workerList.length).toFixed(2);
         }
      }

      let bestRestaurant = result.sort((a, b) => b.averageSalary - a.averageSalary)[0];

      output.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary} Best Salary: ${bestRestaurant.bestSalary}`;

      let sortedListOfWorkers = bestRestaurant.workerList.sort((a, b) => b.salary - a.salary);
      let buffer = "";
      for (let worker of sortedListOfWorkers) {
         buffer += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }

      workersOutput.textContent += buffer;
   }
}