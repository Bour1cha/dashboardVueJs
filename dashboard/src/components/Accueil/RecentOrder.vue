<template>


    <div class="recent-orders">
                  <h2>Commandes récentes</h2>
                  <!-- <table> permet de représenter un tableau de données, c'est-à-dire des informations exprimées sur un tableau en deux dimensions. -->
                  <table class="back">
                    <!-- <thead> définit un ensemble de lignes qui définit l'en-tête des colonnes d'un tableau. -->
                        <thead>
                          <!-- <tr> définit une ligne de cellules dans un tableau. -->
                          <tr>
                            <!-- <th> définit une cellule d'un tableau comme une cellule d'en-tête pour un groupe de cellule.  -->
                            <th>Nom du Produit</th>
                            <th>Numéro du Produit</th>
                            <th>Paiement</th>
                            <th>Statut</th>
                            <th></th>
                          </tr>
                        </thead>
                        <!-- <tbody> permet de regrouper un ou plusieurs éléments <tr> afin de former le corps d'un tableau HTML -->
                        <tbody>
                            <tr>
                              <!-- <td> définit une cellule d'un tableau qui contient des données. -->
                              <td>Support ordinateur portable</td>
                              <td>795423</td>
                              <td>Non reçu</td>
                              <td class="warning">En attente</td>
                              <td class="primary">Details</td>
                            </tr>
                            <tr>
                              <td>Montre connectée</td>
                              <td>795424</td>
                              <td>payé</td>
                              <td class="success">Terminé</td>
                              <td class="primary">Details</td>
                            </tr>
                            <tr>
                              <td>Support ordinateur portable</td>
                              <td>795425</td>
                              <td>payé</td>
                              <td class="success">Terminé</td>
                              <td class="primary">Details</td>
                            </tr>
                            <tr>
                              <td>Tablette tactile</td>
                              <td>795426</td>
                              <td>payé</td>
                              <td class="success">Terminé</td>
                              <td class="primary">Details</td>
                            </tr>
                            <tr>
                              <td>Support ordinateur portable</td>
                              <td>795427</td>
                              <td>Non reçu</td>
                              <td class="warning">En attente</td>
                              <td class="primary">Details</td>
                            </tr>
                            <tr>
                              <td>Support ordinateur portable</td>
                              <td>795428</td>
                              <td>Non reçu</td>
                              <td class="warning">En attente</td>
                              <td class="primary">Details</td>
                            </tr>
                            <tr>
                              <td>Support ordinateur portable</td>
                              <td>795429</td>
                              <td>Non reçu</td>
                              <td class="warning">En attente</td>
                              <td class="primary">Details</td>
                            </tr>
                            <tr>
                              <td>Support ordinateur portable</td>
                              <td>795430</td>
                              <td>Non reçu</td>
                              <td class="warning">En attente</td>
                              <td class="primary">Details</td>
                            </tr>
                            <tr>
                              <td>Support ordinateur portable</td>
                              <td>795431</td>
                              <td>Non reçu</td>
                              <td class="warning">En attente</td>
                              <td class="primary">Details</td>
                            </tr>
                            <tr>
                              <td>Support ordinateur portable</td>
                              <td>795432</td>
                              <td>Non reçu</td>
                              <td class="warning">En attente</td>
                              <td class="primary">Details</td>
                            </tr>
                        </tbody>
                  </table>
                  <a href="#">Voir tout</a>
                </div>
                
                </template>


                
<script>
export default {
  name: 'RecentOrder',
}
</script>