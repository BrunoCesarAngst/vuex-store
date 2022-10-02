import API from './Api'

const END_POINT = 'produtos'

export default {
    all(){
        return API.get(END_POINT);
    },
    show(id){
        return API.get(`${END_POINT}/${id}`)
    }
}