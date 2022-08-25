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
          <h1>Dashboard</h1>
          <div class="date">
              <input type="date">
          </div>
          <!-- Statistiques -->
                <Insights/>
                <!-- Commandes -->
                <RecentOrder/>
      </main>
      <!-- partie droite -->
      <div class="right">
        <!-- header -->
          <TopPart/>
          <!-- derniers post -->
          <RecentUpdates/>
          <!-- analyse des ventes -->
        <SalesAnalyst v-for="(data, i) in DataAnalysesVentes" :key="i" :tree_analyses="data" />
      </div>
    </div>
</body>
</template>


<script>
//import bdd
import infoAnalyse from '@/Bdd'
import { onMounted, ref } from 'vue';
//components
import XSidebar from './Sidebar.vue';
import Insights from './Insights.vue';
import RecentOrder from './RecentOrder.vue';
import RecentUpdates from './RecentUpdates.vue';
import TopPart from './TopPart.vue';
import SalesAnalyst from './SalesAnalyst.vue';

export default {
      name: 'Accueil',
    components: { XSidebar, Insights, RecentOrder, RecentUpdates, TopPart, SalesAnalyst },

    setup() {
      class AnalysesVentes {
          constructor (logo,statut,date,pourcentage,nombres){
              this.logo = logo
              this.statut = statut
              this.date = date
              this.pourcentage = pourcentage
              this.nombres = nombres
          }
      }


let DataAnalysesVentes = ref([]);

const makeDataAnalysesVentes = () => {
   let tree_analyses = [];
  // boucle for of équivalent de for each 
    for (const analysesVentes of infoAnalyse) {
      const new_analysesVentes = new AnalysesVentes(analysesVentes.logo, analysesVentes.statut, analysesVentes.date, analysesVentes.pourcentage, analysesVentes.nombres)

    if (tree_analyses.length === 0) {
      tree_analyses.push(new_analysesVentes);
         DataAnalysesVentes.value.push(tree_analyses);
       tree_analyses =[];
     } else {
      tree_analyses.push(new_analysesVentes);
     }
    }
}
  // lorsque tout les composants sont chargés
    onMounted(makeDataAnalysesVentes);

  //return
    return {
      DataAnalysesVentes
    }
}
}


</script>



