//CRIAR CARDS DE PRODUTOS

function card(produto){

    //criar as tags
    let li = document.createElement("li")
    li.classList.add("card")

    let figure = document.createElement("figure")
    
    let img = document.createElement("img")
    
    let div = document.createElement("div")
    div.classList.add("card_description")

    let h3 = document.createElement("h3")
    let p = document.createElement("p")
    let pPromocao = document.createElement("p")
    let button = document.createElement("button")

    //Verificando oferta
    if(produto.oferta === true){
        li.classList.add("oferta")
    }

    //preço promocional
    if(produto.precoPromocional !== undefined){
        p.classList.add("precoP")
    }

    //preencher as tags com seus conteúdos
    button.innerText = "Comprar"
    p.innerText = `R$ ${produto.preco}`.replace(".",",")
    pPromocao.innerText = `R$ ${produto.precoPromocional}`.replace(".",",")
    h3.innerText = produto.nome
    img.src = `./src/img/${produto.imgeUrl}`

    //definir parentescos
    if(produto.precoPromocional !== undefined){
        figure.appendChild(img)
        div.append(h3,p,pPromocao,button)
        li.append(figure,div)
    } else{
        figure.appendChild(img)
        div.append(h3,p,button)
        li.append(figure,div)
    }
    

    return li
}

//Gerar as variáveis dos elementos existentes
function gerarVitrine(listaDepar, departamento){
    let vitrine = 0
    for(let i=0; i<listaDepar.length; i++){
        if(departamento === listaDepar[i]){
            vitrine = document.querySelector(`.${departamento}`)
        }
    }
    return(vitrine)
}

//Renderizar na lista correta
function renderizar(listaProdutos, listaDepar){
    for(let i=0; i<listaProdutos.length; i++){
        let cardProduto = card(listaProdutos[i])
        let vitrine = gerarVitrine(listaDepar,listaProdutos[i].departamento)             
        vitrine.appendChild(cardProduto)
    }
}

// renderizar(produtos, listaDepartamento)

