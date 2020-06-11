<template lang="pug">
    .container-fluid.bg-gray.p-5
        .container
            .row
                .col-md-7
                    h1.text-center.text-primary {{this.$route.params.title}}
                    ul.nav.nav-tabs#myTab(role="tablist")
                        li.nav-item
                            a.nav-link.active#curso-tab(data-toggle="tab" href="#curso" role="tab" aria-controls="curso" aria-selected="true") Curso
                        li.nav-item
                            a.nav-link#instructores-tab(data-toggle="tab" href="#instructores" role="tab" aria-controls="instructores" aria-selected="true") Instructores
                        li.nav-item
                            a.nav-link#contenidos-tab(data-toggle="tab" href="#contenidos" role="tab" aria-controls="contenidos" aria-selected="true") Contenidos
                    div.tab-content#myTabContent.pt-4(v-if="Object.keys(dataCourse).length > 0")
                        .tab-pane.fade.show.active#curso(role="tabpanel" aria-labelledby="curso-tab")
                            p {{dataCourse.content.curses.description}}
                            strong.mb-4 ¿Qué vas a aprender?
                            hr
                            p(v-for="list in dataCourse.content.curses.list") {{list.text}}
                        .tab-pane.fade#instructores(role="tabpanel" aria-labelledby="instructores-tab")
                            .row
                                .col-md-6.mt-4(v-for="(ins, index) in dataCourse.content.instructor" :keys="'instructor',index")
                                    author(:dataIns="ins" btnText="Detalles")
                        .tab-pane.fade#contenidos(role="tabpanel" aria-labelledby="contenidos-tab")
                            div.mt-4(v-for="(list,index) in dataCourse.content.contentFeatured" :keys="'list'+index")
                                listcourses(:dataList="list")
                .col-md-5
                    buyCourses.stiky(:dataCourse="dataCourse.addBuy")
</template>
<script>
import author from "../dasboard/author";
import listcourses from "../dasboard/listcourses";
import buyCourses from "../dasboard/buyCourses";
export default {
    name:"courses",
    components:{
        author,
        listcourses,
        buyCourses
    },
    data(){
        return{
            coursesList:[
                {text:'1.1 Vestibulum volutpat nulla at ex pulvinar auctor',hors:"23 minutos"},
                {text:'1.1 Vestibulum volutpat nulla at ex pulvinar auctor',hors:"23 minutos"},
                {text:'1.1 Vestibulum volutpat nulla at ex pulvinar auctor',hors:"23 minutos"},
                {text:'1.1 Vestibulum volutpat nulla at ex pulvinar auctor',hors:"23 minutos"}
            ],
            dataCourse:{}
        }
    },
    mounted(){
        this.$http.get('/curse/1')
        .then((res)=>{
            setTimeout(() => {
                console.log(res)
                this.dataCourse = res.data
            }, 1000);
        })
    }
}
</script>
<style lang="scss" scoped>

</style>