
var roomRate = 0;
function getRoomRate() {
    var room = document.getElementById("room").value;
    if (room == "standard") {
        roomRate = 100;
    } else if (room == "junior") {
        roomRate = 120;
    } else {
        roomRate = 150;
    }
}

var spaRate = 0;
function getSpaRate() {
    var spa = document.getElementById("spa").checked;
    spa == true ? spaRate = 20: spaRate = 0;
}

var getRoomSpaRate = () => roomRate + spaRate;

function getPaxNum() {
    var paxNum = document.getElementById("pax-num").value;
    if (paxNum == "pax1") {
        roomRateTotal = getRoomSpaRate() * 0.75;
    } else if (paxNum == "pax3") {
        roomRateTotal = getRoomSpaRate() * 1.25;
    } else {
        roomRateTotal = getRoomSpaRate();
    }
}

function getNightRate() {
    nightNumber = parseInt(document.getElementById("night-num").value);
    return nightNumber * roomRateTotal;
}

function getParkingRate() {
    nightParking = parseInt(document.getElementById("parking-num").value);
    return nightParking * 10;
}

function getTotal() {
    getSpaRate();
    getRoomRate();
    getRoomSpaRate();
    getPaxNum();
    document.getElementById("result").innerText = getNightRate() + getParkingRate();
}

// document.getElementById("button-total").addEventListener("click", getTotal);
document.getElementById("room").addEventListener("change", getTotal);
document.getElementById("spa").addEventListener("change", getTotal);
document.getElementById("pax-num").addEventListener("change", getTotal);
document.getElementById("night-num").addEventListener("keyup", getTotal);
document.getElementById("parking-num").addEventListener("keyup", getTotal);

