function student(name, grade){
    this.name = name
    this.grade = grade
}

student.prototype.sayname = function(){
    console.log(this.name)
}

const StudentOne = new student("jerry", "A+")
StudentOne.sayname()