let total = 0;

function fazerPedido(nome, preco) {
    total += preco;
    alert(`Você adicionou ${nome} ao seu pedido. Total atual: R$ ${total.toFixed(2)}`);
    console.log(`Pedido atual: ${nome}, Total: R$ ${total.toFixed(2)}`);
}
