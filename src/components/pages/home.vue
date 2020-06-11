<template lang="pug">
    .container-fluid.sp
        banner.mb-4(title="Cursos" descrip="Description de prueba para nuevos cursos del banner" color="primary" btn-text="Ver más")
        h1.mt-4.text-center.text-primary Destacados
        .container.mb-4.mt-4.pb-4
            .row
                .col-md-6(v-for="(data,index) in dataApi" :key="'destacados'+index")
                    featured(sizeImg="6" :titleCard="data.title" :hors="data.hours" :descrip="data.description" textBtn="Ver más" :price="data.price" :img="data.img")
        .container-fluid.sp.bg-gray.pt-4
            h1.mt-4.text-center.text-primary Nuestros cursos más populares
            .container.mb-4.mt-4
                .row
                    .col-md-3.mt-4(v-for="popul in popular" :keys="'populares'+popul.id" v-if="Object.keys(popular).length > 0")
                        featured(sizeImg="12" :titleCard="popul.title" :hors="popul.hour" :descrip="popul.description" textBtn="Ver más" :price="popul.price" :img="popul.img")
</template>
<script>
import banner from "../dasboard/banner";
import featured from "../dasboard/featured";
export default {
    name:"home",
    components:{
        banner,
        featured
    },
    data(){
        return{
            dataApi:{},
            popular:{}
        }
    },
    mounted(){
        this.$http.get('/featured')
        .then((res)=>{
            setTimeout(() => {
                this.dataApi = res.data.featured
            }, 1000);
        })
        this.$http.get('/list/curses')
        .then((res)=>{
            setTimeout(() => {
                this.popular = res.data.curses
            }, 1000);
        })
    }
}
</script>
<style lang="scss" scoped>

</style>
