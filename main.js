let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Adentrandome al desarrollo full stack java')
  .pauseFor(200)
  .deleteChars(20)
  .start();

//-----------------------------------------------------------------------
// BOTÓN VOLVER ARRIBA
const btnTop = document.getElementById("btn-top");

// Mostrar botón al hacer scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

// Scroll suave
btnTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

//-----------------------------------------------------------------------
const form = document.querySelector('form[name="contacto"]');

form.addEventListener("submit", () => {
  alert("Mensaje enviado correctamente");
});