!function() {

   var operation = d3.select('body').append('div').append('h2');

   data = 
      [  
        {  
          "key":"Nokia Smartphone",
          "values":[  
            {  "axis":"Battery Life", "value":0.26 }, {  "axis":"Brand", "value":0.10 },
            {  "axis":"Contract Cost", "value":0.30 }, {  "axis":"Design And Quality", "value":0.14 },
            {  "axis":"Have Internet Connectivity", "value":0.22 }, {  "axis":"Large Screen", "value":0.04 },
            {  "axis":"Price Of Device", "value":0.41 }, {  "axis":"To Be A Smartphone", "value":0.30 }
          ]
        },
        {  
          "key":"Samsung",
          "values":[  
            {  "axis":"Battery Life", "value":0.27 }, {  "axis":"Brand", "value":0.16 },
            {  "axis":"Contract Cost", "value":0.35 }, {  "axis":"Design And Quality", "value":0.13 },
            {  "axis":"Have Internet Connectivity", "value":0.20 }, {  "axis":"Large Screen", "value":0.13 },
            {  "axis":"Price Of Device", "value":0.35 }, {  "axis":"To Be A Smartphone", "value":0.38 }
          ]
        },
        {  
          "key":"iPhone",
          "values":[  
            {  "axis":"Battery Life", "value":0.22 }, {  "axis":"Brand", "value":0.28 },
            {  "axis":"Contract Cost", "value":0.29 }, {  "axis":"Design And Quality", "value":0.17 },
            {  "axis":"Have Internet Connectivity", "value":0.22 }, {  "axis":"Large Screen", "value":0.02 },
            {  "axis":"Price Of Device", "value":0.21 }, {  "axis":"To Be A Smartphone", "value":0.50 }
          ]
        }
      ];

   setTimeout(function() { 
      operation.text(' radarChart.data(data).duration(1000).update(); ');
      radarChart.data(data).duration(1000).update();
   }, 200);
   
   setTimeout(function() { 
      operation.html(" radarChart.options({'legend': {display: true}}); <br> radarChart.colors({'iPhone': 'blue', 'Samsung': 'red', 'Nokia Smartphone': 'yellow'}).update(); ");
      radarChart.options({'legend': {display: true}});
      radarChart.colors({'iPhone': 'blue', 'Samsung': 'red', 'Nokia Smartphone': 'yellow'}).update();
   }, 4000);
   
   setTimeout(function() { 
      operation.html(" radarChart.filterAxes(7); <br> radarChart.options({circles: {maxValue: 1, levels: 4}}).update(); ");
      radarChart.filterAxes(7);
      radarChart.options({circles: {maxValue: 1, levels: 4}}).update();
   }, 8000);
   
   setTimeout(function() { 
      operation.text(" radarChart.maxValue(.5).levels(7).update(); ");
      radarChart.maxValue(.5).levels(7).update();
   }, 12000);
   
   setTimeout(function() { 
      operation.text(" radarChart.invert(4).update(); ");
      radarChart.invert(4).update();
   }, 16000);

   setTimeout(function() { 
      operation.text(" radarChart.ranges({'Contract Cost': [-1, 2]}).update(); ");
      radarChart.ranges({'Contract Cost': [-1, 2]}).update();
   }, 20000);

   setTimeout(function() { 
      operation.html(" data.forEach(function(e) { e.values.forEach(function(v) { v.value = (Math.random() * .6) + .2; }) })<br> radarChart.data(data).update(); ");
      chart_data = JSON.parse(JSON.stringify(data));
      chart_data.forEach(function(e) { e.values.forEach(function(v) { v.value = (Math.random() * .6) + .2; }) })
      radarChart.data(chart_data).update();
   }, 24000);

   setTimeout(function() { 
      operation.html(" var one = radarChart.slice(1, 2); <br> radarChart.data(one).update(); ");
      var one = radarChart.slice(1, 2);
      radarChart.data(one).update();
   }, 28000);

   setTimeout(function() { 
      operation.html(" radarChart.ranges({'Contract Cost': []}).invert(4); <br> radarChart.data(data).update(); ");
      radarChart.ranges({'Contract Cost': []}).invert(4);
      radarChart.data(data).update();
   }, 32000);

   setTimeout(function() { 
      operation.html(" radarChart.options({circles: {fill: 'violet'}}); <br> radarChart.options({axes: {lineColor: 'lightyellow'}}); <br> radarChart.options({circles: {color: '#FF99CC'}}); <br> radarChart.colors({'iPhone': 'black', 'Samsung': 'green', 'Nokia Smartphone': 'purple'}); ");
      radarChart.options({circles: {fill: 'violet', color: '#FF99CC'}});
      radarChart.options({axes: {lineColor: "lightyellow"}});
      radarChart.colors({'iPhone': 'black', 'Samsung': 'green', 'Nokia Smartphone': 'purple'});
      radarChart.update();
   }, 36000);

   setTimeout(function() { 
      operation.text(" radarChart.options({circles: {maxValue: 1, levels: 3}, legend: {symbol: 'circle'}, filter: false}).update(); ");
      radarChart.options({circles: {maxValue: 1, levels: 3}, legendSymbol: 'circle', filter: false}).update();
   }, 40000);

   setTimeout(function() { 
      operation.text(" radarChart.height(300).width(300).options({'areas': {'dotRadius': 2}}).update(); ");
      radarChart.height(300).width(300).options({'areas': {'dotRadius': 2}}).update();
   }, 44000);

   setTimeout(function() { 
      operation.text(" radarChart.height(500).width(500).options({'areas': {'dotRadius': 4}}).update(); ");
      radarChart.height(600).width(600).options({'areas': {'dotRadius': 4}}).update();
   }, 48000);

   setTimeout(function() { 
      operation.html(" radarChart.options({circles: {fill: '#CDCDCD', color: '#CDCDCD'}}); <br> radarChart.options({filter: 'rc_glow'}); <br> radarChart.colors({}).data(data).update(); <br> radarChart.maxValue(.5).levels(7).filterAxes(7);");
      radarChart.options({circles: {fill: '#CDCDCD', color: '#CDCDCD'}});
      radarChart.options({filter: 'rc_glow'});
      radarChart.maxValue(.5).levels(7).filterAxes(7);
      radarChart.colors({}).data(data).update();
   }, 52000);

}();
