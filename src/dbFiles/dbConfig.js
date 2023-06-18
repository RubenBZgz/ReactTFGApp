const config = {
  user: "ggraber", // better stored in an app setting such as process.env.DB_USER
  password: "74Vr97q!", // better stored in an app setting such as process.env.DB_PASSWORD
  server: "ggraber.database.windows.net", // better stored in an app setting such as process.env.DB_SERVER
  database: "videogames", // better stored in an app setting such as process.env.DB_NAME
  port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
};

module.export = config;

/*
module.export = {
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
};*/
