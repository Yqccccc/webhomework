/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-03-11 14:16:50
 * @version $Id$
 */
doClick()
function doClick(){
	document.getElementById("p1").addEventListener("click",DoClick)
}

function DoClick(e){
	e.target.style.color="red"
}

var a = document.getElementById("p2")
var b = document.getElementById("p21")
console.log(b.innerText)
a.onclick=function (){
	var date=new Date()
	var seperator1="-"
	var year=date.getFullYear()
	var month=date.getMonth()+1
	var strDate=date.getDate()
	if(month>=1&&month<=9){
		month="0"+month
	}
	if(strDate>=0&&strDate<=9){
		strDate="0"+strDate
	}
	var currentdate=year+seperator1+month+seperator1+strDate
	b.innerText=currentdate
}

var c= document.getElementById("p3")
c.onclick=function(){
	c.classList.add("fn-active")
}

var d=document.getElementById("p41")
var e=document.getElementById("p8")
var g=document.getElementById("p4")
g.onclick=function(){
	d.removeChild(e)
}

var f=document.getElementById("p5")
f.onclick=function(){
	window.open("https://www.taobao.com")
}

var j=document.getElementById("p6")
j.onclick=function(){
	var h=document.createElement('li')
    h.innerHTML='p9'
    document.getElementById("p41").appendChild(h)
}

var ul = document.querySelector('ul');  
var list = document.querySelectorAll('ul li');  
ul.addEventListener('click', function(ev){  
    var ev = ev || window.event 
    var target = ev.target || ev.srcElemnt
    for(var i = 0, len = list.length; i < len; i++){  
        if(list[i] == target){  
            alert(i+1)
        }  
    }  
})

var o=document.getElementById("p7")
o.onclick=function(){
	var winWidth = window.screen.width
	var myDiv = document.getElementById("hezi")
	myDiv.style.width = winWidth + 'px'
}

$(function(){  
    $(".pic").click(function(){  
        var _this = $(this); 
        imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);  
    });  
});  
 
function imgShow(outerdiv, innerdiv, bigimg, _this){  
    var src = _this.attr("src"); 
    $(bigimg).attr("src", src);      

    $("<img/>").attr("src", src).load(function(){   
        var realWidth = this.width; 
        var realHeight = this.height;
        var scale = 0.2;  
        var bigWidth = realWidth*scale;
        var bigHeight = realHeight*scale;

        $(bigimg).css("width",bigWidth);
        $(bigimg).css("height",bigHeight);

        var bwidth = ($("#outerdiv").width());
        var bheight = ($("#outerdiv").height());

        var leftside = (bwidth-bigWidth)/2.2;  
        var topside = (bheight-bigHeight)/4;

        $(innerdiv).css({"top":topside, "left":leftside});
        $(outerdiv).show();
    });  
          
        $(outerdiv).click(function(){
            $(this).hide(); 
        });  
}

/*second*/
function hn(){
  $('.menu:first-child').trigger("click");
}

$(document).ready(function(){
  window.onload=hn;
})

$('.menu').click(function(){
    $(this).parent().next().children().eq(
      $(this).index()).show().siblings().hide();
 })

$('.menu').click(function(){
  $('.menu').css("background",'#fff');
  $(this).css("background",'#ccc');
 })

/*third*/
var index =1;
var newindex;
$(".order").each(function(){
  newindex=$(this).html(index++);
})

$(function(){
    $("#tab3-2").on("click",".delbtn",function(){
      $(this).parent().parent().remove(); 
            index=1;
            $(".order").each(function(){
            $(this).html(index++);
        })
    })  
});

$(function(){  
    $(".addbtn").click(function(){
      $("#tab3-2").append("<tr><td><span class=\"order\"></span></td><td></td><td><button class=\"delbtn\">delete</button></td></tr>")
    var index =1;
    var newindex;
    $(".order").each(function(){
    newindex=$(this).html(index++);
     }) 
  })   
});
/*            
/*JS*/
/*first*/

var lis=document.getElementById('jss1').getElementsByTagName('img');
var box=document.getElementById('js1');
    for(var i=0;i<lis.length;i++){
           lis[i].onclick=function fc(e){
            var  newDiv=document.createElement('div');
                 newDiv.className='bg';
                 box.appendChild(newDiv);

            var  newImg=document.createElement('img');
                 newImg.className='maxpic';
                 newImg.src = e.currentTarget.getAttribute("src");
                 box.appendChild(newImg);

              newDiv.onclick=function(){
                box.removeChild(newDiv);
                box.removeChild(newImg);
              }

           }

    }

/*second*/

var aLi = document.getElementsByClassName('menu2');
var adivs = document.getElementsByClassName('content2');
var view = document.getElementById('no1');

for(var i=0;i<aLi.length;i++){
  aLi[i].index=i;
  aLi[i].onclick = function(){
    for(var f=0;f<aLi.length;f++){
      if(f==this.index){
        aLi[f].style.background ='#ccc';
        adivs[f].style.display = 'block';
        view.style.display = 'none';

      }else{
        aLi[f].style.background ='#fff';
        adivs[f].style.display = 'none';
        view.style.display = 'none';
      }
    }
  }
}

/*third*/

function del(obj){
  var tr = obj.parentNode.parentNode;
  tr.parentNode.removeChild(tr);
  numCheck();
}

var btn = document.getElementById('addd');

btn.onclick = function(){
  var num = document.getElementById('table').getElementsByTagName('tr').length;
  var tab = document.getElementById('table');
  var trr=document.createElement('tr');
  var xl=document.createElement('td');
  var xm=document.createElement('td');
  var xr=document.createElement('td');
  var nbtn = document.createElement('button');
  nbtn.innerHTML = 'delete';
  nbtn.setAttribute('onclick','del(this)');

  xl.innerHTML=num+1;

  trr.appendChild(xl);
  trr.appendChild(xm); 
  xr.appendChild(nbtn);
  trr.appendChild(xr);
  tab.appendChild(trr);
  trr.className = "xvhao";

}

function numCheck() {
  var hang = document.getElementById('table').getElementsByTagName('tr');
  var xvhao = [];
  var s=1;
  var hangshu = hang.length;
  for(i=0;i<hangshu;i++){
    xvhao[i]=i+1;
  }
  for(i=0;i<hangshu;i++){  
    document.getElementById('table').rows[i].cells[0].innerHTML=xvhao[i];
  }
}