
// If conditional statements
var age = 10;
if (age >= 65){
    console.log('You get your income from your pension')
}
else if(age < 65 && age >= 18){
    console.log('Each month you get a salary')
}
else if( age<18){
    console.log('You get an allowance')
}
else{
    console.log('The value of the age variable is non numerical')
}


//Swich conditional statements
var day = 'Sunday';
switch(day){
    case 'Monday': 
    console.log('Do some Monday stuff')
    break
    case 'Tuesday':
        console.log('Do some Tuesday stuff')
        break
    case 'Wednesday':
        console.log('Do some Wednesday stuff')
        break
    case 'Thursday':
        console.log('Do some Thursday stuff')
        break
    case 'Friday':
        console.log('Do some Friday stuff')
        break
    case 'Saturday':
        console.log('Do some Saturday stuff')
        break
    case 'Sunday':
        console.log('Do some Sunday stuff')
        break
    default:
        console.log('There is no such day') 
        break
 
}