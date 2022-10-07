function calculator() {
    let elements = { n1: "", n2: "", result: ""};
    
    return result = {
        init: (num1, num2, res) => {
            elements.n1 = document.querySelector(num1),
            elements.n2 = document.querySelector(num2),
            elements.result = document.querySelector(res)
        },

        add: () => 
            (elements.result.value = Number (elements.n1.value) + Number(elements.n2.value)),
        subtract: () => 
            (elements.result.value = Number (elements.n1.value) - Number(elements.n2.value))
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result');