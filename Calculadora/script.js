//Apartir do getElementById, será possível manipular o elemento que contem o id result.
/*Como o "document.getElementById", será usado muitas vezes pelo código, então o
 "document.getElementById" sera armazenado em uma constante. 
 */
const result = document.getElementById("result"); 

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");


//Função para inserir, dados(números e operados que serão usados na culculadora)
//A varia value, irá receber o conteúdo que está no elemento que contem o id "result"
//que inicialmente estara vazia. 
//O result.innerHTML, recebera o value, conteudo do elemento html, e o data, que é 
//o valor que será passado como paramêtro.

function insert(data){
    let inserir = result.innerHTML;
    result.innerHTML = inserir + data;
}

//Função clean é uma função de limpeza, que limpará todos os dados de uma vez.
function clean(){
    result.innerHTML = " ";
}

function back(){
    let deletar = result.innerHTML;
    result.innerHTML = deletar.substring(0, deletar.length -1);
}

function calc(){
    let calcular = result.innerHTML;
    if(calcular){
        result.innerHTML = eval(calcular);
    }else{
      result.innerHTML = "Empty";
    }
}

btn1.addEventListener("click", back);
btn2.addEventListener("click", clean);
btn3.addEventListener("click", calc);


document.querySelectorAll("[data-number]").forEach((value) => {
    value.addEventListener("click", () => {

       let  valor = value.dataset.number.length != 0 ? value.dataset.number : value.innerHTML;
        insert(valor);
    })
})



