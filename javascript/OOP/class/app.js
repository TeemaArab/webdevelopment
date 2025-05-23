// class Color{
//     constructor(r,g,b, name){
//       this.r = r;
//       this.g = g;       
//       this.b = b;
//       this.name = name;
//     }
//     // paint(){
//     //     return `Let's paint the ${this.name} color with RGB(${this.r},${this.g},${this.b})`;
//     // }
//     rgb(){
//         const {r, g, b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     hex(){
//         const {r, g, b} = this;
//          return ('#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1));
//     }
      
// }
// const red = new Color(255,0,0, 'red');
// const white = new Color(255,255,255, 'white');


class Pet{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
       return `${this.name} is eating`; 
    }
}

class Cat extends Pet{
    constructor(name, age,livesLeft=9){
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow(){
        return 'Mew Mew';
    }
}

class Dog extends Pet{
    bark(){
        return 'Woof Woof';
    }
}

const cat  = new Cat('Milo', 2);
const dog  = new Dog('Max', 3);
cat.eat();
dog.eat();
cat.meow(); 
dog.bark();
