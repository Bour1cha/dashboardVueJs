<template>
          <div class="top">
            <button id="menu-btn">
              <span><font-awesome-icon icon="fa-solid fa-bars" /></span>
            </button>

                    <div class="nav" id="navb"> 

            <div class="profile">
                        <div id="toggle">
                <i class="indicator"></i>
                    </div>
                <div class="info">
                    <p>Bonjour, <b>Utilisateur 1</b></p>
                    <small class="text-muted">Admin</small>
                </div>
                <div class="profile-photo">
                <router-link to="/"><img src="@/assets/img/profile-1.jpg" alt="profile_1"></router-link>    
                </div>
            </div>
          </div>
        </div>
</template>



<script>

import {defineComponent, ref,  nextTick} from 'vue'

export default defineComponent({
  name: 'TopPart',


setup() {

// sidebar
const DarkMode = ref(false)
const DarkButton = () => DarkMode.value = !DarkMode.value


nextTick(() => {
// script pour le bouton du mode sombre
const body = document.querySelectorAll('.back'); 
const toggle = document.getElementById("toggle");//je crée une constante toggle , j'indique que cette constante va selectionner l'id toggle (avec getElementById) 

toggle.onclick = function(){  //j'indique que lorsque l'on clique sur l'id alors elle va démarrer une fonction 
  toggle.classList.toggle("active"); //elle va ajouter la classe active a mon id toggle


  body.forEach(slide => {   //je fais une fonction foreach pour qu'a chaques élément possédant la class back on ajoute la class active
    slide.classList.toggle("active");
  });

}

})

return {
  DarkMode,
  DarkButton
}

},


})
</script>


