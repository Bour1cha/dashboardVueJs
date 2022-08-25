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
                <Charts/>
                <RecentOrder/>
      </main>
      <!-- partie droite -->
      <div class="right">
        <!-- header -->
          <TopPart/>
        <SalesAnalyst/>
      </div>
    </div>
</body>
</template>


<script>
import XSidebar from '../Accueil/Sidebar.vue';
import TopPart from '../Accueil/TopPart.vue';
import RecentOrder from '../Accueil/RecentOrder.vue';
import Charts from '../Commandes/Charts.vue';
import SalesAnalyst from '../Accueil/SalesAnalyst.vue';

export default {
      components: { XSidebar, TopPart, RecentOrder, Charts, SalesAnalyst }
}
</script>



