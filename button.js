function numVertices1(btn) {
    var text = btn.textContent;
    if(Number(text) === 9)
    {
        alert("Error, too many number"); return;
    }
    text = Number(text) + 1;
    btn.innerHTML=(text);
}
function numVertices0(btn) {
    var text = btn.textContent;
    if(Number(text) === 3)
    {
        alert("Error, too small number"); return;
    }
    text = Number(text) - 1;
    btn.innerHTML=(text);
}
function add_xn(index, width, id) {
    d3.select("#btns").append("div")
        .attr("class", "btn btn-success")
        .attr("id", id)
        .attr("onclick","setStart(this)")
        .style("width", width + "%")
        .style("height", width + "%")
        .style("vertical-align", "middle")
        .style("font-size", "17px")
        .text('x' + index);
}
function add0(index,width) {
    d3.select("#btns").append("div")
        .attr("class", "btn btn-warning")
        .attr("onclick", "setBtnText1(this)")
        .attr("oncontextmenu","setBtnText0(this); return false")
        .attr("id", index)
        .style("width", width + "%")
        .style("height", width + "%")
        .style("vertical-align", "middle")
        .style("font-size", "17px")
        .text(0);
}
function del_but() {
    for(var i = 0; i < 250; i++)
    {
        d3.select("#btns").select("div").remove();
    }
}
function setBtnText1(btn) {
    var id = btn.id;
    var text = document.getElementById(id).textContent;
    if(text == -1) document.getElementById(id).className="btn btn-warning"
    else document.getElementById(id).className="btn btn-danger";
    text = Number(text) + 1;
    document.getElementById(id).innerHTML=(text);
}
function setBtnText0(btn) {
    var id = btn.id;
    var text = document.getElementById(id).textContent;
    if(text == 1) document.getElementById(id).className="btn btn-warning"
    else document.getElementById(id).className="btn btn-danger";
    text = Number(text) - 1;
    document.getElementById(id).innerHTML=(text);
}