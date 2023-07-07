class Parent {
    constructor(name, hair){
        this.name = name
        this.hair = hair
    }

    introduction(){
        console.log(`Hello my name is ${this.name}`)

    }
}


class Child extends Parent {
    constructor(name, hair, toys){
        super(name,hair)
        this.FavToys = toys
    }

    intro(){
        super.introduction
        console.log(`My Favorite toy is ${this.FavToys}, my hair is ${this.hair}`)
    }
}




var child1 = new Child('Alice', 'blonde', 'Barbie')
child1.intro()