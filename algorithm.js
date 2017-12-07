var NODE_ID;
var RESULT = []
function algorithmDijksta(mtr)
{
    var start = {i: START, count: 0};
    var tmp = start.i;
    var result = [];
    for(let i = 0; i < mtr.length; i++) result[result.length] = {num: i, back: false, count: 9999, enable: true}
    result[start.i].enable = false;
    while (checkEnable(result)){
        for(var i = 0; i < mtr.length; i++)
        {
            if(mtr[start.i][i] > 0){
                if(start.i === i) continue;
                if(result[i].count > mtr[start.i][i] + start.count){
                    result[i].num = i;
                    result[i].back = start.i;
                    result[i].count = mtr[start.i][i] + start.count;
                }
            }
        }
        let min = minCount(result);
        delCol(mtr, min.index);
        result[min.index].enable = false;
        start.i = min.index;
        start.count = min.value;
    }
    result[tmp].count = 0;
    for(i = 0; i < result.length; i++){
        if(result[i].count === 9999){
            result[i].count = "\u221E";
        }
    }
    RESULT = result;
    return result;
}
function findError(mtr) {
    var er1 = "Error, number less than 0";
    for(var i = 0; i < mtr.length; i++)
    {
        for(var j = 0; j < mtr.length; j++)
        {
            if(mtr[i][j] < 0) return er1;
        }
    }
}
function delCol(mtr, col) {
    for(var i = 0; i < mtr.length; i++)
    {
        mtr[i][col] = 0;
    }
}
function minCount(mas) {
    var min = {value: 99999, index: false };
    for(var i = 0; i < mas.length; i++){
        if(mas[i].count < min.value && mas[i].enable === true){
            min.value = mas[i].count;
            min.index = mas[i].num;
        }
    }
    return min;
}
function checkEnable(mas) {
    for(var i = 0; i < mas.length; i++)
    {
        if(mas[i].enable === true) return true;
    }
    return false;
}
function createRoad() {
    NODE_ID = Number(this.id[4]);
    var mtr = finalResult(fillMtr());
    create_graph(mtr);
}
function createFillLine() {
    var mas = RESULT;
    var start = NODE_ID;
    if(NODE_ID == undefined) return false;
    else if(mas[start].count == "\u221E") {
        alert("Невозможно проложить путь");
        return false;
    }
    var result = [];
    result[result.length] = start;
    while(mas[start].count !== 0){
        result[result.length] = mas[start].back;
        start = mas[start].back;
        if(mas[start].count == "\u221E") {
            alert("Невозможно проложить путь");
            return false;
        }
    }
    return result;
}

