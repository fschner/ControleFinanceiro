console.log("scf-insert-desp");


document.addEventListener('DOMContentLoaded', function() {
    const tipoPagamentoSelect = document.getElementById('tipoPagamento');
    const vezesInput = document.getElementById('vezes');
    const parcelaInput = document.getElementById('parcela');

    tipoPagamentoSelect.addEventListener('change', handleTipoPagamentoChange);
    vezesInput.addEventListener('change', calcularParcelas);

    function handleTipoPagamentoChange() {
        const tipoPagamento = tipoPagamentoSelect.value;
        const parcelamentoDiv = document.getElementById('parcelamento');
        const valorParcelaDiv = document.getElementById('valorParcela');

        if (tipoPagamento === 'aprazo') {
            parcelamentoDiv.style.display = 'block';
            valorParcelaDiv.style.display = 'block';
        } else {
            parcelamentoDiv.style.display = 'none';
            valorParcelaDiv.style.display = 'none';
        }
    }

    function calcularParcelas() {
        const valor = parseFloat(document.getElementById('valor').value);
        const vezes = parseInt(vezesInput.value);

        if (!isNaN(valor) && !isNaN(vezes) && vezes > 0) {
            const valorParcela = valor / vezes;
            parcelaInput.value = valorParcela.toFixed(2);
        } else {
            parcelaInput.value = '';
        }
    }
});
