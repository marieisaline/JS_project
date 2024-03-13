// // Récupère le canevas et son contexte
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// // Ajuste la taille du canevas à la taille de la fenêtre
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Crée un dégradé de couleur pour le fond du canevas
// const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
// gradient.addColorStop(0, "#001933"); // Couleur foncée
// gradient.addColorStop(1, "#004d80"); // Couleur plus claire

// // Définit le nombre de cercles et crée un tableau pour les stocker
// const numberOfCircles = 10;
// const circles = [];

// // Initialise les propriétés de chaque cercle dans le tableau
// for (let i = 0; i < numberOfCircles; i++) {
//   circles.push({
//     x: canvas.width / 2,
//     y: canvas.height / 2,
//     radius: 30 + i * 20,
//     speed: 0.02 * (i + 1),
//     angle: 0,
//     pointRadius: 2,
//     pointSpeed: 0.1 * (i + 1),
//     color: `hsl(${i * 36}, 70%, 50%)`, // Couleur basée sur l'index du cercle
//   });
// }

// // Fonction pour dessiner et animer les éléments sur le canevas
// function draw() {
//   // Remplit le canevas avec le dégradé de couleur
//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   // Dessine et anime chaque cercle dans le tableau
//   circles.forEach((circle) => {
//     // Calcul des coordonnées du point sur la spirale
//     const x = circle.x + circle.radius * Math.cos(circle.angle);
//     const y = circle.y + circle.radius * Math.sin(circle.angle);

//     // Dessine le cercle concentrique
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.strokeStyle = circle.color;
//     ctx.lineWidth = 2;
//     ctx.stroke();

//     // Dessine le point sur la spirale
//     ctx.beginPath();
//     ctx.arc(x, y, circle.pointRadius, 0, 2 * Math.PI);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     // Met à jour l'angle et le rayon du point pour l'animation
//     circle.angle += circle.speed;
//     circle.pointRadius += circle.pointSpeed;

//     // Inverse la direction de l'animation lorsque le rayon atteint des limites
//     if (circle.pointRadius > 5 || circle.pointRadius < 1) {
//       circle.pointSpeed = -circle.pointSpeed;
//     }
//   });

//   // Appelle la fonction de dessin de manière récursive pour créer une animation fluide
//   requestAnimationFrame(draw);
// }

// // Appelle la fonction de dessin pour démarrer l'animation
// draw();

// CODE NUMERO 2

// // Récupère le canevas et son contexte
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// // Ajuste la taille du canevas à la taille de la fenêtre
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Crée un dégradé de couleur pour le fond du canevas
// const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
// gradient.addColorStop(0, "#001933"); // Couleur foncée
// gradient.addColorStop(1, "#004d80"); // Couleur plus claire

// // Initialise les propriétés de chaque cercle dans le tableau
// const circles = [];

// // Ajoute initialement 5 cercles concentriques
// for (let i = 0; i < 5; i++) {
//   circles.push({
//     x: canvas.width / 2,
//     y: canvas.height / 2,
//     radius: 30 + i * 20,
//     speed: 0.02 * (i + 1),
//     angle: 0,
//     pointRadius: 2,
//     pointSpeed: 0.1 * (i + 1),
//     color: `hsl(${i * 36}, 70%, 50%)`, // Couleur basée sur l'index du cercle
//   });
// }

// // Fonction pour dessiner et animer les éléments sur le canevas
// function draw() {
//   // Remplit le canevas avec le dégradé de couleur
//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   // Dessine et anime chaque cercle dans le tableau
//   circles.forEach((circle) => {
//     // Calcul des coordonnées du point sur la spirale
//     const x = circle.x + circle.radius * Math.cos(circle.angle);
//     const y = circle.y + circle.radius * Math.sin(circle.angle);

//     // Dessine le cercle concentrique
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.strokeStyle = circle.color;
//     ctx.lineWidth = 2;
//     ctx.stroke();

//     // Dessine le point sur la spirale
//     ctx.beginPath();
//     ctx.arc(x, y, circle.pointRadius, 0, 2 * Math.PI);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     // Met à jour l'angle et le rayon du point pour l'animation
//     circle.angle += circle.speed;
//     circle.pointRadius += circle.pointSpeed;

//     // Inverse la direction de l'animation lorsque le rayon atteint des limites
//     if (circle.pointRadius > 5 || circle.pointRadius < 1) {
//       circle.pointSpeed = -circle.pointSpeed;
//     }
//   });

//   // Appelle la fonction de dessin de manière récursive pour créer une animation fluide
//   requestAnimationFrame(draw);
// }

// // Ajoute 5 cercles de plus avec un nombre initial de 5 points
// function addCircles() {
//   for (let i = 0; i < 5; i++) {
//     circles.push({
//       x: canvas.width / 2,
//       y: canvas.height / 2,
//       radius: 30 + (circles.length + i) * 20,
//       speed: 0.05 * (circles.length + i + 1),
//       angle: 0,
//       pointRadius: 2,
//       pointSpeed: 0.1 * (circles.length + i + 1),
//       color: `hsl(${(circles.length + i) * 36}, 70%, 50%)`,
//     });
//   }
// }

// // Appelle la fonction d'ajout de cercles après 1 secondes
// setTimeout(addCircles, 1000);

// // Appelle la fonction de dessin pour démarrer l'animation
// draw();

// CODE NUMERO 3

// // Récupère le canevas et son contexte
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// // Ajuste la taille du canevas à la taille de la fenêtre
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Crée un dégradé de couleur pour le fond du canevas
// const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
// gradient.addColorStop(0, "#001933"); // Couleur foncée
// gradient.addColorStop(1, "#004d80"); // Couleur plus claire

// // Initialise les propriétés de chaque cercle dans le tableau
// const circles = [];

// // Fonction pour dessiner et animer les éléments sur le canevas
// function draw() {
//   // Remplit le canevas avec le dégradé de couleur
//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   // Dessine et anime chaque cercle dans le tableau
//   circles.forEach((circle) => {
//     // Calcul des coordonnées du point sur la spirale
//     const x = circle.x + circle.radius * Math.cos(circle.angle);
//     const y = circle.y + circle.radius * Math.sin(circle.angle);

//     // Dessine le cercle concentrique
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.strokeStyle = circle.color;
//     ctx.lineWidth = 2;
//     ctx.stroke();

//     // Dessine le point sur la spirale
//     ctx.beginPath();
//     ctx.arc(x, y, circle.pointRadius, 0, 2 * Math.PI);
//     ctx.fillStyle = "white";
//     ctx.fill();

//     // Met à jour l'angle et le rayon du point pour l'animation
//     circle.angle += circle.speed;
//     circle.pointRadius += circle.pointSpeed;

//     // Inverse la direction de l'animation lorsque le rayon atteint des limites
//     if (circle.pointRadius > 5 || circle.pointRadius < 1) {
//       circle.pointSpeed = -circle.pointSpeed;
//     }
//   });

//   // Appelle la fonction de dessin de manière récursive pour créer une animation fluide
//   requestAnimationFrame(draw);
// }

// // Fonction pour ajouter un nouveau cercle avec un nombre initial de points
// function addCircle() {
//   const newCircle = {
//     x: canvas.width / 2,
//     y: canvas.height / 2,
//     radius: 30 + circles.length * 20,
//     speed: 0.02 * (circles.length + 1),
//     angle: 0,
//     pointRadius: 2,
//     pointSpeed: 0.05 * (circles.length + 1),
//     color: `hsl(${circles.length * 36}, 70%, 50%)`,
//   };

//   circles.push(newCircle);

//   // Ajoute un nouveau cercle jusqu'à ce que le nombre total atteigne 10
//   if (circles.length < 10) {
//     setTimeout(addCircle, 1000); // Ajoute un nouveau cercle chaque seconde
//   }
// }

// // Appelle la fonction d'ajout de cercles après 1 seconde pour démarrer l'animation
// setTimeout(addCircle, 1000);

// // Appelle la fonction de dessin pour démarrer l'animation
// draw();

// Récupère le canevas et son contexte
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Ajuste la taille du canevas à la taille de la fenêtre
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Crée un dégradé de couleur pour le fond du canevas
const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "#001933"); // Couleur foncée
gradient.addColorStop(1, "#004d80"); // Couleur plus claire

// Initialise les propriétés de chaque cercle dans le tableau
const circles = [];

// Fonction pour dessiner et animer les éléments sur le canevas
function draw() {
  // Remplit le canevas avec le dégradé de couleur
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Dessine et anime chaque cercle dans le tableau
  circles.forEach((circle) => {
    // Calcul des coordonnées du point sur la spirale avec une rotation
    const x = circle.x + circle.radius * Math.cos(circle.angle);
    const y = circle.y + circle.radius * Math.sin(circle.angle);

    // Dessine le cercle concentrique
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = circle.color;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Dessine le point sur la spirale avec une rotation
    ctx.beginPath();
    ctx.arc(x, y, circle.pointRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    // Met à jour l'angle et le rayon du point pour l'animation avec rotation
    circle.angle += circle.speed;
    circle.pointRadius += circle.pointSpeed;

    // Inverse la direction de l'animation lorsque le rayon atteint des limites
    if (circle.pointRadius > 5 || circle.pointRadius < 1) {
      circle.pointSpeed = -circle.pointSpeed;
    }
  });

  // Appelle la fonction de dessin de manière récursive pour créer une animation fluide
  requestAnimationFrame(draw);
}

// Fonction pour ajouter un nouveau cercle avec un nombre initial de points et une rotation
function addCircle() {
  const newCircle = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 30 + circles.length * 20,
    speed: 0.02 * (circles.length + 1),
    angle: 0,
    pointRadius: 2,
    pointSpeed: 0.05 * (circles.length + 1),
    color: `hsl(${circles.length * 36}, 70%, 50%)`,
  };

  circles.push(newCircle);

  // Ajoute un nouveau cercle jusqu'à ce que le nombre total atteigne 10
  if (circles.length < 10) {
    setTimeout(addCircle, 1000); // Ajoute un nouveau cercle chaque seconde
  }
}

// Appelle la fonction d'ajout de cercles après 1 seconde pour démarrer l'animation
setTimeout(addCircle, 1000);

// Appelle la fonction de dessin pour démarrer l'animation
draw();
