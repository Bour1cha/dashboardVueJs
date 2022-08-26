<template>
                <div class="item " >
              <div class="icon">
                <span><font-awesome-icon :icon="`fa-solid fa-${info_analyses.logo}`" /></span>
              </div>
              <div class="right">
                      <div class="info">
                          <h3>{{ info_analyses.statut }}</h3>
                          <small class="text-muted">{{ info_analyses.date }}</small>
                      </div>
                      <h5 class="success"> {{ info_analyses.pourcentage }}</h5>
                      <h3>{{ info_analyses.nombres }}</h3>
              </div>
            </div>

</template>

<script>
export default {
  name: 'SalesCard',
  props: {
    info_analyses: Object
  }
}
</script>