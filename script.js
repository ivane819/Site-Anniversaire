// ----------------------------------------------------
// CODE SECRET / MOT DE PASSE (Change "1234" par ton code)
// ----------------------------------------------------
const SECRET_PASSWORD = "DAR-SEN";

function checkPassword(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const userInput = document.getElementById("password-input").value;
  const errorMsg = document.getElementById("error-msg");
  const lockScreen = document.getElementById("lock-screen");
  const siteContent = document.getElementById("site-content");

  if (userInput.trim() === SECRET_PASSWORD) {
    // Animation de déverrouillage réussie
    lockScreen.style.opacity = "0";
    setTimeout(() => {
      lockScreen.style.display = "none";
      siteContent.classList.remove("hidden-content");

      // Lancer la pluie de cœurs
      setInterval(createHeart, 350);
    }, 500);
  } else {
    // Message d'erreur
    errorMsg.innerText = "Oups ! Mauvais code secret, réessaie mon amour 😉";
    document.getElementById("password-input").value = "";
  }
}

// 1. Pluie de petits cœurs et d'étoiles
function createHeart() {
  const container = document.getElementById("hearts-container");
  if (!container) return;

  const heart = document.createElement("div");
  heart.classList.add("heart-particle");

  const elements = ["❤️", "💖", "✨", "💕", "🌸", "🎁", "🎂"];
  heart.innerText = elements[Math.floor(Math.random() * elements.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// 2. Ouverture / Fermeture de la lettre
function openEnvelope() {
  const envelope = document.getElementById("envelope");
  if (envelope) {
    envelope.classList.toggle("open");
  }
}

// 3. Les messages doux
const messages = [
  "Parce que tu sais toujours comment me redonner le sourire, même dans les moments difficiles. ❤️",
  "Pour la façon dont ton regard m'apaise et me donne confiance chaque jour. 🥰",
  "Parce que ta joie de vivre, ton énergie et ta bonne humeur sont contagieuses. ✨",
  "Pour ta gentillesse, ton attention aux détails et ton grand cœur. 💕",
  "Parce qu'avec toi, chaque moment simple devient un souvenir inoubliable. 🌸",
  "Parce que tu es tout simplement toi, authentique, drôle et irremplaçable ! 🎉",
];

function generateReason() {
  const reasonText = document.getElementById("reason-text");
  if (!reasonText) return;

  const randomIndex = Math.floor(Math.random() * messages.length);

  reasonText.style.opacity = 0;
  setTimeout(() => {
    reasonText.innerText = messages[randomIndex];
    reasonText.style.opacity = 1;
  }, 200);
}
