import API from './Api'

const END_POINT = 'modelos'

export default {
    all(){
        return API.get(END_POINT);
    },
    // obter modelos de um produto com base no identificador do produto (produtoId)
    expandProductsModels(produtoId){
        return API.get(`${END_POINT}?produtoId=${produtoId}`)
    },

//     store(data){
//         return API.post(END_POINT, data);
//     },

//     delete(id){
//         return API.delete(`${END_POINT}/${id}`);
//     },

//     deleteAll(){
//         return API.delete(END_POINT);
//     }
}