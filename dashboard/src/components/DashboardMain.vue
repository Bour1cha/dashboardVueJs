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
          <!-- Statistiques -->
                <Insights/>
                <RecentOrder/>
  
      </main>
    </div>
</body>
</template>


<script>
import XSidebar from './Sidebar.vue';
import Insights from './Insights.vue';
import RecentOrder from './RecentOrder.vue';

export default {

    components: { XSidebar, Insights, RecentOrder }
}
</script>



