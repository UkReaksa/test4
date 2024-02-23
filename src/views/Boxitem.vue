<template>
  
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<!-- <div>
    <router-link to="back">
         <i class="fa-solid fa-left-long text-2xl cursor-pointer p-[20px] pr-[300px]"></i>

    </router-link>

</div> -->
<div class=" sticky top-0">
    <Nuvbar/>
</div>

     
 <!-- Item and box -->
    <div class="itembox">
      <div
        class="my-[80px] flex flex-wrap justify-around sm:container:gap-[30px]"
      >
       <!-- box html and css -->
        <div class="py-10 ">
          <div class="w-full sm:w-[350px] h-[400px] shadow-md transition duration-150 ">
            <div class="text-center">
              <img 
                 src="../pic/1.jpg" class=" w-[350px] h-[250px] "
              />
              <p>
               វគ្ក HTML and CSS : រៀនពីមូលដ្ធានគ្រឹះ​នៃភាសាកូដ HTML and CSS ។​
                ភាសានេះជាភាសាមួយសម្រាប់បង្កើត វេបសាយ។
              </p>
              <button
                class="bg-blue-500 w-30 rounded-lg items-center p-2 text-white hover:bg-blue-400 transition-all my-5 "
              >
                ចាប់ផ្ដើមរៀន
              </button>
            </div>
          </div>
        </div>
        <!-- box c++ -->
        <div class="py-10">
          <div class="w-full sm:w-[350px] h-[400px] shadow-md">
            <div class="text-center">
              <img class="w-[390px] h-[250px]"
                src="../pic/reaksa.jpg" 
              />
              <p>
                វគ្ក c++ : រៀនពីមូលដ្ធានគ្រឹះ​នៃភាសាកូដ c++ ។​
                ភាសានេះជាភាសាមួយសម្រាប់អ្នករៀនកូដដំបូងគួរតែចេះ
              </p>
              <button
                class="bg-blue-500 w-30 rounded-lg items-center p-2 text-white hover:bg-blue-400 transition-all my-5"
              >
                ចាប់ផ្ដើមរៀន
              </button>
            </div>
          </div>
        </div>

       

        <!-- box javascript -->
        <div class="py-10">
          <div class="w-full sm:w-[350px] h-[400px] shadow-md">
            <div class="text-center">
              <img class=" w-[350px] h-[250px]"
                src="../pic/javascript.jpg"
               
              />
              <p>
               វគ្ក ​​javascript : រៀនពីមូលដ្ធានគ្រឹះ​នៃភាសាកូដ javascript ។​
                ភាសានេះជាភាសាមួយសម្រាប់បន្ថែមជាមួយភាសាកូដ HTML  and CSS ។
              </p>
              <button
                class="bg-blue-500 w-30 rounded-lg items-center p-2 text-white hover:bg-blue-400 transition-all my-5"
              >
                ចាប់ផ្ដើមរៀន
              </button>
            </div>
          </div>
        </div>

        <!-- box vue.js-->
        <div class="py-10">
          <div class="w-full sm:w-[350px] h-[400px] shadow-md">
            <div class="text-center">
              <img class="w-[350px] h-[250px]"
                src="../pic/cover_vue.png"
               
              />
              <p>
                វគ្ក Vue.js : រៀនពីមូលដ្ធានគ្រឹះ​នៃភាសាកូដ Vue.js ។​
                Vue.js ជា Framwork របស់ javascript វាកាន់តែងាយស្រួលក្នុងការបង្កើតវេបសាយជាមួយ Vue.js។
              </p>
              <button
                class="bg-blue-500 w-30 rounded-lg items-center p-2 text-white hover:bg-blue-400 transition-all my-5"
              >
                ចាប់ផ្ដើមរៀន
              </button>
            </div>
          </div>
        </div>

        
        <!-- box 3`sedr -->
      </div>
    </div>




</template>

<script>
import Nuvbar from "./Nuvbar.vue";
export default {

    setup() {
        return {};
    },
    components: { 
        Nuvbar
     }
}
</script>

<style scoped>
@media screen and (max-width: 778px) {
  .itembox img {
    
    margin-left: 50px;
  }
  .textc{
     margin-left: 130px;
  }
}
</style>