var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var body = document.getElementById('body');

function goToSite (){
    location.href = 'https://www.google.by/';
}

function editStyle(){
    if(body.style.backgroundColor == "white"){
        body.style.backgroundColor = "black";
        body.style.justifyContent = "center";
        btn1.style.backgroundColor = "white";
        btn1.style.color = "black";
        btn2.style.backgroundColor = "white";
        btn2.style.color = "black";
        btn3.style.backgroundColor = "white";
        btn3.style.color = "black";
    } else{
        body.style.backgroundColor = "white";
        body.style.justifyContent = "space-around";
        btn1.style.backgroundColor = "black";
        btn1.style.color = "white";
        btn2.style.backgroundColor = "black";
        btn2.style.color = "white";
        btn3.style.backgroundColor = "black";
        btn3.style.color = "white";
    }
};

function deleteAll(){
    document.body.innerHTML = "";
    confirm('Всё пропало!');
}

var term = {
    Canada:10,
    Germany:13,
    Spain:22,
    Russia:55
}

function averageTerm(){
    let sum = 0;
    let number = 0;
    for (temp in term){
        sum += term[temp];
        number ++;
    }
    let averageValue = sum/number;
    alert("Средняя температура :" + averageValue);
}

function maxTerm(){
    max = 0;
    for (temp in term){
        if (max < term[temp]){
            max = term[temp];
        };
    };
    alert("Максимальная температура :" + max);
}

averageTerm();
maxTerm();