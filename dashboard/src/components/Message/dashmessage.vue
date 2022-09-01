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
            <div class="rightside"></div>
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