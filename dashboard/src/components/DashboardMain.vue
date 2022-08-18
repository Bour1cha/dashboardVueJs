<style lang="scss">
@import "@/assets/scss/style.scss"; 
</style>


<template>
<body>
    <div class= "container">
      <!-- Sidebar -->
      <x-sidebar/>
      <main>
          <h1>Dashboard</h1>
          <div class="date">
              <input type="date">
          </div>

          <div class="insights">
            <div class="sales">
              <span><font-awesome-icon icon="fa-solid fa-euro-sign" /></span>
                <div class="middle">
                    <div class="left">
                        <h3>Ventes Totales</h3>
                        <h1>25,003€</h1>
                    </div>
                    <div class="progress">
                      <svg>
                        <circle cx='38' cy='38' r='36'></circle>
                      </svg>
                      <div class="number">
                          <p>81%</p>
                      </div>
                    </div>
                </div>
                <small class="text-muted">Dernières 24 heures</small>
            </div>
            <div class="sales">
              <span><font-awesome-icon icon="fa-solid fa-chart-simple" /></span>
                <div class="middle">
                    <div class="left">
                        <h3>Frais Totales</h3>
                        <h1>14,203€</h1>
                    </div>
                    <div class="progress">
                      <svg>
                        <circle cx='38' cy='38' r='36'></circle>
                      </svg>
                      <div class="number">
                          <p>81%</p>
                      </div>
                    </div>
                </div>
                <small class="text-muted">Dernières 24 heures</small>
            </div>
            <div class="sales">
              <span><font-awesome-icon icon="fa-solid fa-arrow-trend-up" /></span>
                <div class="middle">
                    <div class="left">
                        <h3>Revenu Totales</h3>
                        <h1>10,603€</h1>
                    </div>
                    <div class="progress">
                      <svg>
                        <circle cx='38' cy='38' r='36'></circle>
                      </svg>
                      <div class="number">
                          <p>81%</p>
                      </div>
                    </div>
                </div>
                <small class="text-muted">Dernières 24 heures</small>
            </div>
          </div>
      </main>
    </div>
</body>
</template>


<script>
import XSidebar from './Sidebar.vue';

export default {

    components: { XSidebar }
}
</script>



