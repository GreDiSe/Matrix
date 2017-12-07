var vis = d3.select("#graph")
    .append("svg")
    .attr("width", 400).attr("height", 400);
var nodes = [];
var size = 0;
var links = [];
function re_create_graph() { //Функция создания графа
    vis = d3.select("#graph")
        .append("svg")
        .attr("width", 400).attr("height", 400);
}
function del_graph() { //функция удаление графа
    d3.select("#graph").select("svg").remove();
}
function create_nodes() { //Функция для создание узлов
    vis.selectAll("circle.nodes")
        .data(nodes)
        .enter()
        .append("svg:circle")
        .attr("cx", function (d) {
            return d.x;
        })
        .attr("onclick", "test")
        .attr("cy", function (d) {
            return d.y;
        })
        .attr("id", function (d) {
            return d.id;
        })
        .attr("r", "8px")
        .on("mouseover", createRoad);
}
function create_text() { //функция подписи вершин
    vis.selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .attr("x", function(d) {return d.name_x})
        .attr("y", function(d) {return d.name_y})
        .text( function(d) {return d.num});
}
function host_circle(kol1){ //функция создает координаты вершин
    nodes = [];
    var a,b,z = 0;
    var angel = 360 / kol1;
    var x,y;
    for(var i = 0; i < kol1; i++)
    {
        a = Math.cos(z/180*Math.PI);
        b = Math.sin(z/180*Math.PI);
        x = 200 + a*150;
        y = 200 - b*150;
        nodes[i] = {
            x: x,
            y: y,
            num: "x"+(i+1),
            name_x: 193+ a*170,
            name_y: 205 - b*170,
            circle_x: 200 + a*170,
            circle_y: 200 - b*170,
            id: "node" + i
        };
        z = z + angel;
    }
}
function create_arrow(arrow) { //создание стрелок
    if(!arrow)
    {
        vis.append("svg:defs")
            .append("svg:marker")
            .attr("id","Triangle")
            .attr("viewBox","0 0 10 10")
            .attr("refX",12)
            .attr("refY",5)
            .attr("markerWidth",6)
            .attr("markerHeight", 6)
            .attr("orient","auto")
            .append("svg:path")
            .attr("d","M 0 0 L 10 5 L 0 10 z");
    }
    vis.selectAll(".line") //создание линий
        .data(links)
        .enter()
        .append("svg:line")
        .attr("x1", function(d) { return d.source.x })
        .attr("y1", function(d) { return d.source.y })
        .attr("x2", function(d) { return d.target.x })
        .attr("y2", function(d) { return d.target.y })
        .attr("fill","none")
        .attr("stroke","black")
        .attr("stroke-width",function (d) { return d.stroke})
        .attr("stroke-dasharray", function (d) { return d.style})
        .attr("marker-end","url(#Triangle)");
}
function matrix(mtr){ //Заполняем массив связей
    var size = mtr.length;
    host_circle(size); //Создает узлы
    links = [];
    var k = 0;
    for(var i = 0; i < size; i++)
    {
        for(var j = 0; j < size; j++)
        {
            if(mtr[i][j].value > 0)
            {
                links[k] = {
                    source: nodes[i],
                    target: nodes[j],
                    style: mtr[i][j].style,
                    text: {x:(nodes[i].x + nodes[j].x)/2, y:(nodes[i].y + nodes[j].y)/2},
                    stroke: mtr[i][j].stroke
                };
                k++;
            }
        }
    }
}
function create_circle(circle) {

    for(var i = 0; i < circle.length; i++)
    {
        vis.append("svg:circle")
            .attr("fill","none")
            .attr("stroke","black")
            .attr("stroke-width","2")
            .attr("stroke-dasharray", "5")
            .attr("cx", nodes[circle[i]].circle_x)
            .attr("cy", nodes[circle[i]].circle_y)
            .attr("r", 20);
    }
}