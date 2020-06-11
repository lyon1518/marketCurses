<template lang="pug">
  div
    navbarApp(v-if="Object.keys(dataApi).length > 0" :dataNav="dataApi")
    home(v-if="this.$route.params.title == undefined")
    courses(v-if="this.$route.params.title != undefined && this.$route.params.title != 'carrito' && this.$route.params.title != 'compra' && this.$route.params.title != 'instructores'")
    card(v-if="this.$route.params.title == 'carrito'")
    buy(v-if="this.$route.params.title == 'compra'")
    author(v-if="this.$route.params.author != undefined")
    foter
</template>
<script>
import navbarApp from "./navbar/navbarApp";
import foter from "./fotterr/foter";
import home from "./pages/home";
import courses from "./pages/courses";
import card from "./pages/card";
import buy from "./pages/buy";
import author from "./pages/author";

export default {
  name:"indexApp",
  components:{
    navbarApp,
    home,
    courses,
    card,
    buy,
    foter,
    author
  },
  data(){
    return{
      dataApi:{}
    }
  },
  mounted(){
      this.$http.get('/navbar')
      .then((res)=>{
          setTimeout(() => {
              this.dataApi = res.data
          }, 1000);
      })
  }
}
</script>
<style lang="scss" scoped>

</style>
