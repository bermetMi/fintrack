import express from "express";
import {transactions} from "./daten.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Testroute: Antwortet, wenn man http://localhost:3000/ im Browser aufruft
app.get("/", (req, res) => {
  res.send("FinTrack-Server läuft!");
});

app.get("/api/health", (req, res) => {
 res.json({status: "ok"});
});

app.get("/api/transactions",(req, res) => {
    res.json(transactions);
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
