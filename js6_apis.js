fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

//retorna uma Promise então é necessário usar await