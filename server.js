const express = require("express");
const app = express();
const shipRoutes = require("./routes/ships");

app.use(express.json());

app.use("/ships", shipRoutes);

app.get((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

const PORT = 9998;
app.listen(PORT, () => console.log(`🚢 Server running on port ${PORT}`));
