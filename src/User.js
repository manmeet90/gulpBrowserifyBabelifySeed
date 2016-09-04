export class User {
    constructor (name, email){
        this.name = name;
        this.email = email;
    }

    printUser(){
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }

    toString(){
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}