
// Rotas para as páginas
const routes = {
    inserirDespesas: "scf-insert-desp.html",
    listarDespesas: "scf-list-desp.html",
    inserirSaldo: "scf-insert-saldo.html",
    listarSaldo: "scf-list-saldo.html",
    relatorioSaldo: "scf-rel-saldo.html",
    relatorioDesp: "scf-rel-desp.html",
    voltarMenu: "scf-menu.html",
    exitLogin: "../index.html",
};

// Carregar scripts específicos da página
const pageId = document.body.id;
if (pageId) {
    const script = document.createElement('script');
    script.src = `../js/${pageId}.js`;
    document.body.appendChild(script);
};