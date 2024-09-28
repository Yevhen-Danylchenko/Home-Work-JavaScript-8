// ========================= Завдання 1 =============================

// class Cars{
//     constructor(firm,model,year,speed){
//         this.firm = firm;
//         this.model = model;
//         this.year = year;
//         this.speed =speed;
//     }

//     getTime(s) {
//         let time = s / this.speed;
//         let tmp = Math.floor(time / 4);
//         return Math.floor(time += tmp);
//     }

//     getInfo() {
//         console.log(`Firm: ${this.firm} \n Model: ${this.model} \n Year: ${this.year} \n Speed: ${this.speed}`);
//     }
// }

// const Audi = new Cars('Japan', 'A4', '2022', 190);

// console.log(Audi.getTime(2000));
// Audi.getInfo();


// ============================ Завдання 2 =================================

let Nod = [];
let numer;
let denom;
let num;
let num1;
let number;
let number1;
let number2;
let number3;

class Fractions {
    constructor(numerator, denominator, numerator1, denominator1) {
        this.numerator = numerator;
        this.denominator = denominator;
        this.numerator1 = numerator1;
        this.denominator1 = denominator1;
    }

    getNod() {
        for (let i = 2; i <= this.denominator; i++) {
            if (this.denominator % i === 0) {
                Nod.push(i);
            }
        }

        for (let i = 2; i <= this.denominator1; i++) {
            if (this.denominator1 % i === 0) {
                Nod.push(i);
            }
        }
    }

    Nod1() {
        num = Nod.reduce((total, arr) => total * arr, 1);
        
        num1 = num;

        num = num / this.denominator;
        num1 = num1 / this.denominator1;

        number = this.numerator * num;
        number1 = this.denominator * num;
        number2 = this.numerator1 * num1;
        number3 = this.denominator1 * num1;
    }

    getSum() {
        
        numer = number + number2;
        
        console.log(numer, number1);
    }

    getSubstraction(){
        
        numer = number - number2;
        
        console.log(numer, number1);
    }

    getMultiplication(){
        
        numer = number * number2;
        denom = number1 * number3;
        console.log(numer, denom);
    }

    getDivision(){
        
        numer = number * number3;
        denom = number1 * number2;
        console.log(numer, denom);
    }
}

const numb = new Fractions(2,3,1,2);

numb.getNod();
numb.Nod1();
numb.getSum();
numb.getSubstraction();
numb.getMultiplication();
numb.getDivision();






