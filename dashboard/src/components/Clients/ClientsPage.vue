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
          <h1>Derniers commentaires</h1>
              <!-- derniers post -->
                <div class="right"> 
                <RecentUpdates :tree_comments=" DataCommentaires"/>     
                  </div>
                  
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
//bdd
import {comments} from '@/Bddco';
import { onMounted, ref } from 'vue';
//components
import XSidebar from '../Accueil/Sidebar.vue';
import TopPart from '../Accueil/TopPart.vue';
import RecentUpdates from '../Accueil/Comments/RecentUpdates.vue';



export default {
      components: { XSidebar, TopPart, RecentUpdates },

 setup() {

    // class pour les commentaires
         class Commentaires {
          constructor (image,nom,commentaire,date){
              this.image = image
              this.nom = nom
              this.commentaire = commentaire
              this.date = date
          }
      }


// variable pour les commentaires
let DataCommentaires = ref([]);


const makeDataCommentaires = () => DataCommentaires.value = comments.map(comment => new Commentaires(comment.image, comment.nom, comment.commentaire, comment.date))


  // lorsque tout les composants sont chargés
    onMounted(() => {
      makeDataCommentaires()
    });

  //return
    return {DataCommentaires
}
}
      
}
</script>



