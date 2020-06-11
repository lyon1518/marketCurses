<template lang="pug">
  .container.p-5
    .row
      .col-md-9
        strong Instructor
        <!--h1 {{this.$route.params.author}}-->
        h1 Nombre del instructor

        strong Profesión
        .container-fluid
          .row
            .col-md-6
              h2
                .fa.fa-users
                span.ml-2 191,500
            .col-6
              h2
                .fa.fa-address-card
                span.ml-2 63,580
        hr
        h2.mt-2 Sobre mi
        .descrip(v-html="text")
        h2.mt-2 Mis cursos
        .container-fluid
          .row
            .col-md-6.mt-4(v-for="x in 8")
              featured(sizeImg="12" :titleCard="'TITULO '+x" hors="18:00" descrip="Description de prueba para destacados" textBtn="Ver más" price="1000")
      .col-md-3
        .imgD.bg-dark
        .btn.btn-outline-dark.w-50.ml-auto.btn-block.mt-2.mr-auto
          .fa.fa-link
          span.ml-2 Sitio web
        .btn.btn-outline-dark.w-50.ml-auto.btn-block.mt-2.mr-auto
          .fa.fa-twitter
          span.ml-2 Twitter
        .btn.btn-outline-dark.w-50.ml-auto.btn-block.mt-2.mr-auto
          .fa.fa-facebook
          span.ml-2 Facebook
        .btn.btn-outline-dark.w-50.ml-auto.btn-block.mt-2.mr-auto
          .fa.fa-linkedin
          span.ml-2 Linkedin
        .btn.btn-outline-dark.w-50.ml-auto.btn-block.mt-2.mr-auto
          .fa.fa-youtube
          span.ml-2 Youtube
</template>

<script>
  import featured from "../dasboard/featured";


  export default {
      name: "author",
      components:{
        featured
      },
      data(){
        return{
          text:"<p>Soy <strong>desarrollador web</strong> en una empresa y llevo inmerso en el mundo de la programación y la informática <strong>desde los 15 años</strong>.</p>\n<p>Me encanta programar y todo lo relacionado con Internet y las nuevas tecnologías, crear cosas y enseñar a los demás.</p>\n<p>Soy casi <strong>completamente autodidacta</strong>, por eso voy a ofrecerte muchos de mis conocimientos para <strong>que tú puedas aprender más fácilmente y más rápido</strong> de lo que yo lo hice y hago cada día.</p>\n<p>Puedes saber más de mí en mi blog victorroblesweb y en mis perfiles en las diferentes redes sociales ;) .<strong></strong></p>"
        }
      },
  }
</script>

<style lang="scss" scoped>

</style>
