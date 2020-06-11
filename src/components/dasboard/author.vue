<template lang="pug">
    .card.p-2
        img.w-100.img(:src="dataIns.img")
        strong.text-center {{dataIns.title}}
        p.text-center {{dataIns.description}}
        .text-center
            a.btn.btn-outline-primary(:href="'#/instructores/'+dataIns.id") {{btnText}}
</template>
<script>
export default {
    name:"author",
    props:['dataIns', 'btnText']
}
</script>
<style lang="scss" scoped>
.img{
    height: 150px;
}
</style>
