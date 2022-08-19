<template>
          <div class="top">
            <button id="menu-btn">
              <span><font-awesome-icon icon="fa-solid fa-bars" /></span>
            </button>
            <div class="theme-toggler">
                 <span class="active"><font-awesome-icon icon="fa-solid fa-sun" class="active" /></span>
                <span><font-awesome-icon icon="fa-solid fa-moon" /></span>
            </div>
            <div class="profile">
                <div class="info">
                    <p>Bonjour, <b>Utilisateur 1</b></p>
                    <small class="text-muted">Admin</small>
                </div>
                <div class="profile-photo">
                    <img src="@/assets/img/profile-1.jpg" alt="profile_1">
                </div>
            </div>
          </div>

</template>


<script>

import {defineComponent, ref,  nextTick} from 'vue'

export default defineComponent({
  name: 'TopPart',


setup() {

// darkmode
const darkMode = ref(false)
const lightButton = () => darkMode.value = !darkMode.value


nextTick(() => {

const themeToggler = document.querySelector(".theme-toggler");

console.log({themeToggler})

// change theme

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');

  themeToggler.querySelector('font-awesome-icon:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('font-awesome-icon:nth-child(2)').classList.toggle('active');
})

})

return {
  darkMode,
  lightButton
}

},


})
</script>
