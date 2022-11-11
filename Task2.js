class Player {
    #PlayerID;
    #PlayerName;
    #PlayerRuns;
    #PlayerDateOfBirth;
    #PlayerShirtNumber;

    static TotalRuns = 0;

    static getTotalRuns() {
        return Player.TotalRuns;
    }

    constructor(ID, name, runs, dob, shirtno) {
        this.#PlayerID = ID;
        this.#PlayerName = name;
        this.#PlayerRuns = runs;
        this.#PlayerDateOfBirth = dob;
        this.#PlayerShirtNumber = shirtno;
        Player.TotalRuns = Player.TotalRuns + runs;
    }
    getRuns() {
        return this.#PlayerRuns;
    }
    getID() {
        return this.#PlayerID;
    }
    getName() {
        return this.#PlayerName;
    }
    getDOB() {
        return this.#PlayerDateOfBirth;
    }
    getShirtNo() {
        return this.#PlayerShirtNumber;
    }
    AddRuns(run) {
        this.#PlayerRuns += run;
        Player.TotalRuns += run;
        this.DisplayInfo();
        console.log("Total Runs : ", this.getRuns());
    }

    DisplayInfo() {
        console.log("*****************************\nPlayer ID : ", this.getID(), "\nPlayer Name : ", this.getName());
        console.log("Player Runs : ", this.getRuns(), "\nPlayer Date Of Birth : ", this.getDOB(), "\nPlayer Shirt Number : ", this.getShirtNo());
    }

}


let p1 = new Player(123, "Sukhera", 5, "20-07-1999", 69);
p1.DisplayInfo();

let p2 = new Player(311, "Ahmed", 88, "05-12-1999", 77);
p2.DisplayInfo();

console.log("******************\nTotal Runs Of Both Players : ", Player.getTotalRuns());