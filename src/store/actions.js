import Produto from '../Api/Produto';
import Modelo from '../Api/Modelo';

// Obter toda a lista de Produtos da API
export const getProdutos = ({commit}) => {
    Produto.all()
    // axios.get('http://localhost:3000/produtos')
    .then(res => {
        commit('SET_PRODUTOS', res.data);
    });
}

// Obter um Produto da API
export const getProduto = ({commit},produtoId) => {
    Produto.show(produtoId)
    // axios.get(`http://localhost:3000/produtos/${produtoId}`)
    .then(res => {
        commit('SET_PRODUTO', res.data);
    });
}

// Obter todos os Modelos da API
export const getModelos = ({commit}) => {
    Modelo.all()
    // axios.get('http://localhost:3000/modelos')
    .then(res => {
        commit('SET_MODELOS', res.data);
    });
}

// expandir modelos de um produto com base no identificador do produto (produtoId)
export const expandProductsModels = ({commit}, produtoId) => {
    Modelo.expandProductsModels(produtoId)
    .then(res => {
        commit('SET_MODELOS', res.data);
    });
}

// Add Produto to Cart
// export const addProduto = ({commit}, {produto, quantity}) => {
//     // Add Item Cart to state
//     commit('ADD_TO_CART', {produto,quantity});
//     // Add Item Cart to API
//     Cart.store({
//         produto,
//         quantity
//     });
//     // axios.post('http://localhost:3000/cart', {produto,quantity})
// }

// // Get produto item to cart from API
// export const getCartItems = ({commit}) => {
//     Cart.all()
//     // axios.get('http://localhost:3000/cart')
//     .then(res => {
//         commit('SET_CART', res.data);
//     });
// }

// export const removeCart = ({commit}, produto) => {
//     // Delete Item from state
//     commit('REMOVE_CART', produto);
//     // Delete Item from API
//     Cart.delete(produto.id);
//     // axios.delete(`http://localhost:3000/cart/${produto.id}`);
// }

// export const clearCart = ({commit}) => {
//     // Clear Cart from state
//     commit('CLEAR_CART')
//     // Clear Cart from API
//     Cart.deleteAll();
//     // axios.delete('http://localhost:3000/cart'); //Clear Cart from API ERROR!!!
// }
