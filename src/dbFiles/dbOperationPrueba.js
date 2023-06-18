const sql = require("mssql");

const config = {
  user: "ggraber", // better stored in an app setting such as process.env.DB_USER
  password: "74Vr97q!", // better stored in an app setting such as process.env.DB_PASSWORD
  server: "ggraber.database.windows.net", // better stored in an app setting such as process.env.DB_SERVER
  port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
  database: "videogames", // better stored in an app setting such as process.env.DB_NAME
  authentication: {
    type: "default",
  },
  options: {
    encrypt: true,
  },
};

//console.log("Starting...");
//connectAndQuery();
//Prueba();

//  GET
async function getAllVideogames() {
  try {
    var poolConnection = await sql.connect(config);

    //console.log("Reading rows from the Table...");
    var resultSet = await poolConnection
      .request()
      .query(`SELECT * FROM [dbo].[videogames] ORDER BY idVideogame`);

    //console.log(`${resultSet.recordset.length} rows returned.`);

    // INFORMACIÓN
    //console.log(resultSet.recordset);
    //poolConnection.close();
    return resultSet.recordset;

    // close connection only when we're certain application is finished
    poolConnection.close();
  } catch (err) {
    console.error(err.message);
  }
}

async function getVideogamesId() {
  try {
    var poolConnection = await sql.connect(config);

    //console.log("Reading rows from the Table...");
    var resultSet = await poolConnection
      .request()
      .query(`SELECT * FROM [dbo].[videogames] WHERE id = ${1012}`);

    //console.log(`${resultSet.recordset.length} rows returned.`);

    // INFORMACIÓN
    console.log(resultSet.recordset);
    //poolConnection.close();
    return resultSet.recordset;

    // close connection only when we're certain application is finished
    poolConnection.close();
  } catch (err) {
    console.error(err.message);
  }
}

async function getVideogameProviders(videogameTitle) {
  try {
    var poolConnection = await sql.connect(config);

    //console.log("Reading rows from the Table...");
    var resultSet = await poolConnection
      .request()
      .query(
        `SELECT * FROM [dbo].[videogamesProvider] WHERE videogameTitle = '${videogameTitle}'`
      );

    //console.log(`${resultSet.recordset.length} rows returned.`);

    // INFORMACIÓN
    console.log(resultSet.recordset);
    //poolConnection.close();
    return resultSet.recordset;

    // close connection only when we're certain application is finished
    poolConnection.close();
  } catch (err) {
    console.error(err.message);
  }
}

async function getUser(email, password) {
  console.log(
    `SELECT * FROM [dbo].[users] WHERE email = '${email}' AND password = '${password}'`
  );
  try {
    var poolConnection = await sql.connect(config);
    var resultSet = await poolConnection
      .request()
      .query(
        `SELECT * FROM [dbo].[users] WHERE email = '${email}' AND password = '${password}'`
      );

    // INFORMACIÓN
    console.log("TRAS QUERY");
    console.log(resultSet.recordset);
    poolConnection.close();
    return resultSet.recordset;

    // close connection only when we're certain application is finished
    poolConnection.close();
  } catch (err) {
    console.error(err.message);
  }
}

// PUT
async function insertUser(email, password) {
  console.log(`INSERT INTO [dbo].[users] VALUES ('${email}','${password}')`);
  try {
    var poolConnection = await sql.connect(config);

    //console.log("Reading rows from the Table...");
    var resultSet = await poolConnection
      .request()
      .query(`INSERT INTO [dbo].[users] VALUES ('${email}','${password}')`);

    // INFORMACIÓN
    console.log("TRAS QUERY");
    console.log(resultSet.rowsAffected);
    poolConnection.close();
    return resultSet.rowsAffected;

    // close connection only when we're certain application is finished
    //poolConnection.close();
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = {
  getAllVideogames,
  getVideogamesId,
  getVideogameProviders,
  insertUser,
  getUser,
};

async function connectAndQuery() {
  try {
    var poolConnection = await sql.connect(config);

    console.log("Reading rows from the Table...");
    var resultSet = await poolConnection
      .request()
      .query(`SELECT * FROM [dbo].[videogames]`);

    console.log(`${resultSet.recordset.length} rows returned.`);

    // output column headers
    var columns = "";
    for (var column in resultSet.recordset.columns) {
      columns += column + ", ";
    }
    console.log("%s\t", columns.substring(0, columns.length - 2));

    // ouput row contents from default record set
    // resultSet.recordset.forEach((row) => {
    //   console.log("%s\t%s", row.CategoryName, row.ProductName);
    // });

    resultSet.recordset.forEach((row) => {
      console.log(
        "%s\t%s",
        row.id,
        row.title,
        row.image,
        row.releaseDate,
        row.officialPrice,
        row.keyPrice
      );
    });

    // close connection only when we're certain application is finished
    poolConnection.close();
  } catch (err) {
    console.error(err.message);
  }
}
