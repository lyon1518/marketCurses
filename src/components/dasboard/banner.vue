<template lang="pug">
    .container-fluid.sp
        .row.banner.w-100
            .col-md-8
                //- img.w-100(src="")
            .col-md-4.centrar
                .m-auto
                    h1.text-primary {{title}}
                    h3 {{descrip}}
                    div(:class="'btn btn-outline-'+color") {{btnText}}
</template>
<script>
export default {
    name:"banner",
    props:['title', 'descrip', 'color', 'btnText']
}
</script>
<style lang="scss" scoped>
.banner{
    background-image: url('../../assets/img/curso1.png'), linear-gradient(#ebf6f7, #fff, #ebf6f7);
    height: 100vh;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0px;
}
.content{
    margin: auto;
}
</style>