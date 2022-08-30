<style lang="scss">
@import "@/assets/scss/style.scss"; 
</style>


<template>

              <canvas id="myChart"></canvas>

           

</template>


<script>

//components
import Chart from 'chart.js/auto';


export default {

       mounted(){
        console.log("ordi monté");

        const ctx = document.getElementById('myChart');
      
        const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet' , 'Aout', 'septembre', 'Octobre', 'Novembre' , 'Décembre'],
        datasets: [{
            label: 'Nombres de ventes',
            data: [50, 60, 42, 27, 35, 12,50 ,45,32,57,6,47],
            backgroundColor: [
                'rgba(115,128,236)',
        
            ],
            borderColor: [
                'rgba(115,128,236)',

   
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      aspectRatio: 10/2,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

myChart;
       }
}
</script>



