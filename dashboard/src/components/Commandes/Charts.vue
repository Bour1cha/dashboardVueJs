<template>


    <div class="recent-charts">
                  <h2>Graphique des commandes récentes</h2>
                  <!-- <table> permet de représenter un tableau de données, c'est-à-dire des informations exprimées sur un tableau en deux dimensions. -->
                  <table class="back">
                      <div class="x-box"></div>
                      <div class="x-box-cont"> 
                      </div>
                    <h1>Statut des commandes</h1>
                      <strong>Terminés : <p>50%</p></strong>
                        <strong >En attentes : <p>12 %</p></strong>
                         <strong>refusés : <p>38%</p></strong>
                  </table>

                </div>
                
                </template>


                
<script>
export default {
  name: 'RecentCharts',
}
</script>