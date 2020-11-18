var chart = c3.generate({
  bindto: '#genreByDecadeChart',
  data: {
    x: 'x',
    columns: [
      ['x', 1990, 2000, 2010],
      ['Funk/R&B', 1, 1, 0],
      ['Hip-hop', 3, 5, 10],
      ['Pop', 0, 2, 2],
      ['Rock', 3, 7, 3],
    ]
  },
  color: {
    pattern: ['#2a8dc5', '#455380', '#ee6a4b', '#60c4b2', '#973895']
  }
});

var barchart = c3.generate({
    bindto: '#arrestchart',
    data: {
        columns: [
            ['United States', 120],
            ['Montgomery County Public Schools', 194],
            ['State of Maryland', 308],
            ['Prince George\'s County Public Schools', 413]
        ],
        type: 'bar',
        labels: true
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    color: {
      pattern: ['#2a8dc5', '#455380', '#ee6a4b', '#60c4b2']
    }
});

var barchart2 = c3.generate({
    bindto: '#mocoSuspensionChart',
    data: {
        columns: [
            ['Black or African American', 43.9],
            ['Hispanic or Latino', 30.6],
            ['White', 6.1],
            ['Asian', 5.3],
            ['All other races', 3.8]
        ],
        type: 'bar',
        labels: true
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    color: {
      pattern: ['#2a8dc5', '#455380', '#ee6a4b', '#60c4b2', '#973895', '#fae255']
    }
});

var barchart3 = c3.generate({
    bindto: '#pgSuspensionChart',
    data: {
        columns: [
            ['Black or African American', 72.1],
            ['Hispanic or Latino', 23.6],
            ['White', 2.2],
            ['Asian', 0.2],
            ['All other races', 1.8]
        ],
        type: 'bar',
        labels: true
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    color: {
      pattern: ['#2a8dc5', '#455380', '#ee6a4b', '#60c4b2', '#973895', '#fae255']
    }
});

var piechart1 = c3.generate({
  bindto: '#mocoDemoChart',
  data: {
    // iris data from R
    columns: [
      ['White', 28.3],
      ['Hispanic or Latino', 32.3],
      ['Black or African American', 21.4],
      ['Asian', 14.4],
      ['All others', 3.6]
    ],
    type : 'pie',
    onclick: function (d, i) { console.log("onclick", d, i); },
    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  color: {
    pattern: ['#2a8dc5', '#455380', '#ee6a4b', '#60c4b2', '#973895', '#fae255']
  }
});

var piechart2 = c3.generate({
  bindto: '#pgDemoChart',
  data: {
    // iris data from R
    columns: [
      ['Black or African American', 55],
      ['Hispanic or Latino', 36],
      ['White', 4],
      ['Asian', 3],
      ['All others', 2]
    ],
    type : 'pie',
    onclick: function (d, i) { console.log("onclick", d, i); },
    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  color: {
    pattern: ['#2a8dc5', '#455380', '#ee6a4b', '#60c4b2', '#973895', '#fae255']
  }
});
