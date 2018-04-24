// 1. Create an object to represent a driver. The object should have properties to represent the following: 
//driver's license number, a collection of vehicles they own, 
//and a collection of dates for when they have gotten a ticket.
const Driver = Object.create({}, {
    licenseNumber: {
        value: 12312412049,
        enumerable: true
    },
    ownedVehicles: {
        value: ["U.S.S. Enterprise 1701-D", "Silverado", "Mustang"],
        enumerable: true
    },
    ticketsReceived: {
        value: ["04/131988", "08/01/1990"],
        enumerable: true,
    },
    drive: {
        value: function (action) {
            console.log(`Yes ma'am, I will ${action}`)
        }
    }
})

Driver.drive("accelerate")
Driver.drive("turn left")
Driver.drive("turn right")
Driver.drive("turn left")
Driver.drive("decelerate")


// 2. Iterate over your object and console log the keys and their values.
for (const key in Driver) {
    console.log(`${key}: ${Driver[key]}`)
}