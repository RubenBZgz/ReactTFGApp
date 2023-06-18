const express = require("express");
const cors = require("cors");
const dbOperation = require("./src/dbFiles/dbOperation");
const dbOperation2 = require("./src/dbFiles/dbOperationPrueba");
const Videgame = require("./src/dbFiles/videogame");
// const dbOperation = require("./dbFiles/dbOperation");
// const dbOperation2 = require("./dbFiles/dbOperationPrueba");
// const Videgame = require("./dbFiles/videogame");

// ESTO DA PROBLEMAS
//const API_PORT = process.env.PORT || 5000;
const API_PORT = 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// GET
app.get("/getAllVideogames", async (req, res) => {
  console.log("getAllVideogames");
  const result = await dbOperation2.getAllVideogames();
  //console.log(result);
  res.send({ result });
});

app.get("/getProviderFromVideogame", async (req, res) => {
  //console.log("Called");
  const result = await dbOperation2.getAllVideogames();
  //console.log(result);
  res.send({ result });
});

app.get("/getVideogameProviders", async (req, res) => {
  console.log("getVideogameProviders");
  const result = await dbOperation2.getVideogameProviders(
    req.query.videogameTitle
  );
  //console.log(result);
  res.send({ result });
});

app.get("/getUser", async (req, res) => {
  const result = await dbOperation2.getUser(
    req.query.email,
    req.query.password
  );
  res.send({ result });
});

// PUT INSERT
app.put("/insertUser", async (req, res) => {
  const result = await dbOperation2.insertUser(
    req.query.email,
    req.query.password
  );
  // DEVUELVE UN ARRAY CON UNA LONGITUD SI HA FUNCIONADO
  res.send({ result });
});

//  PRUEBA

// BUSCAR 1 JUEGO POR ID
app.post("/api", async (req, res) => {
  //console.log("Called");
  const result = await dbOperation2.getVideogamesId(req.body.name);
  console.log(result[0]);
  console.log(result);
  res.send({ result });
});

app.post("/hello", function (req, res) {
  console.log("Called quit");
  res.send({ result: "OMG HI" });
});

app.get("/hello", function (req, res) {
  console.log("Called quit");
  res.send({ result: "OMG HI" });
});

app.get("/prueba", function (req, res) {
  console.log("Called quit");
  res.send({ result: "Good Bye" });
});

// app.get("/Videogame", function (req, res) {
//   console.log("Called quit");
//   res.send({ result: "Good Bye" });
// });

// dbOperation2.Prueba().then((res) => {
//   console.log("HE LLEGADO");
//   console.log(res);
// });

// dbOperation.connectAndQuery().then((res) => {
//   console.log(response);
// });

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));
