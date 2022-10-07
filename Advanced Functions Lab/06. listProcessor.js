function solve (input) {
    let result = []

    let object = {
        add: value => result.push(value),
        remove: value => (result = result.filter(x => x !== value)),
        print: () => console.log(result.join(",")),
    };

    input.forEach(x => {
        const [command, value] = x.split(" ");

        object[command](value);
    });
}

solve (['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve (['add pesho', 'add george', 'add peter', 'remove peter','print']);