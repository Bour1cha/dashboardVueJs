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

      <div class="right">
          <TopPart/>
          <RecentUpdates/>
        <SalesAnalyst/>
      </div>
    </div>
</body>
</template>


<script>
import XSidebar from './Sidebar.vue';
import Insights from './Insights.vue';
import RecentOrder from './RecentOrder.vue';
import RecentUpdates from './RecentUpdates.vue';
import TopPart from './TopPart.vue';
import SalesAnalyst from './SalesAnalyst.vue';

export default {

    components: { XSidebar, Insights, RecentOrder, RecentUpdates, TopPart, SalesAnalyst }
}
</script>



