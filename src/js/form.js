const botaoEnviar = document.getElementById('btn-enviar');
const inputs = document.querySelectorAll('.input');
const camposObrigatorios = document.getElementById('campos-obrigatorios') 

botaoEnviar.addEventListener('click', () => {
    let inputVazio = false;
    
    inputs.forEach(item => {
        if (item.value === "") {
            inputVazio = true;
            return;
        };
    });

    if (inputVazio) {
        removeBorda('borda-verde')
        addBorda('borda-vermelha')
        camposObrigatorios.classList.add('campos-obrigatorios')
    } else {
        removeBorda('borda-vermelha')
        addBorda('borda-verde')
        camposObrigatorios.classList.remove('campos-obrigatorios')
    }

});

function addBorda(borda) {
    inputs.forEach(item => {
        item.classList.add(borda)
    });
}

function removeBorda(borda) {
    inputs.forEach(item => {
        item.classList.remove(borda)
    });
}