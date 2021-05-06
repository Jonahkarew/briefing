const express = require("express");
const routes = require("./backend/routes")

const app = express();
const PORT = process.env.PORT || 3001


app.listen(PORT, console.log(`Briefing is running on ${PORT}`))