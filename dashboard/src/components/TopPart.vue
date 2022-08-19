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
export default {
  name: 'TopPart',
}
</script>