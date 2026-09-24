const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques (HTML, CSS, JS, images, vidéos)
app.use(express.static(path.join(__dirname)));

// Route principale pour afficher le site
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});
