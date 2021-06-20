<template>
<div>
    <b-container>
    
        <b-row>

        <b-col class="col-md-6 col-12" shadow>
            <div class="bac"><h2>Equipamentos Disponíveis </h2></div>
            <b-list-group class="lista">
                <div v-for="(equip, index) in orderEquipamentos " :key='index'>        
                    <b-list-group-item button>
                        <span v-on:click.prevent="detalhes(equip)">{{equip.nome}} </span>
                        <b-badge v-on:click.prevent= "excluirEquip(equip.id)" href="#" variant="danger" class="float-right">Excluir</b-badge>    
                       <!-- <b-badge v-on:click.prevent= "atualizar(equip)" v-b-modal.modal-1 href="#" variant="primary" class="float-right">Editar</b-badge>    -->       
                    </b-list-group-item>
                </div>
            </b-list-group>
            <br>
            <b-button v-b-modal.modal-1>Novo Equipamento</b-button> 
           
            <b-button v-b-toggle.collapse-2 class="m-1 float-right">Total investido</b-button>

            <b-collapse id="collapse-2">
                <b-card>R$ {{valorTotal}} </b-card>
            </b-collapse>
            

            <b-modal id="modal-1" title="Cadastrar equipamento" header-bg-variant = "dark" 
            header-text-variant = "light">
                <form >
                        <p>
                            <input v-model="novoEquip.nome" type="text" placeholder="Nome do Equipamento"> 
                        </p>
                        <p>
                            <input v-model="novoEquip.imagem" type="text" placeholder="Imagem">
                        </p>
                        <p>
                            <input v-model="novoEquip.valor" type="number" placeholder="Valor">
                        </p>
                        <p>
                            <button v-on:click.prevent="cadastrar" class="btn btn-primary">Cadastrar</button>
                        </p> 
                </form> 
            </b-modal>
        </b-col>
        <b-col class="col-md-6 col-12  ">
            <div class="card float-right shadow-lg p-3 mb-5 bg-white rounded" style="width: 20rem;">
                <img :src= 'cardImagem' class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{cardNome}}</h5>
                    <p class="card-text"> <strong>Valor:</strong>{{cardValor}}</p>                       
                </div>
            </div>            
        </b-col>

        </b-row>
    </b-container>
</div>
</template>

<script>
import Equipamento from './service/Equipamentos'
import _ from "lodash"
export default {
    data(){
        return{
            novoEquip:{
                nome: "",
                imagem: "",
                valor: ""
            },
            equipamentos:[],
            cardNome:"",
            cardImagem:"",
            cardValor:"",
            valorTotal:0,
        }
        
    },
    created(){
        this.mostrar()
        this.mostrarValorTotal()
    },
    methods:{
        cadastrar(){
             if(this.novoEquip.nome == '' || this.novoEquip.valor == '' || this.novoEquip.imagem == ''){
                alert("Campos obrigatórios!")
             }
             else{
                Equipamento.cadastrar(this.novoEquip)
                .then( response =>
                     response.data,
                     this.mostrar()
                ).catch(error => {
                        console.log(error)
                })
                this.novoEquip.nome = ''
                this.novoEquip.imagem = ''
                this.novoEquip.valor = ''
                this.mostrar()
             }
             this.mostrar()
             this.mostrarValorTotal()
        },
        excluirEquip(id){ 
            Equipamento.excluir(id).then(response => {
                console.log(response)
                this.mostrar()
                this.mostrarValorTotal()
            })
        },
        mostrar(){
            Equipamento.listar().then(response => {
                this.equipamentos = response.data
            })
        },
        detalhes(equip){
            this.cardNome = equip.nome
            this.cardImagem = equip.imagem
            this.cardValor = equip.valor
        },
        mostrarValorTotal(){
            Equipamento.valorTotal()
            .then(response => {
                this.valorTotal = response.data
            })
        }
    },
    computed: {
        orderEquipamentos(){
            return _.orderBy(this.equipamentos, ['nome'], ['asc'])
        }
    }
}
</script>

<style>
.lista{
    max-height: 300px;
    margin-bottom: 10px;
    overflow-y:scroll;
    -webkit-overflow-scrolling: touch;
}
</style>