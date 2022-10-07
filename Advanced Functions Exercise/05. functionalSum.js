function add (n) {
    let inner = 0;

    function f(x) {
        inner += x;

        return f;
    }

    f.toString = () => inner;
    return f(n);
};

console.log(add(1)(6)(-3).toString());