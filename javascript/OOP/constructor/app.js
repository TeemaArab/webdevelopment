function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}

const color1 = new Color(10,20,30);
const color2 = new Color(123,456,789);


///////////////////////////////////////////

function Car(brand, year) {
  this.brand = brand;
  this.year = year;
  this.honk = function () {
    console.log(this.brand + " says beep beep!");
  };
}

const car1 = new Car("Toyota", 2020);
const car2 = new Car("Honda", 2018);

car1.honk(); // 👉 Toyota says beep beep!
car2.honk(); // 👉 Honda says beep beep!
