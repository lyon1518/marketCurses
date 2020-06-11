<template lang="pug">
    .card.p-4
        .listo(v-if="view == 'listo'")
            h2.text-center ¡Gracias por tu compra!
            hr
            .text-center.w-50.m-auto
                .imgD.bg-dark
            .text-center.mt-4
                .btn.btn-outline-dark Emitir fatura
                .btn.btn-outline-dark.ml-2 Ver orden
                .btn.btn-outline-dark.ml-2 Ir al curso
        .row(v-if="view != 'listo'")
            .col-md-5.b-r
                h2 Tu orden
                hr
                .row.mt-2(v-for="x in 4")
                    .col-md-8
                        p Ilustración corporativa: Guía de estilo vectorial
                        p.mintext Un curso de Mauco Sosa
                    .col-md-4
                        p $400.99 MXN
                hr
                .row
                    .col-md-6
                        p #[strong Subtotal]
                        p #[strong Shipping]
                        p #[strong Total]
                    .col-md-6.text-right
                        p $218.87
                        p Free
                        p $218.87
            .col-md-7
                .confirm(v-if="view == 'comfirm'")
                    h2 Confirmación
                    hr
                    .row
                        .col-md-4.text-right
                            strong Orden N°
                            strong Fecha de compra
                            <br>
                            <br>
                            strong Compra
                        .col-md-4
                            p 1029384756
                            p 2020/04/13
                            p Subtotal
                            p Impuestos (16%)
                            strong Total
                        .col-md-4
                            p ver orden
                            br
                            p $964.24
                            p $23.76
                            strong $999.99
                    .card.mt-4
                        .card-header
                            .row
                                .col-md-6
                                    strong Método de pago
                                .col-md-6.text-right
                                    .fa.fa-edit
                                    span Editar
                        .card-body
                            .mintext Tarjeta debito / credito
                            strong VISA
                            h2 **** **** **** 6789
                .buy(v-if="view == 'buy'")
                    h2 Método de pago
                    hr
                    .text-center
                        .form-check.form-check-inline.text-center
                            input.form-check-input(type="radio" name="inlineRadioOptions" id="inlineRadio1" value="tarjeta" v-model="buy")
                            label.form-check-label(for="inlineRadio1") 
                                span.fa.fa-credit-card
                                span.ml-2 Tarjeta
                            input.form-check-input.ml-4(type="radio" name="inlineRadioOptions" id="inlineRadio2" value="paypal" v-model="buy")
                            label.form-check-label(for="inlineRadio2") 
                                span.fa.fab-paypal
                                span.ml-2 Paypal
                    hr
                    .tarjeta(v-if="buy == 'tarjeta'")
                        form
                            label(for="car") Número de tarjeta
                            input(type="text" class="form-control" id="car" placeholder="xxxx-xxxx-xxxx-xxxx")
                            .row.mt-4
                                .col-md-8
                                    label(for="vencimiento") Fecha de vencimiento
                                    .row
                                        .col-md-6
                                            select.form-control
                                                option(value="" disabled) Mes
                                                option(value="" v-for="x in 12") {{x}}
                                        .col-md-6
                                            select.form-control
                                                option(value="" disabled) Año
                                                option(value="" v-for="x in 12") {{x}}
                                .col-md-4
                                    label(for="car") CCV
                                    input(type="text" class="form-control" id="clave" placeholder="")
                    .paypal(v-if="buy == 'paypal'")
                        .imgD.w-100.bg-dark
        hr
        .row
            .col-md-4
            .col-md-4
            .col-md-4.text-right
                .btn.btn-danger(@click="continuar('buy')" v-if="view == 'comfirm'")
                    span cancelar
                .btn.btn-success.ml-4(@click="continuar('listo')" v-if="view == 'comfirm'")
                    span Finalizar compra
                .btn.btn-primary(v-if="view == 'buy'" @click="continuar('comfirm')" )
                    span Continuar
                    .fa.fa-angle-right.ml-2
</template>
<script>
export default {
    name:"orden",
    data(){
        return{
            buy:'tarjeta',
            view:'buy'
        }
    },
    methods:{
        continuar(data) {
            this.$parent.view = data
            this.view = data 
        }
    }
}
</script>
<style lang="scss" scoped>
p{
    margin: 0px;
}
.b-r{
    border-right: solid 1px #ededed;
}
</style>