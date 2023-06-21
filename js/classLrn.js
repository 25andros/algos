
class Person {

    constructor(fname, lname){
        this.firstName=fname
        this.lastName=lname
    }

    speak(){
        console.log(`Hello, I am ${this.firstName} ${this.lastName}`)

}
}

const p1 = new Person('jack', 'lalane')
p1.speak()
