<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#"> <b-button variant="dark" v-b-toggle.sidebar-variant>
        <b-icon icon="list" ></b-icon>
        </b-button> Suricato Studio</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item target="_blank" href="https://www.youtube.com/channel/UConbA-kEdPe2J8_iGS6HThg"> <b-icon icon="collection-play-fill" ></b-icon>
        Youtube</b-nav-item>
        <b-nav-item target="_blank" href="https://www.instagram.com/suricato.isaque/?hl=pt-br"> <b-icon icon="person"></b-icon>
        Instagram</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style>

</style>