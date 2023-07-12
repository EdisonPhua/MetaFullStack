// Task 1: Code a Person class
class Person{
    constructor(name="Tom", age=20, energy = 100){
        this.name = name
        this.age = age
        this.energy = energy
    }
    sleep(){
        this.energy += 10
    
    }
    dosomethingfun(){
        this.energy -= 10
    }

}
// Task 2: Code a Worker class
class worker extends Person{
    constructor(name, age,energy, xp=0, hourlywage = 10){
    super(name,age,energy)
    this.xp = xp
    this.hourlywage = hourlywage
    }
    
    gotowork(){
        this.xp += 10
    }
    
}

// Task 3: Code an intern object, run methods
function intern() {
    this.name = 'Bob'
    this.age = 21
    this.energy = 110
    this.xp =10
    this.hourlywage = 10

}



// Task 4: Code a manager object, methods
function manager() {
    
}