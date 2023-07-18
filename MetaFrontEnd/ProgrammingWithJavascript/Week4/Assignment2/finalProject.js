// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for(i of dishData){
        var finalPrice;
        if( taxBoolean == true){
           finalPrice = dishData[i]['price'] * tax
        }
        else if(taxBoolean == false){
            finalPrice = dishData[i]['price']
        }
        else{
            console.log('You neeed to pass a boolean to the getPrices call!')
            return
        }
        console.log(`Dish: ${dishData[i]["name"]}`)
    }
}

// Implement getDiscount()
function getDiscount() {
    
}

// Call getDiscount()
