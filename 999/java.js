var obj = {};

function f(u){
    var n = prompt("введите число от \"0 до 999\"");

    if(n < 0 || n >999){
        console.log("не корректное число");
    }else{
        switch (n.length){
            case 1:
                obj.ed = n[0];
                break;
            case 2:
                obj.des = n[0];
                obj.ed = n[1];
                break;
            case 3:
                obj.sot = n[0];
                obj.des = n[1];
                obj.ed = n[2];
                break;
        }
    }
    return obj;
};

console.log(f(obj));