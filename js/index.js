var a = parseFloat(prompt('Enter A value'));
var b = parseFloat(prompt('Enter B value'));
var c = parseFloat(prompt('Enter C value'));

function D(a, b, c) {
    return b * b - 4 * a * c;
}

function QuadrEq(a, b, c) {
    var d = D(a, b, c);
    
     if (d == 0) {
        var x = (-b) / 2 * a;
        var result = alert("x =" + x);
    }
    if (d > 0) {
        var root1 = (-b - Math.sqrt(d)) / (2 * a);
        var root2 = (-b + Math.sqrt(d)) / (2 * a);
        var result = alert("x1 =" + root1 + "  x2 = " + root2);
    }
    
   
    else {
        var result = alert("Discriminator is negative")
    }
    return
}

QuadrEq(a, b, c);
