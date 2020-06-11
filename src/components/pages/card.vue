<template lang="pug">
    .container-fluid.bg-gray.p-5
        .container
            .row
                .col-md-2
                .col-md-8
                    h1 Carrito de compras
                    .card.p-4
                        descripBuy.mb-4(:dataBuy="buy")
                        .row(v-for="x in 4")
                            .col-md-1
                            .col-md-10
                                descripBuy(:dataBuy="buyList")
                            .col-md-1
                        hr
                        descripBuy.mb-4(:dataBuy="buy")
                        hr
                        descripBuy.mb-4(:dataBuy="buy")
                        hr
                        .row
                            .col-md-6
                                p Código de Descuento
                                input.form-control(type="text" placeholder="Código")
                            .col-md-6.text-right
                                strong Subtotal US$ 24.80
                                p Descuento US$ -9.80
                                p Impuestos US$ 8.80
                                h2 #[strong Total US$ 999.99]
                        hr
                        a.btn.btn-primary(href="#/compra")
                            .fa.fa-shopping-cart
                            span.ml-2 Finalizar pedido
                            .fa.fa-angle-right.ml-2
                .col-md-2
</template>
<script>
import descripBuy from "../dasboard/descripBuy";
export default {
    name:"card",
    components:{
        descripBuy
    },
    data(){
        return{
            buy:{main:true, title:'TITUTLO',course:"Un curso de Mᴧuco Sosᴧ",distcountText:"57% Dto.",distcountPrice:"US$ 999.99",featureSound:"Español",featureSubtitle:"Español, Inglés, PortuguésEspañol",price:"99,99"},
            buyList:{main:false, title:'TITUTLO',course:"Un curso de Mᴧuco Sosᴧ",distcountText:"57% Dto.",distcountPrice:"US$ 999.99",featureSound:"Español",featureSubtitle:"Español, Inglés, PortuguésEspañol",price:"99,99"}
        }
    }
}
</script>
<style lang="scss" scoped>

</style>