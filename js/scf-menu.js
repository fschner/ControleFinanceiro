console.log("Link Menu");



//Função direcionamento de pagina Cards Menu
document.querySelectorAll(".cardMenu").forEach(function(element) {
    element.addEventListener("click", function() {
        const route = element.getAttribute("data-route");
        if (routes[route]) {
            window.location.href = routes[route];
        } else {
            console.error("Rota não encontrada: " + route);
        }
    });
});

//Função direcionamento de pagina Card Exit 
document.querySelectorAll(".cardMenuExit").forEach(function(element) {
    element.addEventListener("click", function() {
        const route = element.getAttribute("data-route");
        if (routes[route]) {
            window.location.href = routes[route];
        } else {
            console.error("Rota não encontrada: " + route);
        }
    });
});
