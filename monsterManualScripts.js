function testThis(){
alert("HERE");
require(["mysql"],function(mysql){
       const db = mysql.createConnection({
             host: "localhost",
             user: "root",
             password: "rootroot",
       //      database: "MonsterManual"
           });
           db.connect((err) => {
             if (err) { throw err; }
             console.log("DB connection OK");
           });

           // (C) QUERY
     db.query("SELECT * FROM sys.`MonsterManual`", (err, results) => {
                 if (err) { throw err; }
                 console.log(results);
               });
               alert("AGAIN");
});
}
function checkMM(db){
    console.log(db.query("SELECT * FROM sys.`MonsterManual`"));
}
// db.query("SELECT * FROM sys.`MonsterManual`", (err, results) => {
//             if (err) { throw err; }
//             console.log(results);
//           });}
//function connectMM(){
//    // (A) LOAD DB MODULE
////    const mysql = require("mysql");
//
//    // (B) CREATE CONNECTION - CHANGE TO YOUR OWN !
//    const db = mysql.createConnection({
//      host: "localhost",
//      user: "root",
//      password: "rootroot",
////      database: "MonsterManual"
//    });
//    db.connect((err) => {
//      if (err) { throw err; }
//      console.log("DB connection OK");
//    });
//
//    // (C) QUERY
//    db.query("SELECT * FROM sys.`MonsterManual`", (err, results) => {
//      if (err) { throw err; }
//      console.log(results);
//    });
//
//}