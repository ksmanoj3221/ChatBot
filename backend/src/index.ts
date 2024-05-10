import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

const port = process.env.PORT || 5000;

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`App is listening at ${port} and connected to DataBase`);
    });
  })
  .catch((err) => console.log(err));
