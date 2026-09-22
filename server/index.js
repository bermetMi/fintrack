import express from "express";

const app = express();
const PORT = 3000;

// Testroute: Antwortet, wenn man http://localhost:3000/ im Browser aufruft
app.get("/", (req, res) => {
  res.send("FinTrack-Server läuft!");
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
