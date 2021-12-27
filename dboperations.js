var config = require("./dbconfig");
const sql = require("mssql");

async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
    console.log("error :" + error);
  }
}

 // Stored procedure
async function getdata_withQuery() {
  try {
    let pool = await sql.connect(config);
    let result1 = await pool
      .request()
      .input("input_parameter", sql.Int, value)
      .query("select * from mytable where id = @input_parameter");
    console.dir(result1);

    console.log("sql server connected..");
  } catch (error) {
    console.log("error :" + error);
  }
}

module.exports = {
  getdata: getdata,
  getdata_withQuery: getdata_withQuery,
};
