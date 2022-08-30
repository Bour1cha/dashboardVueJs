<style lang="scss">
@import "@/assets/scss/style.scss"; 
</style>


<template>
<body class="back">
    <div class="container">
      <!-- Sidebar -->
      <x-sidebar/>
      <!-- partie centrale -->
      <main>
          <h1>Statistiques</h1>
          <!-- Statistiques -->
            <Insights/>
            <Statgraph1/>
            <Statbar/>


           
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

//components
import Insights from '../Accueil/Insights.vue';
import XSidebar from '../Accueil/Sidebar.vue';
import TopPart from '../Accueil/TopPart.vue';
import RecentOrder from '../Accueil/RecentOrder.vue';
import Charts from '../Commandes/Charts.vue';
import SalesAnalyst from '../Accueil/SalesAnalyses/SalesAnalyst.vue';
import Statbar from './Statbar.vue';
import Statgraph1 from './Statgraph1.vue';



export default {
      components: { XSidebar, TopPart, RecentOrder, Charts, SalesAnalyst, Insights, Statbar, Statgraph1 },
}
</script>



