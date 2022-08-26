<template>

          <div class="recent-updates ">
              <h2>Mises à jour récentes</h2>
              <div class="updates back">
                  <RecentUpdatesCard v-for="(card,index) in tree_comments" :info_comments="card" :key="index"/>
              </div>
          </div>

</template>

<script>
//component
import RecentUpdatesCard from './RecentUpdatesCard.vue';


export default {
    name: "RecentUpdates",
     props: {
        tree_comments: Array,
    },
    components: { RecentUpdatesCard }, 
    
}
</script>