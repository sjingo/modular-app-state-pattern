// OLOO
/* var Foo= {
    init: function(who){
        this.me = who;
    },
    identify: function(){
        return "I am " + this.me;
    }
}

var Bar = Object.create(Foo);

Bar.speak = function () {
    alert("Hello, " + this.identify() + ".")
};

var b1 = Object.create(Bar);
b1.init("b1");
var b2 = Object.create(Bar);
b2.init("b2");
b1.speak();
b2.speak(); */

/* ES6 class */
class Foo {
    constructor(who){
        this.me = who;
    }
    identify(){
        return "I am "  + this.me;
    }
}

class Bar extends Foo {
    speak(){
        alert("Hello , " + this.identify() + ".");
    }
}

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();
b2.speak();


/* Prototype */
/// function Foo(who) {
//     this.me = who;
// }
// Foo.prototype.identify = function(){
//     return "I am " + this.me;
// } 

// function Bar(who){
//     Foo.call(this, who)
// }

// Bar.prototype = Object.create(Foo.prototype);

// Bar.prototype.speak = function(){
//     alert("Hello, " + this.identify() + ".")
// }
// var b1 = new Bar("b1");
// b1.speak(); 