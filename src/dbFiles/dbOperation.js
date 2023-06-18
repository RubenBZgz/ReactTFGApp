const config = require("./dbConfig.js");
const sql = require("mssql");

const getEmployees = async () => {
  try {
    let pool = await sql.connect(config.config);
    let employees = pool.request().query(`SELECT * FROM [dbo].[videogames]`);
    //console.log(employees);
    return employees;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getEmployees,
};

/*
const getEmployees = async () => {
  try {
    var poolConnection = await sql.connect(config);

    let pool = await sql.connect(config.config);
    let employees = await poolConnection
      .request()
      .query(`SELECT * FROM [dbo].[videogames]`);
    console.log(employees);
    return employees;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getEmployees,
};*/

/*
const getEmployees = async () => {
  try {
    var poolConnection = await sql.connect(config.config);

    let pool = await sql.connect(config.config);
    let employees = await poolConnection
      .request()
      .query(`SELECT * FROM [dbo].[videogames]`);
    console.log(employees);
    return employees;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getEmployees,
};*/

/*
module.exports = async () => {
  try {
    let pool = await sql.connect(config);
    let employees = pool.request().query("SELECT * FROM [dbo].[videogames]");
  } catch (error) {
    console.log(error);
  }
};*/
