//problem 01: ana to vori    16 ana =1 vori
function anaToVori(ana) {
    let vori = ana / 16;
    return vori;
}
// console.log(anaToVori(16));


//problem 02: claculation
/* price per unit
singara -7
samucha -10
jilabi -15
*/
function pandaCost(singara, samucha, jilabi) {
    const singaraPerUnitPrice = 7;
    const samuchaPerUnitPrice = 10;
    const jilabiPerUnitPrice = 15;

    let singaraPrice = singara * singaraPerUnitPrice;
    let samuchaPrice = samucha * samuchaPerUnitPrice;
    let jilabiPrice = jilabi * jilabiPerUnitPrice;

    totalPrice = singaraPrice + samuchaPrice + jilabiPrice;
    return totalPrice;
}
// console.log(pandaCost(1, 3, 6));

//problem 03: 
/* 
100 per head -5000taka
100+ -200 per head -4000taka
200+ per head -3000taka
*/
function picnicBudget(people) {
    const oneToHundreadCost = 5000;
    const hundreadOneToTwoHundreadCost = 4000;
    const twoHUndreadOneToAllCost = 3000;
    if (people <= 100) {
        const cost = people * oneToHundreadCost;
        return cost;
    } else if (people <= 200) {
        const onlyHundreadPeopleCost = 100 * oneToHundreadCost;
        const extraPeople = people - 100;
        const forOverHundreadPeople = extraPeople * hundreadOneToTwoHundreadCost;
        const totalCost = onlyHundreadPeopleCost + forOverHundreadPeople;
        return totalCost;
    } else {
        const onlyHundreadPeopleCost = 100 * oneToHundreadCost;
        const forOverHundreadPeople = 100 * hundreadOneToTwoHundreadCost;
        const extraPeople = people - 200;
        const forOverTwoHundreadPeopleCost = extraPeople * twoHUndreadOneToAllCost;

        const totalCost = onlyHundreadPeopleCost + forOverHundreadPeople + forOverTwoHundreadPeopleCost;
        return totalCost;
    }
}
// console.log(picnicBudget(220));


//problem 04: friends dar modha first odd odd length hba satai return korta hba
function oddFriend(friendsName) {
    for (let i = 0; i < friendsName.length; i++){
        friends = friendsName[i];
        if (friends.length % 2 != 0) {
            return (friends);
        }
    }
}
console.log(oddFriend(['abid', 'sabera', 'foyssall', 'abida aktar munni', 'nafiza khan umma habiba']));