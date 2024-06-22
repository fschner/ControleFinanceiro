// Função mensagem boas vindas
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Bom dia";
    } else if (hour < 18) {
        greeting = "Boa tarde";
    } else {
        greeting = "Boa noite";
    }

    return greeting;
}

function displayWelcomeMessage() {
    const userName = "Felipe";
    const greeting = getGreeting();
    const message = `${greeting}, <strong>${userName}</strong>!`;
    document.getElementById("welcome-message").innerHTML = message;
}

window.onload = displayWelcomeMessage;



//Função direcionamento de pagina Card Menu
document.querySelectorAll("#voltar").forEach(function(element) {
    element.addEventListener("click", function() {
        const route = element.getAttribute("data-route");
        if (routes[route]) {
            window.location.href = routes[route];
        } else {
            console.error("Rota não encontrada: " + route);
        }
    });
});