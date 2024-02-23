<template>
  <div class=" sticky top-0">
    <Nuvbar/>
  </div>



<div class="mx-[10%]">
  
        <!-- box javascript -->
        <div class="py-10 ">
          <div class="w-full sm:w-[350px] h-[400px] shadow-md">
            <div class="text-center">
              <img class=" w-[350px] h-[250px]"
                src="../pic/free.jpg"
               
              />
              <p>
               វគ្ក ​​Photoshop : បង្រៀនពីវគ្គខ្លីៗ នឹងគន្លឺះក្នុងការឌីហ្សាញអោយកាន់តែទាក់ទាញ ។​
 
              </p>
              <button
                class="bg-blue-500 w-30 rounded-lg items-center p-2 text-white hover:bg-blue-400 transition-all my-5"
              >
                ចាប់ផ្ដើមរៀន
              </button>
            </div>
          </div>
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

<style lang="scss" scoped>

</style>