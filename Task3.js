let library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (let Index = 0; Index < library.length; Index++) {
    let book = " ' " + library[Index].title + " ' " + ' by ' + library[Index].author + " . ";
    if (library[Index].readingStatus) {

        console.log("Already read " + book);

    }
    else {

        console.log("You still need to read " + book);

    }
}
