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

        <Dashmessage  :tree_contactsmessage="DataContactsmessage"/> 

      <!-- partie droite -->
      <div class="right">
        <!-- header -->
          <TopPart/>
      </div>
    </div>
</body>
</template>


<script>

import {contacts} from '@/Bddcontactmessage';
import { onMounted, ref } from 'vue';

//components

import XSidebar from '../Accueil/Sidebar.vue';
import TopPart from '../Accueil/TopPart.vue';
import Dashmessage from './dashmessage.vue';



export default {
      components: { XSidebar, TopPart, Dashmessage },


      setup() {

    // class pour les messages
         class Contactsmessage {
          constructor (image,nom,message,date){
              this.image = image
              this.nom = nom
              this.message = message
              this.date = date
          }
      }


// variable pour les messages
let DataContactsmessage = ref([]);


const makeDataContactsmessage = () => DataContactsmessage.value = contacts.map(contact => new Contactsmessage(contact.image, contact.nom, contact.message, contact.date))


  // lorsque tout les composants sont chargés
    onMounted(() => {

      makeDataContactsmessage()
    });

  //return
    return {
      DataContactsmessage


}
}
}
</script>



