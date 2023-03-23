function printName() {
    var helloname = "Hello John";


    function inner() {
        return helloname;
    }
    setInterval(inner, 1000)
    return inner;
}

var greeting = printName();
console.log(greeting());