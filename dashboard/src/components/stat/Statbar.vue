<template>


    <div class="recent-bar">
                  <h2>Histogramme</h2>
                  <!-- <table> permet de représenter un tableau de données, c'est-à-dire des informations exprimées sur un tableau en deux dimensions. -->
                  <table class="back">
                        <h1>Age</h1>
                      <div class="stat-container">
                          
                                <div class="stats">
                                  <div class="stats__item">
                                      <span class="stats__percentage">27.5%</span>
                                      <div class="stats__bar"></div>
                                      <span>18-24</span>
                                  </div>
                              </div>
                         
                                <div class="stats">
                                  <div class="stats__item">
                                      <span class="stats__percentage">33.5%</span>
                                      <div class="stats__bar"></div>
                                      <span>25-34</span>
                                  </div>
                              </div>
                         
                 
                          <div class="stats">
                              <div class="stats__item">
                                  <span class="stats__percentage">15.5%</span>
                                  <div class="stats__bar"></div>
                                  <span>35-44</span>
                              </div>
                          </div>
                
                
                          <div class="stats">
                              <div class="stats__item">
                                  <span class="stats__percentage">12.5%</span>
                                  <div class="stats__bar"></div>
                                  <span>45-54</span>
                              </div>
                          </div>
                  
                   
                          <div class="stats">
                              <div class="stats__item">
                                  <span class="stats__percentage">5.5%</span>
                                  <div class="stats__bar"></div>
                                  <span>65+</span>
                              </div>
                          </div>
                        </div>
          -
                    
                      <span class="lowerText">100% du total des clients</span>
                 
                  </table>

                </div>
                
                </template>


                
<script>
export default {
  name: 'Statbar',
}
</script>