<template lang="pug">
    .container
        h1 {{dataList.title}}
        .row.mt-2(v-for="list in dataList.featureList")
            .col-md-8.centrar
                span.fa.fa-play-circle
                span.ml-2 {{list.title}}
            .col-md-3.centrar
                span.fa.fa-clock
                span.ml-2 {{list.time}} minutos
</template>
<script>
export default {
    name:"listcourses",
    props:['dataList']
}
</script>
<style lang="scss" scoped>

</style>