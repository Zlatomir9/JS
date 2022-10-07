function solve () {
    let content = '';

    return {
        append: (s) => content += s,
        removeStart: (n) => content = content.substring(n),
        removeEnd: (n) => content = content.substring(0, content.length - n),
        print: () => console.log(content)
    };
}

let result = solve();

result.append('cat');
result.append('dog');
result.removeStart(2);
result.print();