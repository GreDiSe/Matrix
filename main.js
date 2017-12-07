function main()
{
    NODE_ID = undefined;
    var mtr = fillMtr();
    if(findError(mtr))
    {
        alert(findError(mtr));
        return;
    }
    var result = algorithmDijksta(mtr);
    var line = chechArrowOrLine(fillMtr());
    mtr = finalResult(fillMtr(), result);
    create_graph(mtr, line);
    re_create_table();
    create_table(result);
}
function createBtnMtr() {
    del_graph();
    re_create_graph();
    re_create_table();
    del_but();
    var number = document.getElementById("btn-Vertex").textContent;
    number = Number(number);
    var total_number = number + 1;
    var Xid = 0;

    var kol_btn = total_number * total_number;
    var a = 100/(total_number) - 0.5; //Ширина кнопки
    var id = 0, xn = 0;

    for(var i = 0; i < kol_btn; i++)
    {
        if(i < total_number || i % total_number == 0)
        {
            if(xn >= total_number)
            {
                xn = 1;
            }
            add_xn(xn,a , "X" + Xid); //Добавляем кнопки с надписью x1,x2,x2...
            Xid++;
            xn++;
        }
        else
        {
            add0(id,a); //Добавляет кнопки с надписью 0
            id++;
        }
    }

    basStart();
}
function create_graph(fake_mtr, arrow) {
    var circle = delCircle(fake_mtr);
    del_graph(); //Удаляет граф
    re_create_graph(); //создает новый
    matrix(fake_mtr); //Заполняем массив связей
    create_text(); //Создает текс возле узлов
    create_arrow(arrow); //Создает линии / стрелки
    create_circle(circle);
    create_nodes(); //Создает узлы
}