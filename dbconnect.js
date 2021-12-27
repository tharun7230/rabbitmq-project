const sql = require("mssql")


const config = {
  user: "sa",
  password: "12345",
  server: "THARUNMSI\\SQLEXPRESS",
  port: 53270,
  database: "Movies",
  options: {
    // trustedconnection: true,
    enableArithAbort: true,
    // instancename: "SQLEXPRESS",
  },
  connectionTimeout: 150000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 3000,
  },
};

// handing error 
sql.on('error', err => {
 console.log(err.message)
})


// Async Await

async function getDBUsersAsyncFunction() {
 try {
  let pool = await sql.connect(config)
  let result1 = await pool.request().query("select * from Language");
  console.log(result1);
  sql.close();
 } catch (error) {
  console.log(err.message);
  sql.close();
 }
}

getDBUsersAsyncFunction();
