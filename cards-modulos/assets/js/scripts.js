var options = {
    series: [{
    name: 'Altas',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Servicios',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Título provisional'
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  yaxis: [{
    title: {
      text: 'Altas',
    },
  
  }, {
    opposite: true,
    title: {
      text: 'Servicios'
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();