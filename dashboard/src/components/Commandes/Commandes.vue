<style lang="scss">
@import "@/assets/scss/style.scss"; 
</style>


<template>
<body class="back">
    <div class= "container">
      <!-- Sidebar -->
      <x-sidebar/>
      <!-- partie centrale -->
      <main>
          <h1>Commandes</h1>
          <div class="date">
              <input type="date">
          </div>

                <!-- Commandes -->
                <RecentOrder/>
      </main>
      <!-- partie droite -->
      <div class="right">
        <!-- header -->
          <TopPart/>
        
      </div>
    </div>
</body>
</template>


<script>
import XSidebar from './Sidebar.vue';
import RecentOrder from './RecentOrder.vue';
import TopPart from './TopPart.vue';

export default {

    components: { XSidebar, RecentOrder, TopPart,  }
}
</script>



