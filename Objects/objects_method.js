let restaurant = {
    name: 'SteakBeef',
    guestCapacity: 75,
    guestCount: 0,

    // Methods = an object property whose value is a function
    checkAvailability: function(partySize) {
        let seatLeft = this.guestCapacity - this.guestCount
        return partySize <= seatLeft
    },

    // seatParty
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },

    // removeParty 
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}



restaurant.seatParty(72)
console.log(restaurant.checkAvailability(5))

restaurant.removeParty(5)
console.log(restaurant.checkAvailability(5))
