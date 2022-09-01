<style lang="scss">
@import "@/assets/scss/style.scss"; 
</style>


<template>
<body class="back">
    <div class="container">
      <!-- Sidebar -->
      <x-sidebar/>
      <!-- partie centrale -->

          <!-- Messagerie -->

        <Dashmessage/>

           

      <!-- partie droite -->
      <div class="right">
        <!-- header -->
          <TopPart/>
      </div>
    </div>
</body>
</template>


<script>

//components

import XSidebar from '../Accueil/Sidebar.vue';
import TopPart from '../Accueil/TopPart.vue';
import Dashmessage from './dashmessage.vue';



export default {
      components: { XSidebar, TopPart, Dashmessage },
}
</script>



