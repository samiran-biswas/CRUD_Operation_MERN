const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const useragent = require("express-useragent");




dotenv.config({ path: './.env' });

// const cookieParser = require("cookie-parser");
require("./db/conn");

const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(express.static("public"));
app.use(cors());
app.use(useragent.express());



app.use(require('./routes/Signin'));
app.use(require('./routes/SigninUp'));
app.use(require('./routes/itemRoutes'));



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
