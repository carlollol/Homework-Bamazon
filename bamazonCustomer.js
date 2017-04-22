// required npm
var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "francis3",
    database: "Bamazon"
});

function bidItem(name, bid) {
    this.name = name;
    this.bid = bid;
}

// bidItem.prototype.printInfo = function() {
//     console.log("Name: " + this.name +
//         "\nPosition: " + this.position + "\nOffense: " +
//         this.offense + "\nDefense: " + this.defense);
    // return "I'm a programmer";
// };

var askUser = function() {
    console.log(" ");
    console.log("WELCOME TO CID's EMPORIUM!");
    console.log(" ");

    inquirer.prompt([{
        name: "name",
        message: "Would you like to purchase or view my wares? (p/v)"
    }, ]).then(function(answers) {
        if (answers.name === "v") {
        connection.query("SELECT * FROM products", function(err, res) {
        	console.log(" ");
        	console.log("ITEM LIST")
        	console.log("_______________________________________");
            for (var i = 0; i < res.length; i++) {
                console.log(" ");
                console.log("ID No. " + res[i].item_id + " | " + res[i].product_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
                console.log(" ");
                console.log("---------------------------------------");
            }
            purchaseItem();
        })
        } else if (answers.name === "p") {
            postItem();
        }
    })
};

// var getCurrentBid = connections.query("SELECT * FROM items WHERE name= " + answers.name, function(err, res)

var purchaseItem = function() {
    inquirer.prompt([{
        name: "name",
        message: "Would you like to purchase anything? (y/n)"
    }]).then(function(answers) {
        if (answer.name === y){
        connection.query("SELECT * FROM items WHERE name = ?", [{name:answers.name}], function(err, res) {
            console.log(res);

            inquirer.prompt([{
                name: "price",
                message: "How much would you like to bid?"
            }]).then(function(answers) {
                // if (answers.price > ) {
                console.log("place a bid");
            })
        })
    }
})
};

var postItem = function() {
    inquirer.prompt([{
            name: "name",
            message: "What is your item?"
        },
        {
            name: "price",
            message: "How much is it?"
        },
    ]).then(function(answers) {
        connection.query("INSERT INTO items SET ?", {
            name: answers.name,
            price: answers.price
        }, function(err, res) {
            console.log("Your item has been added");
        })
    })
};

askUser();

// var newItem = new bidItem(answers.name, answers.price);

// dude.printInfo();

// count++;

// askQuestion();


// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
// });