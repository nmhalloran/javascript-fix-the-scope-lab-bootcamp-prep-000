function outerFunction() {
  var innerVariable = "I'm sort of a secret.";

  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
    console.log(inaccessible)
    return innerVariable;
  }
}

var myScope = outerFunction();

myScope();
