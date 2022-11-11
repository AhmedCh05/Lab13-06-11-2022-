class BankAccount {
    #accountID;
    #accountTitle;
    #accountBalance;
    #emailID;

    constructor(ID, Title, Balance, email) {
        this.#accountID = ID;
        this.#accountTitle = Title;
        this.#accountBalance = Balance;
        this.#emailID = email;
    }

    setID(Id) {
        this.#accountID = Id;
    }
    setTitle(title) {
        this.#accountTitle = title;
    }
    setBalance(balance) {
        this.#accountBalance = balance;
    }
    setEmail(email) {
        return this.#emailID;
    }
    getID() {
        return this.#accountID;
    }
    getTitle() {
        return this.#accountTitle;
    }
    getBalance() {
        return this.#accountBalance;
    }
    getEmail() {
        return this.#emailID;
    }
    withdrawAmount(amount) {
        if (this.#accountBalance > amount) {
            this.#accountBalance -= amount;
            console.log("**********************\nAmount Withdraw Successful\nNew Balance Amount : ", this.getBalance(), "\n***********************************");
        }
        else {
            console.log("***********************\nAccount Balance Low...Withdraw Failed\n*********************")
        }
    }
    depositAmount(amount) {
        if (amount > 0) {
            this.#accountBalance += amount;
            console.log("***********************\nAmount Deposit Successful\nNew Balance Amount : ", this.getBalance(), "\n**************************************");
        }
    }
}


let User1 = new BankAccount(123, "Current", 250000, "123@gmail.com");


let User2 = new BankAccount(12569, "Savings", 880000, "1259@gmail.com");

User1.depositAmount(12000);

User1.withdrawAmount(5000);