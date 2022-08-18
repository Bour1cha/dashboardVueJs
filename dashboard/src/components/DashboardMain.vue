


<style lang="scss">
 @import "@/assets/scss/style.scss"; 
</style>


<template>
 <body>
    <div class= "container">
      <aside>
        <div class="top">
          <div class="logo">
            <img src="@/assets/img/logo.png" alt="logo">
            <h2>DIGI<span class="danger">SERVICES</span></h2>
          </div>
          <div class="close" id="close-btn">
         <span><font-awesome-icon icon="fa-solid fa-xmark" /></span>   
            </div>
        </div>
        <div class="sidebar">
          <a href="#">
            <span><font-awesome-icon icon="fa-solid fa-box" /></span>   
            <h3>Dashboard</h3>
          </a>
          <a href="#" class="active">
            <span><font-awesome-icon icon="fa-solid fa-user" /></span>   
            <h3>Clients</h3>
          </a>
          <a href="#">
            <span><font-awesome-icon icon="fa-solid fa-clipboard-list" /></span>   
            <h3>Commandes</h3>
          </a>
          <a href="#">
            <span><font-awesome-icon icon="fa-solid fa-chart-line" /></span>   
            <h3>Statistiques</h3>
          </a>
          <a href="#">
            <span><font-awesome-icon icon="fa-solid fa-message" /></span>   
            <h3>Messages</h3> <span class="message-count">26</span>
          </a>
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
    </div>
 </body>
</template>




