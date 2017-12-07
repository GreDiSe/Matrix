var START = 0;
function fillMtr() {
    var size = document.getElementById("btn-Vertex").textContent;
    size = Number(size);
    var mtr = [];
    var text, id  = 0;
    for(var i = 0; i < size; i++)
    {
        mtr[i] = [];
        for(var j = 0; j < size; j++)
        {
            text = document.getElementById(String(id)).textContent;
            if(Number(text) < 0 )
            {
                alert("Что-то пошло не так");
                return;
            }
            id++;
            mtr[i][j] = Number(text);
        }
    }
    return mtr;
}
function delCircle(mtr) {
    var result = [];
    for(var i = 0; i < mtr.length; i++)
    {
        if(mtr[i][i].value > 0) result[result.length] = i;
        mtr[i][i].value = 0;
    }
    return result;
}
function finalResult(mtr) {
    var mas = createFillLine();
    var result = [];
    var tmp = 0;
    for(var j = 0; j < mtr.length; j++)
    {
        result[j] = [];
        for(var  k = 0; k < mtr.length; k++)
        {
            tmp = mtr[j][k];
            result[j][k] = {};
            result[j][k] = {value: tmp, style: "5 10", stroke: "2"};
        }
    }
    for(var i = 0; i < mas.length - 1; i++){
        result[mas[i+1]][mas[i]].style = "none";
        result[mas[i+1]][mas[i]].stroke = "3";
    }
    return result;
}
function basStart() {
    var size = document.getElementById("btn-Vertex").textContent;
    size = Number(size);
    document.getElementById("X" + (size + 1)).className = "btn btn-danger";
}
function setStart(btn) {
    NODE_ID = undefined;
    var clearBtn, tmp;
    var size = document.getElementById("btn-Vertex").textContent;
    size = Number(size);
    for(var i = 0; i <= 2 * size; i++)
    {
        tmp = "X" + i;
        clearBtn = document.getElementById(tmp);
        clearBtn.className = "btn btn-success";
    }
    var text = btn.textContent;
    if(Number(text[1]) === 0) {
        alert("Error");
        return;
    }
    btn.className="btn btn-danger";
    START  = (Number(text[1]) - 1);
}
function chechArrowOrLine(mtr) {
    for(var i = 0; i < mtr.length; i++){
        for(var j = 0; j < mtr.length; j++){
            if(mtr[i][j] !== mtr[j][i]) return false;
        }
    }
    return true;
}
