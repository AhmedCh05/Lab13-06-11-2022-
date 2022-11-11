class Payment {
    #amount;
    constructor(amount) {
        this.#amount = amount;
    }
    setAmount(amount) {
        this.#amount = amount;
    }
    getamount() {
        return this.#amount;
    }
    paymentDetails() {
        console.log("The Amount User Has Is ", this.#amount);
    }


}

class CashPayment extends Payment {
    constructor(amount) {
        super(amount);
    }
    paymentDetails() {
        console.log("*****************\nThe Payment is In Cash\n*****************");
    }
}

class CardPayment extends Payment {
    constructor(amount, name, exp, ccn) {
        super(amount);
        this.Credit = new CreditCards(name, exp, ccn);
    }
    paymentDetails() {
        console.log("********************************\nDetails Displayed By Association Behaviour\n*****************\nThe Payment is In Card\n*****************");
    }
}

class CreditCards {
    #CardName;
    #expirationDate;
    #CreditCardNumber;

    constructor(name, exp, ccn) {
        this.#CardName = name;
        this.#CreditCardNumber = ccn;
        this.#expirationDate = exp;
    }

    setCardName(name) {
        if (this.#CardName == null) {
            this.#CardName = name;
        }
    }
    setExpirationDate(exp) {
        this.#expirationDate = exp;
    }
    setCardNumber(ccn) {
        this.#CreditCardNumber = ccn;
    }
    getCardName() {
        return this.#CardName;
    }
    getExpirationDate() {
        return this.#expirationDate;
    }
    getCardNumber() {
        return this.#CreditCardNumber;
    }
    paymentDetails() {
        console.log("*******************\nCard Name : ", this.getCardName(), "\nExpiration Date : ", this.getExpirationDate(), "\nCredit Card Number : ", this.getCardNumber());

    }
}


let p1 = new CashPayment(25000);
p1.paymentDetails();

let p2 = new CashPayment(990990);
p2.paymentDetails();


let q1 = new CardPayment(777455, "Ahmed", "21-02-2011", "78797674757271731");
q1.Credit.paymentDetails();

let q2 = new CardPayment(5546554, "Sukhera", "09-08-2022", "1254987632148960");
q2.Credit.paymentDetails();