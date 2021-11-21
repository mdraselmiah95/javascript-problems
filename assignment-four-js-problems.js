// Problem 01: Convert seer to mon

function seerToMon(seer) {
    if (seer <= 0 || typeof seer == 'string') { //validation
        return 'Please, Enter the valid number.';
    }
    const mon = seer * 0.025;
    return mon;
}

const totalMon = seerToMon(80);
console.log(totalMon);


// Problem 02: Total sales

function totalSales(numberOfShirt, numberOfPant, numberOfShoes) {
    if (numberOfShirt < 0 || numberOfPant < 0 || numberOfShoes < 0 || typeof numberOfShirt == 'string' || typeof numberOfPant == 'string' || typeof numberOfShoes == 'string') { //validation
        return 'Please, Enter the valid number.';
    }
    const totalShirtPrice = numberOfShirt * 100;
    const totalPantPrice = numberOfPant * 200;
    const totalShoesPrice = numberOfShoes * 500;
    const totalSalesPrice = totalShirtPrice + totalPantPrice + totalShoesPrice;
    return totalSalesPrice;

}

const ourTotalSales = totalSales(5, 3, 2);
console.log(ourTotalSales);

// Problem 03: delivery cost

function deliveryCost(numberOfDeliveryShirt) {
    let totalCost = 0;
    if (numberOfDeliveryShirt < 0 || typeof numberOfDeliveryShirt == 'string') { //validation
        return 'Please, Enter the valid number.';
    } else if (numberOfDeliveryShirt <= 100) {
        totalCost = numberOfDeliveryShirt * 100;
    } else if (numberOfDeliveryShirt <= 200) {
        const firstHundredShirt = 100 * 100;
        const remainingShirt = numberOfDeliveryShirt - 100;
        const remainingShirtCost = remainingShirt * 80;
        totalCost = firstHundredShirt + remainingShirtCost;
    } else {
        const firstHundredShirt = 100 * 100;
        const remainingShirtCost = 100 * 80;
        const remainingFinalShirt = numberOfDeliveryShirt - 200;
        const remainingFinalShirtCost = remainingFinalShirt * 50;
        totalCost = firstHundredShirt + remainingShirtCost + remainingFinalShirtCost;
    }
    return totalCost;
}

const myDeliveryCost = deliveryCost(310);
console.log(myDeliveryCost);

// Problem 04: perfect friend

function perfectFriend(names) {
    let perfectMatch = '';
    for (let i = 0; i < names.length; i++) {
        if (names[i].length <= 0 || typeof names[i] == 'number') {
            return 'Please, Enter the valid name.'; //validation
        } else if (names[i].length == 5) {
            perfectMatch = names[i];
            break;
        }
    }
    return perfectMatch;
}


const myPerfectFriend = perfectFriend(['Asif', 'Opu', 'Roni', 'Sakib', 'Al-amin', 'Rohim', 'Mizan']);
console.log(myPerfectFriend);


// end problem