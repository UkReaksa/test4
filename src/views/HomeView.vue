<template>
  <!-- all Item -->
  <div class=" ">
    <!--  Nuvbar -->
    <div class="sticky top-0">
      <Nuvbar />
    </div>
    
    <!-- សេចក្ដីណែនាំ -->
    
    <div class="my-[200px] flex justify-around">
      <div class="textc">
        <div class="mx-[50px]">
          <p class="text-4xl font-bold">រៀនសរសេរកូដពីចំណុច​សូន្យ</p>
          <br />
          <p class="w-[90%] text-lg">
            រៀនបច្ចេកវិទ្យាថ្មីៗដូចជា កូដ និយាយជាភាសាខ្មែរ​
            និងចាប់ផ្តើមអាជីពក្នុងសម័យបច្ចេកវិទ្យា 4.0!
            ចុះឈ្មោះឥឡូវតាមតេលេក្រាម!
          </p>
        </div>
          
        <div class="py-[30px] px-40">
          <RouterLink to="">
            <button
              @click="telegram()"
              class="bg-blue-500 w-60 rounded-lg items-center p-2 text-white hover:bg-blue-400 transition-all"
            >
              ចុះឈ្មោះ
            </button>
            <div class="my-[20px] mx-[100px]">
                         

            </div>
          </RouterLink>
        </div>
      </div>

      <div class="mr-[100px] my-[-70px]">
        <img src="../pic/Untitled-1.png" alt="" />
      </div>
    </div>
    <!-- Manager -->
<div class="mger">
   <div class="bg-base-200 w-[100%] h-[360px] flex justify-between">
    <div >
        <img src="../pic/IMG_3440.JPG" class="max-w-sm rounded-lg shadow-2xl py-12" />
    </div>
    <div class=" pr-[700px] px-[30px]">
      <h1 class="  text-3xl py-[50px] font-thin ">Administrator!</h1>
      <p class="shadow-xl rounded-md p-3 font-semibold">ចូលរួមធ្វើអោយវិស័យ បច្ចេកវិទ្យានៅកម្ពុជាកាន់តែរីកចម្រើន ចូលរួមជាមួយខ្ញុំឥលូវនេះ​ ។</p>
    </div>
   </div>
</div>
  
    

    <!-- Item and box -->
    <div class="itembox">
      <div
        class="my-[80px] flex flex-wrap justify-around sm:container:gap-[30px]"
      >
       <!-- box html and css -->
        <div class="py-10">
          <div class="w-full sm:w-[350px] h-[400px] shadow-md">
            <div class="text-center">
              <img 
                 src="../pic/1.jpg" class=" w-[350px] h-[250px] "
              />
              <p>
                វគ្ក HTML and CSS : រៀនពីមូលដ្ធានគ្រឹះ​នៃភាសាកូដ HTML and CSS ។​
                ភាសានេះជាភាសាមួយសម្រាប់បង្កើត វេបសាយ។
              </p>
              <button
                class="bg-blue-500 w-30 rounded-lg items-center p-2 text-white hover:bg-blue-400 transition-all my-5"
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
                ភាសានេះជាភាសាមួយសម្រាប់អ្នករៀនកូដដំបូងគួរតែចេះ ។
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

    <!-- last -->
    <!-- This code using disey ui -->
        <div class=" bg-slate-800 h-[100px]">
          <p class=" text-center items-center text-white p-[40px]">reaksa  <i class="fa fa-copyright" aria-hidden="true"></i> copyright 21/2/2024</p>
          <p></p>
        </div>
  </div>
</template>

<script>
import Nuvbar from "./Nuvbar.vue";
import Boxitem from "./Boxitem.vue";
export default {
  setup() {
    return {};
  },
  components: {
    Nuvbar,
    Boxitem,
  },
  methods: {
    telegram() {
      const telegramURL = "https://t.me/+5ucgCPwyA31kYjNl";
      // Redirect the user to the Telegram link
      window.location.href = telegramURL;
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 778px) {
  .itembox img {
    
    margin-left: 50px;
  }
  .textc{
     margin-left: 130px;
  }
  .mger img{
   margin-left: 25px;
  }
  .mger p{
    margin-top: 250px;
    margin-left: -400px;
    margin-right: 200px;
  }
  .mger h1{
    opacity: 0;
  }
  .mger{
    margin-top: -100px;
  }
}
</style>
