<template lang="pug">
    .card
        .row
            .bg-dark.imgCurso(:class="'col-md-'+sizeImg" v-if="img == undefined")
            div(:class="'col-md-'+sizeImg" v-else)
                img.w-100.h-100(:src="img")
            .p-4(:class="'col-md-'+sizeImg")
                .row
                    .col-md-6
                        strong {{titleCard}}
                    .col-md-6
                        p {{hors}}
                p {{descrip}}
                .row
                    .col-md-6
                        a.btn.btn-primary(:href="'#/'+titleCard") {{textBtn}}
                    .col-md-6.centrar
                        p ${{price}} #[strong MXN]
</template>
<script>
export default {
    name:"featured",
    props:['titleCard', 'hors', 'descrip', 'textBtn', 'price', 'sizeImg', 'img']
}
</script>
<style lang="scss" scoped>
.imgCurso{
    height: 200px;
}
.card{
    overflow: hidden;
}
</style>