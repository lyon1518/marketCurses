<template lang="pug">
    .container
        .row.mt-4
            .col-md-4
                .bg-dark(:class="dataBuy.main?'imgP':'imgC'")
            .col-md-6.centrar
                .descrip
                    strong {{dataBuy.title}}
                    p.mintext {{dataBuy.course}}
                    span.mintext.text-danger(v-if="dataBuy.distcountText != ''") {{dataBuy.distcountText}} #[del {{dataBuy.distcountPrice}}]
                    .feature
                        span.mintext.fa.fa-volume-up 
                        span.mintext.ml-2 {{dataBuy.featureSound}}
                        span.mintext.fa.fa-closed-captioning.ml-2
                        span.mintext.ml-2 {{dataBuy.featureSubtitle}} 
            .col-md-2.centrar
                span ${{dataBuy.price}} MXN
                span.fa.fa-times.text-danger.ml-4
</template>
<script>
export default {
    name:"descripBuy",
    props:['dataBuy']
}
</script>
<style lang="scss" scoped>
p{
    margin: 0px;
}
.imgP{
    height: 130px;
}
.imgC{
    height: 100px;
}

</style>