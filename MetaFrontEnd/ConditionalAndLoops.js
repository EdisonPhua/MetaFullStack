//Task 1
for ( var  i = 1 ; i < 11; i ++){
    if( i == 1){
        console.log('Gold Medal')
        
    }
    else if ( i == 2){
        console.log('SilverMedal')
        

    }
    else if (i == 3){
        console.log('Bronze Medal')
        
    }
    else{
        console.log(i)
    }
}

//Task 2

for ( var i = 1; i < 11; i++){
    switch (i) {
        case 1:
            console.log('Gold Medal')
        case 2:
            console.log('Silver Medal')
        case 3:
            console.log('Bronze Medal')

        default:
            console.log(i)

    }
}