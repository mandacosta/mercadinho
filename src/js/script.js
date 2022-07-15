//Criar card dos produtos
function criarCard(produto){

    let li         = document.createElement("li")
    let figure     = document.createElement("figure")
    let img        = document.createElement("img")
    let div        = document.createElement("div")
    let h3         = document.createElement("h3")
    let pPreco     = document.createElement("p")    
    let addBtn     = document.createElement("button")
    let pPrecoProm = document.createElement("p")
    
    
    li.classList.add("card")
    div.classList.add("card_description")
    img.src = `./src/img/${produto.imgeUrl}`
    img.alt = produto.nome
    
    
    if(produto.precoPromocional > 0){
        pPreco.classList.add("precoTaxado")
        
    }

    addBtn.id            = produto.id
    addBtn.innerText     = "Add ao carrinho" 
    h3.innerText         = produto.nome
    pPreco.innerText     = `R$ ${produto.preco}`.replace(".",",")
    pPrecoProm.innerText = `R$ ${produto.precoPromocional}`.replace(".",",")
    
    
    if(produto.precoPromocional > 0){
        figure.append(img)
        div.append(h3,pPreco,pPrecoProm,addBtn)
        li.append(figure,div) 
    } else{
        figure.append(img)
        div.append(h3,pPreco,addBtn)
        li.append(figure,div) 
    }
    
    return li
}

//Renderizando na página

let ul = document.getElementsByClassName("lista")[0]

function renderizar (listaProdutos, local){
    
    for(let i = 0; i<listaProdutos.length; i++){
        let card = criarCard(listaProdutos[i])
        local.append(card)
    }
}

renderizar(produtos,ul)

//Adicionar produtos no carrinho
let ulCarrinho = document.getElementsByClassName("lista-carrinho")[0]
let totais = document.getElementById("checkout")
let listaCarrinho = []

ul.addEventListener("click", function(event){
    if(event.target.tagName == "BUTTON"){
        let index = event.target.id
    
        ulCarrinho.innerHTML = ""
        renderizar(addCarrinho(index),ulCarrinho)

        totais.innerHTML = ""
        mostrarTotais(listaCarrinho,totais)
        
    }
})

function addCarrinho(index){
    
    for(let i = 0; i<produtos.length; i++){                       
        if(produtos[i].id == index){                    
            listaCarrinho.push(produtos[i])
                  
        }
        
    }

    for(let i = 0; i<listaCarrinho.length; i++){
        listaCarrinho[i].idDel = i
    }


    return listaCarrinho
}




//Cálculo do valor final e da quantidade de itens + renderizar valores

function mostrarTotais (lista, local){
    
    let soma = 0
    for(let i = 0; i<lista.length; i++){
        if(lista[i].precoPromocional > 0){
            soma += lista[i].precoPromocional
        } else{
            soma += lista[i].preco
        }
    }
    
    let quant = document.createElement("h4")
    let valor = document.createElement("p")

    quant.innerText = `Total de produtos: ${lista.length}`
    valor.innerText = `R$ ${soma.toFixed(2)}`.replace(".",",")

    local.append(quant,valor)
}




ulCarrinho.addEventListener("click",function(event){
    let index = event.target.id
    let posicao = 0   

        if(event.target.tagName === "BUTTON"){
            
            for (let i = 0; i<listaCarrinho.length; i++){
                if(listaCarrinho[i].id == index){
                    posicao = i
                }
            }
            
        }

        listaCarrinho.splice(posicao,1)

        ulCarrinho.innerHTML = ""
        renderizar(listaCarrinho,ulCarrinho)
        totais.innerHTML = ""
        mostrarTotais(listaCarrinho,totais)

 
}

)

//Filtros em tags

let btnHorti = document.getElementById("horti")

btnHorti.addEventListener("click",function(e){
    let lista = []
    for(let i=0; i<produtos.length; i++){
        if(produtos[i].departamento == "hortifruti")
        lista.push(produtos[i])
    }
    ul.innerHTML = ""
    renderizar(lista,ul)    
    
})

let btnMassas = document.getElementById("mass")

btnMassas.addEventListener("click",function(e){
    let lista = []
    for(let i=0; i<produtos.length; i++){
        if(produtos[i].departamento == "massa")
        lista.push(produtos[i])
    }
    ul.innerHTML = ""
    renderizar(lista,ul)    
    
})

let btnBebidas = document.getElementById("beb")
btnBebidas.addEventListener("click",function(e){
    let lista = []
    for(let i=0; i<produtos.length; i++){
        if(produtos[i].departamento == "bebidas")
        lista.push(produtos[i])
    }
    ul.innerHTML = ""
    renderizar(lista,ul)    
    
})


let btnInfor = document.getElementById("infor")
btnInfor.addEventListener("click",function(e){
    let lista = []
    for(let i=0; i<produtos.length; i++){
        if(produtos[i].departamento == "informatica")
        lista.push(produtos[i])
    }
    ul.innerHTML = ""
    renderizar(lista,ul)    
    
})

let btnTudo = document.getElementById("tudo")
btnTudo.addEventListener("click",function(e){
    
    ul.innerHTML = ""
    renderizar(produtos,ul)    
    
})

//Pesquisa
let inputPesq = document.getElementById("campoPesq")

inputPesq.addEventListener("keyup", function(){

    let pesquisa = inputPesq.value.toLowerCase().trim()
    let lista = busca(pesquisa)


    ul.innerHTML = ""
    renderizar(lista, ul)
})

function busca (input){
    
    let listaEncontrada = []
    for(let i = 0; i<produtos.length; i++){
        let nomeProduto = produtos[i].nome.toLowerCase().trim()
        if(nomeProduto.includes(input)){
            listaEncontrada.push(produtos[i])
        }
    }

    return listaEncontrada
}

