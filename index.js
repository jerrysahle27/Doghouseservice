const sql = require("mssql/msnodesqlv8");
const Dog = require("./Models");
const conn = new sql.ConnectionPool({
  database: "DogsService",
  server: "DESKTOP-TJ2PP2N\\MSSQLSERVER01",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
});
conn
  .connect()
  .then(() => {
    console.log("finally i hate you");
  })
  .catch((error) => console.error(error));
