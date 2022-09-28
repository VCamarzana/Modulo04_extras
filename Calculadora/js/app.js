
var num1 = () => parseInt(document.getElementById("input-number").value);
var partialResult = null;

var addOp = false;
var substractOp = false;
var multiplyOp = false;
var divideOp = false;

function getAdd() {
    if (substractOp) {
        partialResult = partialResult - num1();
    } else if (multiplyOp) {
        partialResult = partialResult * num1();
    } else if (divideOp) {
        partialResult = partialResult / num1();
    } else {
        partialResult = partialResult + num1();
    }
    document.getElementById("result").innerText = partialResult;
    document.getElementById("input-number").value = "";
    addOp = true;
    substractOp = false;
    multiplyOp = false;
    divideOp = false;
}

function getSubstract() {
    if (partialResult == null) {
        partialResult = num1();
    } else {
        if (addOp) {
            partialResult = partialResult + num1();
        } else if (multiplyOp) {
            partialResult = partialResult * num1();
        } else if (divideOp) {
            partialResult = partialResult / num1();
        } else {
            partialResult = partialResult - num1();
        }
    }
    document.getElementById("result").innerText = partialResult;
    document.getElementById("input-number").value = "";
    addOp = false;
    substractOp = true;
    multiplyOp = false;
    divideOp = false;
}

function getMultiply() {
    if (partialResult == null) {
        partialResult = num1();
    } else {
        if (addOp) {
            partialResult = partialResult + num1();
        } else if (substractOp) {
            partialResult = partialResult - num1();
        } else if (divideOp) {
            partialResult = partialResult / num1();
        } else {
            partialResult = partialResult * num1();
        }
    }
    document.getElementById("result").innerText = partialResult;
    document.getElementById("input-number").value = "";
    addOp = false;
    substractOp = false;
    multiplyOp = true;
    divideOp = false;
}

function getDivide() {
    if (partialResult == null) {
        partialResult = num1();
    } else {
        if (addOp) {
            partialResult = partialResult + num1();
        } else if (multiplyOp) {
            partialResult = partialResult * num1();
        } else if (substractOp) {
            partialResult = partialResult - num1();
        } else {
            partialResult = partialResult / num1();
        }
    }
    document.getElementById("result").innerText = partialResult;
    document.getElementById("input-number").value = "";
    addOp = false;
    substractOp = false;
    multiplyOp = false;
    divideOp = true;
}

function getResult() {
    if (addOp) {
        document.getElementById("result").innerText = partialResult + num1();
        addOp = false;
    } else if (substractOp) {
        document.getElementById("result").innerText = partialResult - num1();
        substractOp = false;
    } else if (multiplyOp) {
        document.getElementById("result").innerText = partialResult * num1();
        multiplyOp = false;
    } else if (divideOp) {
        document.getElementById("result").innerText = partialResult / num1();
        divideOp = false;
    }
    document.getElementById("input-number").value = 0;
    partialResult = null;
}

document.getElementById("button-add").addEventListener("click", getAdd);
document.getElementById("button-substract").addEventListener("click", getSubstract);
document.getElementById("button-multiply").addEventListener("click", getMultiply);
document.getElementById("button-divide").addEventListener("click", getDivide);
document.getElementById("button-equal").addEventListener("click", getResult);