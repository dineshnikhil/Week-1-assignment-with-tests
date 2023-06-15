/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
	var categories_arr = [];
	transactions.map((trans) => {
		if (!categories_arr.includes(trans['category'])) {
			categories_arr.push(trans['category']);
		}
	});

	var finla_arr = [];
	categories_arr.map((category) => {
		let totalSpent = 0;
		transactions.map((trans) => {
			if (trans['category'] === category) {
				totalSpent += trans['price'];
			}
		});
		finla_arr.push({ category, totalSpent });
	});

	return finla_arr;
}

module.exports = calculateTotalSpentByCategory;
