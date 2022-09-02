<template>


    <div class="container-message">
          <div class="container-messaged">
            <div class="leftside">
              <!-- header -->
              <div class="headermessage">
                    <div class="userimg">
                      <img src="@/assets/img/profile-1.jpg" class="covermessage" alt="profile-pic">
                    </div>
                    <ul class="nav_icons">
                      <li><font-awesome-icon icon="fa-solid fa-circle-notch" /></li>
                      <li><font-awesome-icon icon="fa-solid fa-message" /></li>
                      <li><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></li>
                    </ul>
              </div>
              <!-- search -->
              <div class="search_chat">
                  <div>
                    <input type="text" placeholder="Rechercher ou démarrer une nouvelle discussion"> <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                  </div>
              </div>
              <!-- chat contact list-->
              <div class="chatlist">
                     <Contactmessage v-for="(card,index) in tree_contactsmessage" :info_contactsmessage="card" :key="index"/>
              </div>
            </div>
            <div class="rightside">
              <div class="headermessage">
                <div class="imgText">
                  <div class="userimg">
                    <img src="@/assets/img/profile-2.jpg" class="covermessage" alt="profile-pic">
                  </div>
                  <h4>André Sanchez <br><span>En ligne</span></h4>
                </div>
                <ul class="nav_icons">
                  <li><font-awesome-icon icon="fa-solid fa-circle-notch" /></li>
                  <li><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></li>
                </ul>
              </div>
              <div class="chatBox">
                <div class="message my_message">
                  <p>Bonjour Fournisseur 1  , rendez-vous la semaine prochaine<br><span>12:31 </span></p>
                </div>
                <div class="message frnd_message">
                  <p>Bonjour , ok pas de soucis à quelle heure ? <br><span>12:31</span></p>
                </div>
                <div class="message my_message">
                  <p>15h ce serait possible pour vous ?<br><span>12:31 </span></p>
                </div>
                <div class="message frnd_message">
                  <p>Oui parfait ! <br><span>12:32</span></p>
                </div>
                <div class="message my_message">
                  <p>d'accord je vous attendrais<br><span>12:33 </span></p>
                </div>
                <div class="message frnd_message">
                  <p>Ok ! <br><span>12:35</span></p>
                </div>
              </div>
            </div>
       
          </div>


                </div>
                
                </template>


                
<script>
import Contactmessage from './contactmessage.vue';

export default {
    name: "DashMessage",
    props: {
      tree_contactsmessage: Array,
    },
    components: { Contactmessage }
}
</script>