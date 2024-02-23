<template>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
        
    <!-- logo -->
<div class=" sticky top-0 bg-slate-50 w-[100%]">
    <nuvbar/>


     <div class="bgg">
   
    </div>

</div>
  



</template>

<script>
import Nuvbar from './Nuvbar.vue';

export default {
    setup() {
        return {};
    },
    components: { Nuvbar }
}
</script>

<style scoped>

@media screen and (max-width: 778px) {
.bgg{
    margin-top: 100px;
    margin-left: 0px;
    background-color: rgba(237, 237, 237, 0.55);
    height: 130vh;
}
/* body{
    background-color: rgb(98, 92, 92);
} */

}
   


</style>