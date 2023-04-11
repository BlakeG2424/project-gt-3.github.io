// let trace1 = {
//     x: xData,
//     y: yData
//   };
  
//   let data = [trace1];
  
//   let layout = {
//     title: "U.S. versus Canada Debt GDP"
//   };
  
//   Plotly.newPlot("plot", data, layout);
  // Initialized arrays
let date = []
let canada_ratio = []
let us_ratio = []

let filePath = 'ratio_output.json';
  try {
    fetch(filePath)
      .then(response => response.json())
      .then(json => {
        Object.entries(json).forEach((entry) => {
          const [key, value] = entry;
          date.push(key);
          canada_ratio.push(value.canada_ratio);
          us_ratio.push(value.usa_ratio);
        });
        console.log('Date: ' + date.toString());
        console.log('Canada Ratio: ' + canada_ratio.toString());
        console.log('US Ratio: ' + us_ratio.toString());

        // Trace1 for the Canada Data
        let trace1 = {
          x: date,
          y: canada_ratio,
          name: "Canada",
          type: "lines+markers",
          line: {
            width: 3
          }
        };

        // Trace 2 for the USA Data
        let trace2 = {
          x: date,
          y: us_ratio,
          name: "United States",
          type: "lines+markers",
          line: {
            width: 3
          }
        };

        // Create data array
        let data = [trace1, trace2];

        // Apply a title to the layout
        let layout = {
          barmode: "group",
          // Include margins in the layout so the x-tick labels display correctly
          margin: {
            l: 50,
            r: 50,
            b: 200,
            t: 50,
            pad: 4
          }
        };

        // Render the plot to the div tag with id "plot"
        Plotly.newPlot("plot", data, layout);
      })
  } catch (error) {
    console.log(error);
  }
