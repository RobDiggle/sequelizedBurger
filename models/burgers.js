var connectionReq = require("../config/orm.js");
var sequelize = require("sequelize");

module.exports = function(){
var sequelize =  new sequelize("burgers_db","root","kharms1337");
var burger = connection.define("burger", {
	id: sequelize.ID,
	burger_nameur: sequelize.STRING,
	devoured: sequelize.BOOLEAN,
	date: sequelize.DATE
});
}

connection.sync()

// Redundant code from last assignment over written in terms of use by the sequelize code written above.
// var burger = {
// 	selectAll: function (consumburg) {
// 		orm.selectAll('burgers', function (res) {
// 			consumburg(res);
// 		});
// 	},
// 	insertOne: function (col, val, consumburg) {
// 		orm.insertOne('burgers', col, val, function (res) {
// 			consumburg(res);
// 		});
// 	},
// 	updateOne: function (objColVal, condition, consumburg) {
// 		orm.updateOne('burgers', objColVal, condition, function (res) {
// 			consumburg(res);
// 		});
// 	}
// };

