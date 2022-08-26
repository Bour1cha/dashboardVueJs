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
          <RecentUpdates :tree_comments=" DataCommentaires"/>
          <!-- analyse des ventes -->
        <SalesAnalyst :tree_analyses="DataAnalysesVentes" />
      </div>
    </div>
</body>
</template>


<script>
//import bdd
import {infoAnalyse} from '@/Bdd';
import {comments} from '@/Bddco';
import { onMounted, ref } from 'vue';
//components
import XSidebar from './Sidebar.vue';
import Insights from './Insights.vue';
import RecentOrder from './RecentOrder.vue';
import RecentUpdates from './Comments/RecentUpdates.vue';
import TopPart from './TopPart.vue';
import SalesAnalyst from './SalesAnalyses/SalesAnalyst.vue';

export default {
      name: 'Accueil',
    components: { XSidebar, Insights, RecentOrder, RecentUpdates, TopPart, SalesAnalyst },

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
    // class pour les commentaires
         class Commentaires {
          constructor (image,nom,commentaire,date){
              this.image = image
              this.nom = nom
              this.commentaire = commentaire
              this.date = date
          }
      }

// variable pour les analyses de ventes
let DataAnalysesVentes = ref([]);

// variable pour les commentaires
let DataCommentaires = ref([]);

const makeDataAnalysesVentes = () => DataAnalysesVentes.value = infoAnalyse.map(infos => new AnalysesVentes(infos.logo, infos.statut, infos.date, infos.pourcentage, infos.nombres))

const makeDataCommentaires = () => DataCommentaires.value = comments.map(comment => new Commentaires(comment.image, comment.nom, comment.commentaire, comment.date))


  // lorsque tout les composants sont chargés
    onMounted(() => {
      makeDataAnalysesVentes()
      makeDataCommentaires()
    });

  //return
    return {
      DataAnalysesVentes, DataCommentaires


}
}
}


</script>



