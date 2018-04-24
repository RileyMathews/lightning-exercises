// Use Object.create() in the following function
const CarFactory = (make, model, year) => {
    return Object.create({}, {
        make: {
            enumerable: true,
            value: make
        },
        model: {
            enumerable: true,
            value: model
        },
        yearManufactured: {
            writable: true,
            enumerable: true,
            value: year
        }
    })
}


const malibu = CarFactory("Chevy", "Malibu", 1987)
console.log(malibu)

/*
This should be the output in your console

{
    make: "Chevy",
    model: "Malibu",
    yearManufactured: 1987
}
*/