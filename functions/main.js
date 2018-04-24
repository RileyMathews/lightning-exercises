//function that takes arguments of which way and how fast a car is moving
function go(direction, mph) {
    const element = document.getElementById("car");
    element.innerHTML += (`The car is moving ${direction} at ${mph} mph.`);
}

go("forward", 25);