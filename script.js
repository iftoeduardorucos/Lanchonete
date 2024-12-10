let carrinho = [];

function fazerPedido(nome, preco) {
    carrinho.push({nome: nome, preco: preco});
    atualizarCarrinho();
    alert('Item adicionado ao carrinho!');
}

function atualizarCarrinho() {
    document.getElementById('qtdItensCarrinho').textContent = carrinho.length;
    
    const itensCarrinhoDiv = document.getElementById('itensCarrinho');
    itensCarrinhoDiv.innerHTML = '';
    
    let total = 0;
    
    carrinho.forEach((item, index) => {
        total += item.preco;
        itensCarrinhoDiv.innerHTML += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee;">
                <span style="flex: 2;">${item.nome}</span>
                <span style="flex: 1; text-align: right;">R$ ${item.preco.toFixed(2)}</span>
                <button onclick="removerItem(${index})" style="margin-left: 15px; background-color: #ff4444; color: white; border: none; border-radius: 50%; width: 25px; height: 25px; cursor: pointer; display: flex; align-items: center; justify-content: center;">X</button>
            </div>
        `;
    });
    
    document.getElementById('totalCarrinho').textContent = total.toFixed(2);

}

function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function abrirCarrinho() {
    document.getElementById('carrinhoModal').style.display = 'block';
}

function fecharCarrinho() {
    document.getElementById('carrinhoModal').style.display = 'none';
}

function finalizarPedido() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const total = carrinho.reduce((sum, item) => sum + item.preco, 0);
    alert(`Pedido finalizado! Total: R$ ${total.toFixed(2)}\nAgradecemos sua preferência!`);
    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();
}