var options = {
    series: [{
    name: 'Servings',
    data: [44, 55, 41, 67, 22, 43,  31, 87,]
  }],
    annotations: {
    points: [{
      x: 'Bananas',
      seriesIndex: 0,
      label: {
        enabled:false,
        borderColor: '#775DD0',
        offsetY: 0,
        style: {
          color: '#fff',
          background: '#775DD0',
        },
        text: 'Bananas are good',
      }
    }]
  },
  chart: {
    height: 200,
    type: 'bar',
    toolbar: {
      show:false,
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 3,
      columnWidth: '50%',
    }
  },
  dataLabels: {
    enabled: false
  },
//   stroke: {
//     width: 0
//   },
//   grid: {
//     show:false,
//     row: {
//       colors: ['#fff', '#f2f2f2']
//     }
//   },
  xaxis: {
    labels: {
      rotate: -45,
      show:false,
    },
    categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
      'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
    ],
    tickPlacement: 'on'
  },
  yaxis: {
    show:false,
    title: {
      text: 'Servings',
      
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100]
    },
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
  chart.render();

  //line chart box-10//
  var options = {
    series: [
      {
        name: 'income',
        data: [16.8, 50 , 70.55, 60, 65, 40, 50]
      }, {
        name: 'expense',
        data: [16.5, 40, 60, 50, 55, 35, 40]
      }
    ],
    colors:['#1B55E2','#58BDFF'],
  
    chart: {
      type: "area",
      width: "100%",
      height: "100%",
      background: "#fff",
      dropShadow: {
        enabled: true,
        color: "#fff"
      },
      toolbar:{
        show:false
      },
      zoom: {
        enabled: false
      },
      
    },
    grid:{
      show:true,
      yaxis:{
        lines:{
          show:false
        }
      },
      xaxis:{
        lines:{
          show:true
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      colors: [ '#1B55E2','#58BDFF']
    },
    stroke: {
      curve: "smooth",
      width: 3,
      fill: {
        type: "solid",
        colors:[ '#1B55E2','#E7515A'],
  
      }
    },
    legend:{
      horizontalAlign: 'right',
      position: 'top'
  
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        type: "vertical",
        colorStops: [
          [
            {
              offset: 0,
              color: "red",
              opacity: 0.7
            },
            {
              offset: 70,
              color: "red",
              opacity: 0.5
            },
            {
              offset: 97,
              color: "red",
              opacity: 0
            }
          ]
        ]
      }
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
      ],
    },
    
     yaxis: {
        min:0,
     },
     
        fill: {
          opacity: 0,
        },
        
      }; 
  
  
  
  // // Initialize the chart with the data
  const achart = new ApexCharts(document.querySelector("#chart"), options);
  achart.render();
  
  //  pie chart box 6 

  
  var options = {
    series: [44, 55, 33],
    chart: {
    width: 220,
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    show:false,
    position: 'right',
    offsetY: 0,
    height: 230,
  }
  };

  var chart = new ApexCharts(document.querySelector("#piechart"), options);
  chart.render();


  function appendData() {
  var arr = chart.w.globals.series.slice()
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  return arr;
}

function removeData() {
  var arr = chart.w.globals.series.slice()
  arr.pop()
  return arr;
}

function randomize() {
  return chart.w.globals.series.map(function() {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1
  })
}
// radar charts box 13
var options = {
  series: [{
  name: 'Allocated Budget - $29,500.00 5.5% ',
  data: [100, 60, 20, 65, 40, 45],
}, {
  name: 'Actual Spending - $19,500.00 1.4%  ',
  data: [20, 30, 40, 80, 50, 80],
// }, {
//   name: 'Series 3',
//   data: [44, 76, 78, 13, 43, 10],
}],
  chart: {
  height: 400,
  type: 'radar',
  dropShadow: {
    enabled: true,
    blur: 1,
    left: 1,
    top: 1
  }
},
// title: {
//   // text: 'Radar Chart - Multi Series'
// },
stroke: {
  width: 2
},
fill: {
  opacity: 0.1
},
markers: {
  size: 0
},
yaxis: {
  stepSize: 20
},
xaxis: {
  categories: [, , , , , ]
}
};

var chart = new ApexCharts(document.querySelector("#radar-chart"), options);
chart.render();
// bar chart box 15
var options = {
  series: [{
  name: 'Net Profit',
  data: [44, 25, 57, 56, 61, 58, 63, 60,]
// }, {
//   name: 'Revenue',
//   data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
}, {
  name: 'Free Cash Flow',
  // data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
}],
  chart: {
  type: 'bar',
  height: 450
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '55%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',],
},
yaxis: {
  title: {
    text: '$ (thousands)'
  }
},
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#web-chart"), options);
chart.render();






 