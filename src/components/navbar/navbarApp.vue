<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-dark.bg-dark
    .container
      a.navbar-brand.logo.bg-white(href="#")
        img(:src="dataNav.logo")
      button.navbar-toggler(type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation")
        span.navbar-toggler-icon

      .collapse.navbar-collapse#navbarSupportedContent
        ul.navbar-nav.mr-auto
          li.nav-item(v-for="(list,index) in dataNav.navlist" :keys="'li'+index")
            a.nav-link(:href="list.link") {{list.text}}
        form.form-inline.my-2.my-lg-0.ml-auto
          img.circulo.bg-gray(:src="dataNav.user.avatar")
          ul.navbar-nav
            li.nav-item.dropdown
              a.nav-link.dropdown-toggle(href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false") {{dataNav.user.name}}
              .dropdown-menu(aria-labelledby="navbarDropdown")
                a.dropdown-item(:href="item.link" v-for="(item,index) in dataNav.user.dropdown" :keys="'data'+index") {{item.text}}
                .dropdown-divider
                a.dropdown-item(href="#") Cerrar sesión
          a(href="#/carrito" class="buyCard text-white ml-2")
            .count.text-white.bg-danger {{dataNav.cantProduct}}
            .fa.fa-shopping-cart

</template>
<script>
export default {
  name: "navbarApp",
  props:['dataNav']
};
</script>
<style lang="scss" scoped>
  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 5px;
  }
  .logo>img{
    width: 100%;
  }
  .circulo{
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  .circulo2{
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: solid #fff 2px;
    padding: 1px 5px;
    cursor: pointer;
  }
  .buyCard{
    position: relative;
  }
  .count{
    position: absolute;
    font-size: 10px;
    right: -5px;
    top: -5px;
    padding: 0px 5px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }
</style>
