var regions = ["Americas", "APAC ", "EMEA"];
var filters = false;
var somefilters = {'Region': ['Americas','EMEA','APAC ']}

var tabulate = function (data,columns) {
  var table = d3.select('#container').append('table')
    var thead = table.append('thead')
    var tbody = table.append('tbody')

    thead.append('tr')
      .selectAll('th')
        .data(columns)
        .enter()
      .append('th')
        .text(function (d) { return d })

    //draw the rows; checks to see if filters should be applied
    if (filters) {
        var rows = tbody.selectAll('tr')
            .data(data.filter(function(entry) {

            }))
            .enter()
          .append('tr')
    } else {
        var rows = tbody.selectAll('tr')
            .data(data)
            .enter()
          .append('tr')
    }

    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function (column) {
                return { column: column, value: row[column] }
          })
      })
      .enter()
    .append('td')
      .text(function (d) { return d.value })

  return table;
}

d3.csv('ma-database-dash.csv',function (data) {
    var columns = ['Quarter', 'DailyNewsDate', 'Effective / Expected Close Date of Acquisition ','Region','Acquirer','HQ_Aquirer_Country', 'HQ_Acquirer_State','Target', 'Target', 'Target_Segment', 'WFS', 'Price', 'Hyperlink']
  tabulate(data,columns)
});

//write function to add a filter
//filter object
//list of filters
//methods to add filter and remove

d3.csv('ma-database-dash.csv', function(data) {
    console.log(data);
})