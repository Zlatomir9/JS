function solve(input) {
    let data = {};

    let obj = {
        create: (n, inherits, m) =>
            (data[n] = inherits ? Object.create(data[m]) : {}),
        set: (n, k, v) => (data[n][k] = v),
        print: n => {
            let arr = [];
            for (let key in data[n]) {
                arr.push(`${key}:${data[n][key]}`)
            }
            console.log(arr.join(","))
        },
    }

    input.forEach(x => {
        const [c, n, k, v] = x.split(" ")

        obj[c](n, k, v)
    })
}

let result = solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);

console.log(result);