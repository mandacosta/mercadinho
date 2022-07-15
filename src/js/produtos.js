const produtos = [
    {
        id:11,
        nome:"Limão Siciliano Kg",
        preco:12.76,
        departamento: "hortifruti",
        oferta:true,
        estoque: true,
        imgeUrl:"limao.webp"
    },
    {
        id: 12,
        nome:"Maracujá Azedo Kg",
        preco:10.19,
        departamento: "hortifruti",
        oferta:false,
        estoque: true,
        imgeUrl:"Maracuja.webp"
    },
    {
        id:13,
        nome:"Laranja Bahia Importada Kg",
        preco:5.35,
        departamento: "hortifruti",
        oferta:false,
        estoque: true,
        imgeUrl:"Laranja.webp"
    },
    {
        id:14,
        nome:"Banana Caturra/Nanica Kg",
        preco:4.52,
        departamento: "hortifruti",
        oferta:false,
        estoque: true,
        imgeUrl:"banana.webp"
    },
    {
        id:15,
        nome:"Macarrão Parati Sêmola Parafuso 500g",
        preco:4.52,
        departamento:"massa",
        oferta:false,
        estoque: true,
        imgeUrl:"macarrao.png"
    },
    {
        id:16,
        nome:"Macarrão Galo Sêmola Espaguete nº8 500g",
        preco:4.42,
        departamento:"massa",
        oferta:false,
        estoque: true,
        imgeUrl:"macarrao2.webp"
    },
    {
        id:17,
        nome:"Macarrão Instantâneo Nissin Lámen Galinha Caipira 85g",
        preco:2.56,
        departamento:"massa",
        oferta:false,
        estoque: true,
        imgeUrl:"macarrao3.webp"
    },
    {
        id:18,
        nome:"Cup Noodles Nissin Galinha Caipira 69g",
        preco:5.14,
        departamento:"massa",
        oferta:false,
        estoque: true,
        imgeUrl:"nissin.webp"
    },
    {
        id:19,
        nome:"Água Mineral Ouro Fino com Gás 500ml",
        preco:1.95,
        departamento:"bebidas",
        oferta:false,
        estoque: true,
        imgeUrl:"agua.webp"
    },
    {
        id:20,
        nome:"Refrigerante Coca-Cola Sem Açúcar 200ml",
        preco:1.21,
        departamento:"bebidas",
        oferta:false,
        estoque: true,
        imgeUrl:"Refrigerante.webp"
    },
    {
        id:21,
        nome:"Refrigerante Antarctica Guaraná sem Açúcar Lata 350ml",
        preco:2.29,
        departamento:"bebidas",
        oferta:false,
        estoque: true,
        imgeUrl:"Refrigerante1.webp"
    },
    {
        id:22,
        nome:"Refrigerante Coca-Cola Sabor Original 220ml",
        preco:2.15,
        departamento:"bebidas",
        oferta:false,
        estoque: true,
        imgeUrl:"Refrigerante4.webp"
    },
    {
        id:23,
        nome:"Fone De Ouvido Jbl Tune 510 Bluetooth Preto Headphone",
        preco:259.15,
        precoPromocional:199.90,
        departamento:"informatica",
        oferta:true,
        estoque: true,
        imgeUrl:"2798222_1.webp"
    },
    {
        id:24,
        nome:"Mouse sem Fio Logitech USB M170, Preto",
        preco:59.90,
        precoPromocional:57.90,
        departamento:"informatica",
        oferta:true,
        estoque: true,
        imgeUrl:"97855124180.webp"
    },
    {
        id:25,
        nome:"Mouse Gamer Fortrek G Crusader RGB 7200DPI, Preto",
        preco:299.90,
        precoPromocional:59.90,
        departamento:"informatica",
        oferta:true,
        estoque: true,
        imgeUrl:"7898554606648.webp"
    },
    {
        id:26,
        nome:"Webcam Logitech C270 HD com 3MP Widescreen 720p",
        preco:215.90,
        precoPromocional:59.90,
        departamento:"informatica",
        oferta:false,
        estoque: true,
        imgeUrl:"webcan.webp"
    }
]

function addId (lista){
    for(let i = 0; i<lista.length; i++){
        lista[i].idDel = i
    }

    return lista
}

let produtosId = addId(produtos)





// function listaDepartamentos (arrayProdutos){
//     let array = []
    
//     for(let i=0; i<arrayProdutos.length; i++){
//         array.push(arrayProdutos[i].departamento)
        
//     }
//     let arrayDepartamentos = [array[0]]
//     for(let i = 0; i<array.length-1; i++){
//         if(array[i] !== array[i+1]){
//             arrayDepartamentos.push(array[i+1])
//         }

    
// }

// return arrayDepartamentos

// }

// const listaDepartamento = listaDepartamentos(produtos)