<template>
      <div class="sales-analytics">
            <h2>Analyse des ventes</h2>
                        <div class="item  online ">
              <div class="icon">
                <span><font-awesome-icon icon="fa-solid fa-cart-shopping" /></span>
              </div>
              <div class="right">
                      <div class="info">
                          <h3>Commandes en lignes</h3>
                          <small class="text-muted">dernières 24 heures</small>
                      </div>
                      <h5 class="success">+39%</h5>
                      <h3>3849</h3>
              </div>
            </div>
            <div class="item offline" id="offline">
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
            <div class="item customers" id="customers">
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
export default {
  name: 'SalesAnalyst',
}
</script>