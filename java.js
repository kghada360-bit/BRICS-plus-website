
const form = document.getElementById("formContact");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (nom === "") {
        alert("Veuillez saisir votre nom");
        return;
    }

    if (email === "") {
        alert("Veuillez saisir votre email");
        return;
    }

    if (message === "") {
        alert("Veuillez saisir un message");
        return;
    }

    alert("Formulaire envoyé avec succès !");
    form.reset();
});
