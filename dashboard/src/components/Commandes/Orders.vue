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
                <!-- Commandes -->
                <Charts/>
                <!-- Commandes récentes -->
                <RecentOrder/>
      </main>
      <!-- partie droite -->
      <div class="right">
        <!-- header -->
          <TopPart/>
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
import XSidebar from '../Accueil/Sidebar.vue';
import TopPart from '../Accueil/TopPart.vue';
import RecentOrder from '../Accueil/RecentOrder.vue';
import Charts from '../Commandes/Charts.vue';
import SalesAnalyst from '../Accueil/SalesAnalyses/SalesAnalyst.vue';


export default {
      components: { XSidebar, TopPart, RecentOrder, Charts, SalesAnalyst },

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



