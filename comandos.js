const apiUrl = 'https://jsonserverraquel.raquelsantos150.repl.co/categoria'; 

function displayMessage(mensagem) {
    msg = document.getElementById('msg');
    msg.innerHTML = '<div class="alert alert-warning">' + mensagem + '</div>';
}

function readCategoria(processaDados) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })
        .catch(error => {
            console.error('Erro ao ler categoria via API JSONServer:', error);
            displayMessage("Erro ao ler categorias");
        });
}

function createCategoria(categoria, refreshFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoria),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Categoria inserida com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao inserir categoria via API JSONServer:', error);
            displayMessage("Erro ao inserir categoria");
        });
}

function updateCategoria(id, categoria, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoria),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Categoria alterada com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao atualizar categoria via API JSONServer:', error);
            displayMessage("Erro ao atualizar categoria");
        });
}

function deleteCategoria(id, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Categoria excluida com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao remover categoria via API JSONServer:', error);
            displayMessage("Erro ao remover categoria");
        });
}