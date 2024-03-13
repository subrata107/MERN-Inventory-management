const app = require("./app");
const PORT = 4000;
const connectdb = require("./config/database")

connectdb();
app.listen(PORT, () => console.log(`server is running ${PORT}`));
