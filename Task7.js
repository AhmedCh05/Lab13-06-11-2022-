class Game {
    info() {
        return "I love games and sports";
    }
}

class Cricket extends Game {
    info() {
        return "I love Cricket";
    }
}

class Football extends Game {
    info() {
        return "I love Football";
    }
}


let test1 = new Game();
console.log(test1.info());


let test2 = new Cricket();
console.log(test2.info());

let test3 = new Football();
console.log(test3.info());