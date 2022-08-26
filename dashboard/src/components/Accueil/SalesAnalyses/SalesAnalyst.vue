<template>
      <div class="sales-analytics">
            <h2>Analyse des ventes</h2>
              <SalesCard v-for="(card,index) in tree_analyses" :info_analyses="card" :key="index"/>
            <div class="item " id="offline">
              <div class="icon">
                <span><font-awesome-icon icon="fa-solid fa-bag-shopping" /></span>
              </div>
              <div class="right">
                      <div class="info">
                          <h3>Commandes hors lignes</h3>
                          <small class="text-muted">dernières 24 heures</small>
                      </div>
                      <h5 class="hard-danger">-17%</h5>
                      <h3>1100</h3>
              </div>
            </div>
            <div class="item " id="customers">
              <div class="icon">
                <span><font-awesome-icon icon="fa-solid fa-user" /></span>
              </div>
              <div class="right">
                      <div class="info">
                          <h3>Nouveaux clients</h3>
                          <small class="text-muted">dernières 24 heures</small>
                      </div>
                      <h5 class="success">+25%</h5>
                      <h3>849</h3>
              </div>
            </div>
            <div class="item add-product">
                <div>
                     <span><font-awesome-icon icon="fa-solid fa-plus" /></span>
                     <h3>Ajouter un Produit</h3>
                </div>
            </div>
          </div>
</template>

<script>
//components
import SalesCard from './SalesCard.vue';

export default {
    name: "SalesAnalyst",
    props: {
        tree_analyses: Array,
    },
    components: { SalesCard }
}
</script>