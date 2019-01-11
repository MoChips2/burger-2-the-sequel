var connection = require("./connection.js");


function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}


function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		var value = ob[key];
		if (Object.hasOwnProperty.call(ob, key)) {
			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}
			arr.push(key + "=" + value);
		}
	}
	return arr.toString();
}

var orm = {

	selectAll: function (input, cb) {
		var queryString = "SELECT * FROM " + input + ";";
		connection.query(queryString, function (err, res) {
			if (err) { throw err };
			cb(res);
		});
	},

	insertOne: function (table, col, val, cb) {
		var queryString = "INSERT INTO " + table + " ("
			+ col.toString() + ") VALUES (" +
			printQuestionMarks(val.length) + ") ";

		console.log(queryString);

		connection.query(queryString, val, function (err, res) {
			if (err) { throw err; }
			cb(res);
		});
	},

	updateOne: function (table, objValues, condition, cb) {
		var queryString = "UPDATE " + table +
			" SET " + objToSql(objValues) +
			" WHERE " + condition;

		console.log(queryString);
		connection.query(queryString, function (err, res) {
			if (err) { throw err };
			cb(res);
		})
	}
}


module.exports = orm;