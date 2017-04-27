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
            purchaseItem();
        }
    })
};

// var getCurrentBid = connections.query("SELECT * FROM items WHERE name= " + answers.name, function(err, res)

var purchaseItem = function() {
    inquirer.prompt([{
        name: "name",
        message: "Type the ID of the product you wish to purchase"
        },
        {
            name: "stock",
            message: "How many would you like to buy?"
        }
    ]).then(function(answers) {
        var id = answers.name;
        var amount = answers.stock;  
        updateStock(id, amount);
    })
};

var updateStock = function(item, number) {
    connection.query('SELECT stock_quantity FROM products WHERE item_id = ?', [item], function (err, res) {
        if(err)
            throw err;
        else {
            if(number < res[0].stock_quantity) {
                var newStock = (res[0].stock_quantity) - number;
                connection.query('UPDATE products SET ? WHERE item_id = ?', [{stock_quantity: newStock} ,item], function(){
                    console.log("Pleasure doing business with ya!");
                });
            }
            else {
                console.log("Are you mad or just delirious? Come back next time...");
                purchaseItem();
            }   
        }
    })
};


askUser();

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
// });