// 获取所有.item元素
let items=document.querySelectorAll(".item");
// 设置当前选中项样式的方法
function setActive(){
    // 遍历所有.item元素,移除active样式
    items.forEach((item)=>{
        item.classList.remove("active");
    })
    // 为当前选中项添加active样式
    this.classList.add("active");
}
// 遍历所有.item元素,分别为其设置点击事件
items.forEach((item)=>{
    item.addEventListener("click",setActive);
})
//创建数组存放背景url
var bgs = new Array('url("static/images/bg01.jpg")','url("static/images/bg02.jpg")','url("static/images/bg04.jpg")','url("static/images/bg05.jpg")','url("static/images/bg08.jpg")','url("static/images/bg025.jpg)','url("static/images/bg09.jpg")','url("static/images/bg10.jpg")','url("static/images/bg12.jpg")','url("static/images/bg13.jpg")','url("static/images/bg25.jpg")','url("static/images/bg19.jpg")','url("static/images/bg17.jpg")','url("static/images/bg19.jpg")','url("static/images/bg20.jpg")','url("static/images/bg21.jpg")','url(static/images/bg22.jpg")','url("static/images/bg23.jpg")','url("static/images/bg25.jpg)');

//随机插入背景函数
function changeBg(){
    document.getElementById('bgid').style.backgroundImage = bgs[Math.round(Math.random()* (bgs.length-1))];
}

//创建计时器
function myFunction(){
    var time = new Date();
    y = time.getFullYear();
    mon = time.getMonth()+1;
    d = time.getDate();
    var  h = time.getHours();
    var ampm = h < 12 ? 'AM' : 'PM';
    if(h < 10){
        h = '0' + h;
    }
    else if(h >= 12 && h < 22){
        h = '0' + (h % 12)
    }else if(h >= 22){
        h = h % 12;
    }
    else{
        h = h;
    }

    var  m = time.getMinutes();
    m = m < 10 ? '0'+ m : m;

    var s = time.getUTCSeconds();
    s = s < 10 ? '0'+ s : s;


    var wArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    w = wArr[time.getDay()];
    //插入顶部时间
    document.getElementById("rtbox").innerHTML = y +"-"+mon+"-"+d+" "+w;
    document.getElementById("lttime").innerHTML = ampm +'  '+ h + ":"+m+":"+s;

    //获取元素
    var txt = document.querySelector('#txt');
    var btn = document.querySelector('#add');
    var ul = document.querySelector('.notes');
    var colors =['#ef9a9a','#F48FB1','#CE93D8','#B39DDB','#9FA8DA','#90CAF9','#81D4FA','#80DEEA','#80CBC4','#A5D6A7','#C5E1A5','#FFCC80','#FFAB91','#BCAAA4','#B0BEC5'];
    //注册事件
    btn.onclick = function(){
        txt.focus();
        if(ul.children.length < 8 && txt.value !='' ){

            //创建元素
            var li = document.createElement('li');

            li.style.backgroundColor = colors[parseInt(Math.random()*(colors.length-1))];
            //添加元素
            ul.appendChild(li);
            li.innerHTML = txt.value + "<p>"+h +":"+ m +" "+ampm+"</p>" + "<a href='javascript:;' style='background:"+ li.style.backgroundColor +"' >Delete</a>";
            txt.value = '';
            txt.focus();
            //删除元素
            var as = document.querySelectorAll('a');
            for(var i = 0; i < as.length; i++){
                as[i].onclick = function (){
                    ul.removeChild(this.parentNode);
                    txt.focus();
                }
            }

        }else if(ul.children.length == 8){
            txt.value ='';
            txt.setAttribute('placeholder','只能添加8个便签哦！');
            txt.focus();

        }
        else if(txt.value ==''){
            txt.setAttribute('placeholder','请输入内容...');
            txt.focus();
        }
    }

}
//递归调用 每秒调用一次
setInterval("myFunction()",1000);

function getFocus(){
    document.getElementById('seaid').focus();
}


var btnn = document.querySelector('#note');
var div = document.querySelector('.btm');
var flag1 = true;
function addFocus(){
    if(!flag1){
        div.style.transform = 'translateX(0px)';
        flag1 = true;
        txt.blur();
    }else{
        div.style.transform = 'translateX(570px)';
        txt.focus();
        flag1 = false;
    }
}
btnn.onclick = function(){
    addFocus();
}

//获取元素
var ballbox =document.querySelector('.ballbox');
var clearBtn =document.querySelector('.clear_btn');
var auto =document.querySelector('.auto_btn');
var colors=['#ef9a9a','#F48FB1','#CE93D8','#B39DDB','#9FA8DA','#90CAF9','#81D4FA','#80DEEA','#80CBC4','#A5D6A7','#C5E1A5','#FFCC80','#FFAB91','#BCAAA4','#B0BEC5'];
var flag = true;
var balls = null;
var count = 0;
//自动添加 停止添加
function autoBtn(){
    if(flag){
        timer = setInterval(addBall,150);
        auto.value ='Stop';
        auto.style.backgroundColor ='red';
        flag = false;

    }else{
        clearInterval(timer);
        auto.style.backgroundColor ='#00ACC1';
        auto.value ='Start';
        flag = true;
    }
}
//创建新的
function addBall(){
    var ball = document.createElement('div');
    ball.setAttribute('class','ball');
    ball.style.background= "radial-gradient(circle at 75px 75px, "+colors[parseInt(Math.random()*colors.length)]+",#fff)";
    ballbox.appendChild(ball);
    count += 1;

    //控制球移动
    var top = parseInt(Math.random()*400);
    var left =  parseInt(Math.random()*900);
    ball.style.width = parseInt(Math.random()*50+50) +'px';
    ball.style.height = ball.style.width;
    ball.style.top = top +'px';
    ball.style.left = left +'px';
    var x = 5;
    var y = 8;

    running = setInterval(function clearBalls(){
        top += y ;
        left += x;
        if(top < 0  || top> (ballbox.offsetHeight - ball.offsetHeight)){
            y = -y ;
        }
        if(left< 0 || left> (ballbox.offsetWidth - ball.offsetWidth)){
            x = -x;
        }

        ball.style.top = top +'px';
        ball.style.left = left +'px';
    },100)

}
//清除球
// clearBtn.onclick =
function clearBalls(){
    var balls = document.getElementsByClassName('ball');
    clearInterval(timer);
    auto.style.backgroundColor ='#00ACC1';
    auto.value ='Start';
    flag = true;
    while(balls.length != 0){
        balls.length-- ;
        ballbox.removeChild(ballbox.children[0]);
    }
}

//弹出操作按钮
var btns =document.getElementById('btns');
var flag2 = true;
function ballBtn(){
    if(!flag2){
        btns.style.transform = 'translateX(0px)';
        flag2 = true;

    }else{
        btns.style.transform = 'translateX(65px)';

        flag2 = false;
    }
}

function myTime(){
    let time=new Date();
    let hh=time.getHours();  //时
    let mm=time.getMinutes();  //分
    let ss=time.getSeconds();  //秒
    // Math.floor() 向下取整
    document.getElementById("1").innerText=Math.floor(hh/10);
    document.getElementById("2").innerText=hh%10;
    document.getElementById("4").innerText=Math.floor(mm/10);
    document.getElementById("5").innerText=mm%10;
    document.getElementById("7").innerText=Math.floor(ss/10);
    document.getElementById("8").innerText=ss%10;
}
// 一秒执行一次
setInterval(myTime,1000);

