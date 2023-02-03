// import the data from data.js
const tableData = data;

// Refernce the html table
var tbody = d3.select("tbody");

// Build table data
function buildTable(data) {
    //clear any existing data
    tbody.html("");
  
    //loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      //loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }
  // handleClick
  function handleClick() {
    // get datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // check if a date was entered and filter the
    // data using date
    if (date) {
      // apply `filter` to table data to only keep
      // rows where the `datetime` matches filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // no date entered will leave
    // the original tableData.
    buildTable(filteredData);
  };
  // attach event to form button
  d3.selectAll("#filter-btn").on("click", handleClick);

  // buildtable on page
  buildTable(tableData);