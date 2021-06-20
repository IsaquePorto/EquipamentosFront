import {http} from './config'

export default{

    listar: ()=>{
        return http.get('equipamentos')
    },

    valorTotal: ()=> {
        return http.get('valorTotal')
    },

    cadastrar: (item)=>{
        return http.post('addequipamento', item)
    },

    excluir:(id) => {
        return http.delete('deletar/'+id)
    },

    atualizar:(item, id) => {
        return http.put(item, 'atualizarequip/'+id)
    }
}