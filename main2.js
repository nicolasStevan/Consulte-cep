const cep = document.querySelector('#cep')


const showData = (result) => {

    for(const campos in result){
       if(document.querySelector('#'+campos)){
            document.querySelector('#'+campos).value =result[campos]
       }
       
    }
}


cep.addEventListener('blur', (e) => {

    let procura = cep.value.replace('-',''); // vai substituir o - por nada quando pegar a api

    const options = {
        method : 'GET', // metodo de requisição
        mode : 'cors', // modo de requisição 
        cache : 'default' // cache de requisição padrão
    }

    fetch(`https://viacep.com.br/ws/${procura}/json/`, options)
    .then(response => { response.json()
        .then(data => showData(data))

    })
    .catch(e => console.log('Deu erro:') + e.message)
})