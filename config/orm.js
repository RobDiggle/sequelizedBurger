var connectionReq = require("./connection.js");

connectionReq.connect(function(err) {
  if(err) {
    console.log("Error");
  }
  console.log( connectionReq.threadId)
});

var orm = {
  addBurger: function(burger, consumburg) {
    var burgerName = burger;
    var mySQLQuery = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "')";
    connectionReq.query(mySQLQuery, function(err, result) {
      if (err) throw err;
      consumburg(result);
    });
  },
  eatBurger: function(burgerId, consumburg) {
    var id = burgerId;
    connectionReq.query("UPDATE burgers SET devoured=1 WHERE id=?", [id], function(err, result) {
      if (err) throw err;
      consumburg(result);
    });
  },
  showBurgers: function(tableName, consumburg) {
  connectionReq.query('SELECT * FROM burgers', function(err, result) {
      if (err) throw err;
      //console.log("The burger function test :" + result[0].burger_name); 
      consumburg(result);
  });
 }
};

module.exports = orm;