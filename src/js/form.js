const botaoEnviar = document.getElementById('btn-enviar');
const inputs = document.querySelectorAll('.input');
const camposObrigatorios = document.getElementById('obrigatorio')

console.log(camposObrigatorios) 

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
        camposObrigatorios.classList.add('obrigatorio')
    } else {
        removeBorda('borda-vermelha')
        addBorda('borda-verde')
        camposObrigatorios.classList.remove('obrigatorio')
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