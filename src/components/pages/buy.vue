<template lang="pug">
    .container-fluid.bg-gray.p-5
        .container.mb-5
            h1 Finaliza tu compra
            .row.mt-4
                .col-md-4.text-center
                    .btn.btn-lg.btn-block(disabled :class="view == 'buy'?'btn-primary shover':''") Método de pago
                .col-md-4.text-center
                    .btn.btn-lg.btn-block.inactive(disabled :class="view == 'comfirm'?'btn-primary shover':''") Confirmacion
                .col-md-4.text-center
                    .btn.btn-lg.btn-block.inactive(disabled :class="view == 'listo'?'btn-primary shover':''") Listo
            orden.mt-3
                            
</template>
<script>
import orden from "../dasboard/orden";
export default {
    name:"buy",
    components:{
        orden
    },
    data(){
        return{
            view:'buy'
        }
    }
}
</script>
<style lang="scss" scoped>
.shover:hover,  .shover:active,  .shover:focus{
    background: #007bff !important;
    cursor: auto !important;
}
.inactive{
    cursor: auto !important;
}
</style>