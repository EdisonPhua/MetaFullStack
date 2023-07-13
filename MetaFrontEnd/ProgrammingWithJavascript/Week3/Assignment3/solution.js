// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy(array){
    for( dairy of array)
    console.log(dairy)
}

logDairy(dairy)

// Task 2
const animal = {

    canJump: true
    
    };
    
    const bird = Object.create(animal);
    
    bird.canFly = true;
    
    bird.hasFeathers = true;


function birdcan(bird){
    for( key of Object.keys(bird))
        console.log(`${key}:${bird[key]}`)
}

birdcan(bird)
// Task 3
function animalCan(bird){
    for(key in bird)
    console.log(`${key}:${bird[key]}`)
}

animalCan(bird)


