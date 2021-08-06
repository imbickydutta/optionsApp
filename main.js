const readline = require('readline')

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function app() {
    readline1.question("\n Press 1 to show all books \n Press 2 to add a book \n Press 3 to Quit : ", (a) => {
        if (a == 1) {
            console.log("\n");
            for (j = 0; j < books.length; j++) {
                console.log(`${j + 1}.`, books[j]);
            }
            // console.log("\n", books.join(" "), "\n");
            app()

        } else if (a == 2) {
            readline1.question("\n Enter Book Names(for multiple separate using commas (,)) : ", (name) => {
                name = name.split(",")
                for (let j = 0; j < name.length; j++) {
                    books.push(`${name[j]}`);
                }
                console.log("\n", "Books Added Successfully", "\n");
                app()
            })
        } else if (a == 3) {
            readline1.question("\n Are you sure you want to quit - press Y to quit:  ", (q) => {
                if (q == "y") {
                    readline1.close();
                } else {
                    console.log("\n Wrong Key");
                    app()
                }
            })
        } else {
            console.log("\n", "You have selected an invalid entry so please press 1, 2 or 3");
            app()
        }
    })
}

readline1.on("close", () => {
    console.log("\n", "Bye Bye!");
})



let books = ["Ikigai", "Atomic Habits"]
let i = 3;
app()
