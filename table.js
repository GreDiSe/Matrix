function create_table(mas) {
    d3.select("#myTable").attr("border","3");
    var tmp, start = 0;
    for(var i = 0; i < mas.length; i++) if(mas[i].count === 0) start = i + 1;
    for(i = 0; i < mas.length; i++)
    {
        tmp = 't' + i;
        d3.select("#myTable")
            .append("tr")
            .attr("id",tmp);
        d3.select('#' + tmp)
            .append("td")
            .text("x" + start + " --> x" + (Number(mas[i].num) + 1))
            .style("text-align", "center");
        d3.select('#' + tmp)
            .append("td")
            .text(mas[i].count)
            .style("text-align", "center");
    }
}
function re_create_table() {
    d3.select("#hereTable").select("#myTable").remove();
    d3.select("#hereTable").append("table").attr("id","myTable").attr("class","col-lg-4")
}