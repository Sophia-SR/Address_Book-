const express = require("express");
const port = 3002;
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());

const contactsRouter = require("./routes/contacts");

app.use("/contacts", contactsRouter);
app.get("/", async (req, res) => {
  res.json({ OK: true, timestamp: new Date() });
});
// app.use("/new_sighting", newSightingRouter );

app.listen(port, () => {
  console.log(`Example app listening at localhost${port}`);
});
