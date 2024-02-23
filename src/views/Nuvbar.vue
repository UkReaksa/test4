<template>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
   <!-- Nuvbar -->
    <div id="con" class=" text-center sm:block">

      
  

  <ul class="gap-[50px] p-[20px] font-bold flex justify-center bg-white">

    

  <li>
    <RouterLink to="back">
          <i class="fa fa-home pr-2 pb-2" aria-hidden="true"></i>

      ទំព័រដើម

    </RouterLink>
    
</li>
  
  <li>
  
    <RouterLink to="Boxitem">
         <i class="fa fa-book pr-2 pb-2" aria-hidden="true"></i>

      ថ្នាក់

    </RouterLink>
 
</li>
  <li>
    <RouterLink to="Freeclass">
      
      <i class="fa-solid fa-dollar-sign pr-2 pb-2"></i>

      ថ្នាក់ Free</RouterLink>

</li>



  <li>
    <RouterLink to="Login">
    <i class="fa-regular fa-address-card pr-2 pb-2"></i>
    Login
  </RouterLink>

</li>

  <RouterLink to="">
      <button @click="telegram()" class=" bg-blue-500 w-20 rounded-lg items-center p-2 text-white hover:bg-blue-400 transition-all ">
      ចុះឈ្មោះ</button>

  </RouterLink>

  


  </ul>
 </div>
 <!-- Logo -->
 <div class="me">
    <div class="my-[-83px] mx-[20px]" >
        <img class=" w-[80px] rounded-md " src="../pic/Black And White Y2k Star Fashion Style Logo (1).jpg">

  </div>
 </div>

<button @click="count++">
  {{ count }}
</button>
    

</template>

<script>
export default {

  setup() {
    
    return {
     
        }
  },
    methods: {
      telegram() {
         const telegramURL = "https://t.me/+5ucgCPwyA31kYjNl";
      // Redirect the user to the Telegram link
      window.location.href = telegramURL;
      }
    },
}
</script>

<style>
li{
  border-bottom: 2px solid black;
}
li:hover{
  border-bottom: 3px solid rgb(200, 11, 11);
  
}
@media screen and (max-width: 992px){
    
}


@media screen and (max-width: 778px) {
  ul{
    margin-top: 100px;
   }
   .me{
    margin-left: 200px;
   
   }
   .me{
   margin-top: -170px;
   
   }
   
}

@media screen and (max-width: 500px) {
   ul{
    margin-top: 100px;
    background-color: aliceblue;
   }
   .me{
    margin-left: 160px;
   
   }
   .me{
   margin-top: -200px;
   
   }

}

</style>