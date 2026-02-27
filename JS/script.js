

document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const status = document.getElementById("form-status");
    const btn = document.getElementById("send-btn");

    btn.disabled = true;
    btn.textContent = "Envoi en cours...";
    status.style.display = "none";

    const data = new FormData(this);

    const response = await fetch("https://formspree.io/f/xeelnwnq", {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    });

    status.style.display = "block";

    if (response.ok) {
      status.textContent = "✅ Message envoyé avec succès !";
      status.style.color = "green";
      this.reset();
    } else {
      status.textContent = "❌ Erreur lors de l'envoi. Réessaie.";
      status.style.color = "red";
    }

    btn.disabled = false;
    btn.textContent = "Envoyer le message";
  });

