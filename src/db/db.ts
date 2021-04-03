import sqlite3 from 'sqlite3'
import path from 'path'
sqlite3.verbose();

const db = new sqlite3.Database(path.resolve(__dirname, 'data_base.db'), e => {
    if (e) {
        console.log('error in creation', e.message)
    }
    console.log('Connected to the SQlite database.');
});

db.serialize(function() {
//   db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");
    
//   const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (let i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//       console.log(row.id + ": " + row.info);
//   });
    
    // db.
});

// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

export default db