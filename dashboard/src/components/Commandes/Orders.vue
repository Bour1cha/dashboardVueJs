<style lang="scss">
@import "@/assets/scss/style.scss"; 
</style>


<template>
<body class="back">
    <div class = "container">
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
        <SalesAnalyst  SalesAnalyst :tree_analyses="DataAnalysesVentes" />
      </div>
    </div>
</body>
</template>


<script>
//import bdd
import {infoAnalyse} from '@/Bdd'
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
      // script pour l'importation des données de la bases de donéne bdd pour les analyses de ventes
      class AnalysesVentes {
          constructor (logo,statut,date,pourcentage,nombres){
              this.logo = logo
              this.statut = statut
              this.date = date
              this.pourcentage = pourcentage
              this.nombres = nombres
          }
      }
// variable pour les analyses de ventes
let DataAnalysesVentes = ref([]);



const makeDataAnalysesVentes = () => DataAnalysesVentes.value = infoAnalyse.map(infos => new AnalysesVentes(infos.logo, infos.statut, infos.date, infos.pourcentage, infos.nombres))

  // lorsque tout les composants sont chargés
    onMounted(() => {
      makeDataAnalysesVentes()
    });

  //return
    return {
      DataAnalysesVentes


}
}
      
}
</script>



