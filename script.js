function adicionar(){
    var text = document.getElementById('add').value;    
    var lista = document.getElementById('itens').innerHTML;
    lista += "<li>"+text+"</li>";
    document.getElementById('itens').innerHTML = lista;
}
function limpar(){
    window.location.href = window.location.href;
}