<template>
      <aside class="back">
        <div class="top">
          <div class="logo">
            <img src="@/assets/img/digi.png" alt="logo">
            <!-- <h2>DIGI<span class="danger">SERVICES</span></h2> -->
          </div>
          <div class="close" id="close-btn">
         <span><font-awesome-icon icon="fa-solid fa-xmark" /></span>   
            </div>
        </div>
        <div class="sidebar back">
         <router-link to="/" class="active">
            <span><font-awesome-icon icon="fa-solid fa-box" /></span>   
            <h3>Dashboard</h3>
         </router-link>
          <router-link :to="{name: 'clients.index'}"> 
            <span><font-awesome-icon icon="fa-solid fa-user" /></span>   
            <h3>Clients</h3>
          </router-link>
         <router-link :to="{name: 'orders.index'}"> 
            <span><font-awesome-icon icon="fa-solid fa-clipboard-list" /></span>   
            <h3>Commandes</h3>
         </router-link>
         <router-link :to="{name: 'stats.index'}"> 
            <span><font-awesome-icon icon="fa-solid fa-chart-line" /></span>   
            <h3>Statistiques</h3>
          </router-link>
          <router-link :to="{name: 'messagerie.index'}"> 
            <span><font-awesome-icon icon="fa-solid fa-message" /></span>   
            <h3>Messages</h3> <span class="message-count">26</span>
          </router-link>
          <a href="#">
            <span><font-awesome-icon icon="fa-solid fa-clipboard" /></span>   
            <h3>Produits</h3>
          </a>
          <a href="#">
            <span><font-awesome-icon icon="fa-solid fa-circle-exclamation" /></span>   
            <h3>Parametres</h3>
          </a>
          <a href="#">
            <span><font-awesome-icon icon="fa-solid fa-plus" /></span>   
            <h3>Ajouter un produit</h3>
          </a>
          <a href="#">
            <span><font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" /></span>   
            <h3>Déconnexion</h3>
          </a>
        </div>
      </aside>
</template>

<script>

import {defineComponent, ref,  nextTick} from 'vue'

export default defineComponent({
  name: 'XSidebar',


setup() {

// sidebar
const sidebarVisible = ref(false)
const toggleButton = () => sidebarVisible.value = !sidebarVisible.value


nextTick(() => {


  const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

console.log({sideMenu}, {menuBtn}, {closeBtn})

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click' ,() => {
  sideMenu.style.display = "none";
})

})

return {
  sidebarVisible,
  toggleButton
}

},



})
</script>
