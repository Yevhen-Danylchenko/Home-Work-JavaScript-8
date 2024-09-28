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

        const Nod1 = (...Nod) => {
            num = Nod.reduce((total, arr) => total * arr, 0)
        }

        num = Nod1;

        num1 = num;

        num = num / this.denominator;
        num1 = num1 / this.denominator1;

        this.numerator *= num;
        this.denominator *= num;
        this.numerator1 *= num1;
        this.denominator1 *= num1;
    }

    getSum() {
        numer = this.numerator + this.numerator1;
        denom = this.denominator;

        console.log(numer, denom);
    }

    getSubstraction(){
        numer = this.numerator - this.numerator1;
        denom = this.denominator;
        console.log(numer, denom);
    }

    getMultiplication(){
        numer = this.numerator * this.numerator1;
        denom = this.denominator * this.denominator1;
        console.log(numer, denom);
    }

    getDivision(){
        numer = this.numerator * this.denominator1;
        denom = this.denominator * this.numerator1;
        console.log(numer, denom);
    }
}

const numb = new Fractions(2,3,1,2);

numb.getNod();
numb.getSum();






