function choose(flag){
d3.tsv("data.csv", function(error,data){
	data.forEach(function(d){
				d.sepalLength = +d.sepalLength;
				d.sepalWidth = +d.sepalWidth;
				d.petalLength = +d.petalLength;
				d.petalWidth = +d.petalWidth;
				d.species = d.species;
	});
	if(flag==1){
	function createTable(data, columns){
		var table = d3.select("body").append("table").attr("style","margin-left: 25%; margin-top: 20px;"); //Creating table

		var thead = table.append("thead");
		var tbody = table.append("tbody");

		thead.append("tr").selectAll("th").data(columns).enter().append("th").text(function(column){ return column;}) //Header row consists of all the column names which also form the header name values

		//Append all the rows now which are consistent with data
		var rows = tbody.selectAll("tr").data(data).enter().append("tr");


		//Append all the data cell values wrt to mathcing column and row
		var cell = rows.selectAll("td")
		.data(function(row){
			return columns.map(function(column){
				return {column : column, value: row[column]};
			});
		}).enter().append("td").attr("style", "font-family: Courier") // sets the font style
		.html(function(d) {
            	
            	return d.value; });

     
        return table;
 }
	var renderTable = createTable(data,["sepalLength","sepalWidth","petalLength","petalWidth","species"]); //Call the function with appropriate values
}


	else{
		 function createTable(data, columns){
    var table = d3.select("body").append("table").attr("style","margin-left: 25%; margin-top: 20px;"); //Creating table

    var thead = table.append("thead");
    var tbody = table.append("tbody");
    var sortAscending = true;
    thead.append("tr").selectAll("th").data(columns).enter().append("th").text(function(column){ return column;})
    .on('click', function(column) {
                           //headers.attr('class', 'header');

                           if (sortAscending) {
                  rows.sort(function(a, b) {return d3.ascending(b[column], a[column]);  });
                  sortAscending = false;
                  this.className = 'aes';
                } 
              else {
                  rows.sort(function(a, b) { return d3.descending(b[column], a[column]); });
                  sortAscending = true;
                  this.className = 'des';
                }

                       }); //Header row consists of all the column names which also form the header name values

    //Append all the rows now which are consistent with data
    var rows = tbody.selectAll("tr").data(data).enter().append("tr");


    //Append all the data cell values wrt to mathcing column and row
    var cell = rows.selectAll("td")
    .data(function(row){
      return columns.map(function(column){
        return {column : column, value: row[column]};
      });
    }).enter().append("td").attr("style", "font-family: Courier") // sets the font style
    .html(function(d) {
              
              return d.value; });

     
        return table;
 }
  var renderTable = createTable(data,["sepalLength","sepalWidth","petalLength","petalWidth","species"]); //Call the function with appropriate values
  if (sortAscending) {
    rows.sort(function(a, b) {return d3.ascending(b[d], a[d]);  });
    sortAscending = false;
    this.className = 'aes';
    } 
else {
    rows.sort(function(a, b) { return d3.descending(b[d], a[d]); });
    sortAscending = true;
    this.className = 'des';
    }

	}
});
}