const mysql = require('mysql');
const request = require('request');
const fs = require('fs');
const inquirer = require('inquirer')
const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'password',
	database: 'bamazonDB'
});
connection.connect(function (err) {
	if (err) throw err;
	runSearch();
});
function runSearch() {
	console.log("Welcome to Bamazon! This is your one stop shop for all things junkfood.");
	inquirer
		.prompt({
			name: "action",
			type: "list",
			message: "What would you like to shop for?",
			choices: [
				"Ice Cream",
				"Chips",
				"Candy",
				"Condiments",
				"Cookies",
				"Soda"
			]
		}).then(function (answer) {
			switch (answer.action) {

				case "Ice Cream":
					iceCreamSearch();
					break;

				case "Chips":
					chipsSearch();
					break;

				case "Candy":
					candySearch();
					break;

				case "Condiments":
					condimentsSearch();
					break;

				case "Cookies":
					cookiesSearch();
					break;

				case "Soda":
					sodaSearch();
					break;
			}
		});
}
function sodaSearch() {
	inquirer.prompt({
		name: "action",
		type: "list",
		message: "Which soda would you like to purchase?",
		choices: [
			"Sprite",
			"Coke-a-Cola",
			"Dr.Pepper"
		]
	}).then(function (response) {
		inquirer.prompt({
			name: "amount",
			type: "input",
			message: "How many bottles of " + response.action + " would you like to purchase?",
			validate: function (value) {
				if (isNaN(value) === false) {
					return true;
				}
				return false;
			}

		}).then(function (amountAnswer) {
			var query = "SELECT * FROM products WHERE ?";
			var stock = "SELECT stock_qty FROM products WHERE ?";
			var price = "SELECT price FROM products WHERE ?";

			connection.query(query, {'product_name':response.action}, function (err, res) {
				// console.log(res);
				if (err) throw err;
				if (parseInt(amountAnswer.amount) > res[0].stock_qty) {
				
					console.log("Your request exceeds our inventory.")
					inquirer.prompt({
						name: "retry",
						type: "list",
						message: "Would you like to update your order quantity?",
						choices: ["Yes", "No"]

					}).then(function (retryAnswer) {
						if (retryAnswer === "Yes") {
							sodaAnswer();
						} else {
							runSearch();
						}
					})

				} else if (amountAnswer.amount <= res[0].stock_qty) {
					
					connection.query(price, {'product_name': response.action}, function (err, res) {
				
					//decrease the item quantity amount in mysql
					var newPrice = parseFloat(res[0].price);
					var quantity = parseFloat(amountAnswer.amount);
					var total = newPrice * quantity;
					console.log('Your total is $' + total);
					runSearch();
					});
				}
			})
		})
	})
}
function condimentsSearch() {
	inquirer.prompt({
		name: "action",
		type: "list",
		message: "Which ice cream sides would you like to purchase?",
		choices: [
			"Ice Cream Cones",
			"Waffle Cones",
			"Sugar Cones",
			"Caramel Sauce",
			"Strawberry Sauce",
			"Chocolate Sauce"
		]
	}).then(function (response) {
		inquirer.prompt({
			name: "amount",
			type: "input",
			message: "How many packages of " + response.action + " would you like to purchase?",
			validate: function (value) {
				if (isNaN(value) === false) {
					return true;
				}
				return false;
			}

		}).then(function (amountAnswer) {
			var query = "SELECT * FROM products WHERE ?";
			var stock = "SELECT stock_qty FROM products WHERE ?";
			var price = "SELECT price FROM products WHERE ?";

			connection.query(query, {'product_name':response.action}, function (err, res) {
				// console.log(res);
				if (err) throw err;
				if (parseInt(amountAnswer.amount) > res[0].stock_qty) {
				
					console.log("Your request exceeds our inventory.")
					inquirer.prompt({
						name: "retry",
						type: "list",
						message: "Would you like to update your order quantity?",
						choices: ["Yes", "No"]

					}).then(function (retryAnswer) {
						if (retryAnswer === "Yes") {
							sodaAnswer();
						} else {
							runSearch();
						}
					})

				} else if (amountAnswer.amount <= res[0].stock_qty) {
					
					connection.query(price, {'product_name': response.action}, function (err, res) {
				
					//decrease the item quantity amount in mysql
					var newPrice = parseFloat(res[0].price);
					var quantity = parseFloat(amountAnswer.amount);
					var total = newPrice * quantity;
					console.log('Your total is $' + total);
					runSearch();
					});
				}
			})
		})
	})
}
function iceCreamSearch() {
	inquirer.prompt({
		name: "action",
		type: "list",
		message: "Which Ice Cream would you like to purchase?",
		choices: [
			"Vanilla",
			"Chocolate",
			"Strawberry"
		]
	}).then(function (response) {
		inquirer.prompt({
			name: "amount",
			type: "input",
			message: "How many boxes of " + response.action + " ice cream would you like to purchase?",
			validate: function (value) {
				if (isNaN(value) === false) {
					return true;
				}
				return false;
			}

		}).then(function (amountAnswer) {
			var query = "SELECT * FROM products WHERE ?";
			var stock = "SELECT stock_qty FROM products WHERE ?";
			var price = "SELECT price FROM products WHERE ?";

			connection.query(query, {'product_name':response.action}, function (err, res) {
				// console.log(res);
				if (err) throw err;
				if (parseInt(amountAnswer.amount) > res[0].stock_qty) {
				
					console.log("Your request exceeds our inventory.")
					inquirer.prompt({
						name: "retry",
						type: "list",
						message: "Would you like to update your order quantity?",
						choices: ["Yes", "No"]

					}).then(function (retryAnswer) {
						if (retryAnswer === "Yes") {
							sodaAnswer();
						} else {
							runSearch();
						}
					})

				} else if (amountAnswer.amount <= res[0].stock_qty) {
					
					connection.query(price, {'product_name': response.action}, function (err, res) {
				
					//decrease the item quantity amount in mysql
					var newPrice = parseFloat(res[0].price);
					var quantity = parseFloat(amountAnswer.amount);
					var total = newPrice * quantity;
					console.log('Your total is $' + total);
					runSearch();
					});
				}
			})
		})
	})
}
function chipsSearch() {
	inquirer.prompt({
		name: "action",
		type: "list",
		message: "Which bag of chips would you like to purchase?",
		choices: [
			"Cheetos",
			"Doritos",
			"BBQ Lays",
			"Sour Cream and Chives Lays"
		]
	}).then(function (response) {
		inquirer.prompt({
			name: "amount",
			type: "input",
			message: "How many bags of " + response.action + " would you like to purchase?",
			validate: function (value) {
				if (isNaN(value) === false) {
					return true;
				}
				return false;
			}

		}).then(function (amountAnswer) {
			var query = "SELECT * FROM products WHERE ?";
			var stock = "SELECT stock_qty FROM products WHERE ?";
			var price = "SELECT price FROM products WHERE ?";

			connection.query(query, {'product_name':response.action}, function (err, res) {
				// console.log(res);
				if (err) throw err;
				if (parseInt(amountAnswer.amount) > res[0].stock_qty) {
				
					console.log("Your request exceeds our inventory.")
					inquirer.prompt({
						name: "retry",
						type: "list",
						message: "Would you like to update your order quantity?",
						choices: ["Yes", "No"]

					}).then(function (retryAnswer) {
						if (retryAnswer === "Yes") {
							sodaAnswer();
						} else {
							runSearch();
						}
					})

				} else if (amountAnswer.amount <= res[0].stock_qty) {
					
					connection.query(price, {'product_name': response.action}, function (err, res) {
				
					//decrease the item quantity amount in mysql
					var newPrice = parseFloat(res[0].price);
					var quantity = parseFloat(amountAnswer.amount);
					var total = newPrice * quantity;
					console.log('Your total is $' + total);
					runSearch();
					});
				}
			})
		})
	})
}
function candySearch() {
	inquirer.prompt({
		name: "action",
		type: "list",
		message: "Which candy would you like to purchase?",
		choices: [
			"Snickers",
			"Reeses Peanut Butter Cups",
			"Hot Tamales"
		]
	}).then(function (response) {
		inquirer.prompt({
			name: "amount",
			type: "input",
			message: "How many packages of " + response.action + " would you like to purchase?",
			validate: function (value) {
				if (isNaN(value) === false) {
					return true;
				}
				return false;
			}

		}).then(function (amountAnswer) {
			var query = "SELECT * FROM products WHERE ?";
			var stock = "SELECT stock_qty FROM products WHERE ?";
			var price = "SELECT price FROM products WHERE ?";

			connection.query(query, {'product_name':response.action}, function (err, res) {
				// console.log(res);
				if (err) throw err;
				if (parseInt(amountAnswer.amount) > res[0].stock_qty) {
				
					console.log("Your request exceeds our inventory.")
					inquirer.prompt({
						name: "retry",
						type: "list",
						message: "Would you like to update your order quantity?",
						choices: ["Yes", "No"]

					}).then(function (retryAnswer) {
						if (retryAnswer === "Yes") {
							sodaAnswer();
						} else {
							runSearch();
						}
					})

				} else if (amountAnswer.amount <= res[0].stock_qty) {
					
					connection.query(price, {'product_name': response.action}, function (err, res) {
				
					//decrease the item quantity amount in mysql
					var newPrice = parseFloat(res[0].price);
					var quantity = parseFloat(amountAnswer.amount);
					var total = newPrice * quantity;
					console.log('Your total is $' + total);
					runSearch();
					});
				}
			})
		})
	})
}

function cookiesSearch() {
	inquirer.prompt({
		name: "action",
		type: "list",
		message: "Which Cookies would you like to purchase?",
		choices: [
			"Chocolate Chip",
			"Peanut Butter"
		]
	}).then(function (response) {
		inquirer.prompt({
			name: "amount",
			type: "input",
			message: "How many packages of  " + response.action + " cookies would you like to purchase?",
			validate: function (value) {
				if (isNaN(value) === false) {
					return true;
				}
				return false;
			}

		}).then(function (amountAnswer) {
			var query = "SELECT * FROM products WHERE ?";
			var stock = "SELECT stock_qty FROM products WHERE ?";
			var price = "SELECT price FROM products WHERE ?";

			connection.query(query, {'product_name':response.action}, function (err, res) {
				// console.log(res);
				if (err) throw err;
				if (parseInt(amountAnswer.amount) > res[0].stock_qty) {
				
					console.log("Your request exceeds our inventory.")
					inquirer.prompt({
						name: "retry",
						type: "list",
						message: "Would you like to update your order quantity?",
						choices: ["Yes", "No"]

					}).then(function (retryAnswer) {
						if (retryAnswer === "Yes") {
							sodaAnswer();
						} else {
							runSearch();
						}
					})

				} else if (amountAnswer.amount <= res[0].stock_qty) {
					
					connection.query(price, {'product_name': response.action}, function (err, res) {
				
					//decrease the item quantity amount in mysql
					var newPrice = parseFloat(res[0].price);
					var quantity = parseFloat(amountAnswer.amount);
					var total = newPrice * quantity;
					console.log('Your total is $' + total);
					runSearch();
					});
				}
			})
		})
	})
}