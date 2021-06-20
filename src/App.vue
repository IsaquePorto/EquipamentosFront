<template>
  <div>
    <navbarcomponent/>
    <sidebarcomponent/>
    <div class="album">
        <b-container  class="bv-example-row " >
          <b-row>
            <b-col class="col-md-4 col-12 card1"><cardcomponent/></b-col>
            <b-col class="col-md-4 col-12 card2"><rafaela-card/> </b-col>
            <b-col class="col-md-4 col-12 card3"><rafaelaCard2/> </b-col>
          </b-row>
        </b-container>
    </div>

    <div class=" listagem"> 
        <cadastrar/>
    </div>

  </div>
</template>

<script>
import Navbarcomponent from './components/navbarcomponent.vue'
import Sidebarcomponent from './components/sidebarcomponent.vue'
import cardcomponent from './components/cardComponent.vue'
import rafaelaCard from './components/rafaelaCard.vue'
import rafaelaCard2 from './components/rafaelaCard2'
import cadastrar from './components/conteudo.vue'

export default {
  name: 'App',
  components: {
    Navbarcomponent,
    Sidebarcomponent,
    cardcomponent,
    rafaelaCard,
    rafaelaCard2,
    cadastrar
  }
}
</script>

<style>
.card1{
  padding: 10px;
}
.card2{
  padding: 10px;
}
.card3{
  padding: 10px;
}
.album{
 background-image: url('./assets/back8.jpg');
 background-color: #cccccc;
}
.listagem{
  height: 800px;
  padding-top: 50px;
  background-color: rgb(226, 226, 226);
}

</style>
