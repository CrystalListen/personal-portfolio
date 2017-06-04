var project = document.getElementById('myCarouselFrontend');

$(window).load(function(){
	$.getJSON("./data.json",function(json){

		console.log(json[0].title[0]);
		console.log(json[0].addr);
		console.log(json[0].image);
	var num = json.length;
	/* Indicators */
	var newOl = document.createElement('ol');
	newOl.setAttribute("class","carousel-indicators");
	project.appendChild(newOl);
	for(var i =0; i<num;i++){
		//创建<li data-target="#myCarouselFrontend" data-slide-to="0" class="active"></li>
		var node = document.createElement('li');
		node.setAttribute("data-target","#myCarouselFrontend");
		node.setAttribute("data-slide-to",i);
		if(i == 0){
			node.setAttribute("class","active");
		}
		newOl.appendChild(node);

	}
	/* Wrapper for slides */
	for(var i=0;i<num;i++){
		var newDiv = document.createElement('div');
		newDiv.setAttribute("class","carousel-inner");
		newDiv.setAttribute("role","listbox");
		project.appendChild(newDiv);

		var itemDiv = document.createElement('div');
		if(i==0)
		itemDiv.setAttribute("class","item active");
		else
			itemDiv.setAttribute("class","item");
		newDiv.appendChild(itemDiv);

		/*<h3><a class="fullApp" href="https://github.com/CrystalListen/frog-game.git" target="_blanck">经典游戏克隆</a>:青蛙过河</h3>*/
		var titleH3 = document.createElement('h3');
		itemDiv.appendChild(titleH3);

		var newA = document.createElement('a');
		newA.setAttribute("class","fullApp");
		newA.setAttribute("href",json[i].addr);
		newA.setAttribute("target","_blanck");
		titleH3.appendChild(newA);

		var aText = document.createTextNode(json[i].title[0]);
		newA.appendChild(aText);

		var h3Text = document.createTextNode(json[i].title[1]);
		titleH3.appendChild(h3Text);

		/* <hr class="divider small"/> */
		var newHr = document.createElement('hr');
		newHr.setAttribute("class","divider small");
		itemDiv.appendChild(newHr);

		/* <div class="row"> */
		var rowDiv = document.createElement('div');
		itemDiv.appendChild(rowDiv);

		/*<div class="col-xs-12 col-sm-4 description">*/
		var colDiv = document.createElement('div');
		colDiv.setAttribute("class","col-xs-12 col-sm-4 description");
		rowDiv.appendChild(colDiv);

		/*<ul>*/
		var colUl = document.createElement('ul');
		colDiv .appendChild(colUl);

		/*              <li>使用JavaScript面对对象开发</li>
                        <li>游戏场景由HTML5 canvas绘制</li>
                        <li>玩家通过上下左右四个方向操作角色并需要躲避敌人</li>*/
        for(var j =0;j<json[i].describe.length;j++){
        	var colLi = document.createElement('li');
        	var liText = document.createTextNode(json[i].describe[j]);
			colLi.appendChild(liText);
			colUl.appendChild(colLi);
        }

        /* <div class="col-xs-12 col-sm-8"> */
        var colDiv2 = document.createElement('div');
        colDiv2.setAttribute("class","col-xs-12 col-sm-8");
        rowDiv.appendChild(colDiv2);

        /*<img class="" src="images/game.png">*/
        var newImg = document.createElement('img');
        console.log(json[i].images);
        newImg.setAttribute("src",json[i].image);
        colDiv2.appendChild(newImg);
	}

	if(num > 1){
		/*
              <a class="left carousel-control" href="#myCarouselFrontend" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
		*/

		var newA1 = document.createElement('a');
		newA1.setAttribute("class","left carousel-control");
		newA1.setAttribute("href","#myCarouselFrontend");
		newA1.setAttribute("role","button");
		newA1.setAttribute("data-slide","prev");

		project.appendChild(newA1);

		var newSpan1 = document.createElement('span');
		newSpan1.setAttribute("class","glyphicon glyphicon-chevron-left");
		newSpan1.setAttribute("aria-hidden","true");
		newA1.appendChild(newSpan1);

		var newSpan2 = document.createElement('span');
		newSpan2.setAttribute("class","sr-only");
		newA1.appendChild(newSpan2);

		var spanText1 = document.createTextNode("Previous");
		newSpan2.appendChild(spanText1);

		/*
              <a class="right carousel-control" href="#myCarouselFrontend" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a> 
		*/

		var newA2 = document.createElement('a');
		newA2.setAttribute("class","right carousel-control");
		newA2.setAttribute("href","#myCarouselFrontend");
		newA2.setAttribute("role","button");
		newA2.setAttribute("data-slide","next");

		project.appendChild(newA2);

		var newSpan3 = document.createElement('span');
		newSpan3.setAttribute("class","glyphicon glyphicon-chevron-right");
		newSpan3.setAttribute("aria-hidden","true");
		newA2.appendChild(newSpan3);

		var newSpan4 = document.createElement('span');
		newSpan4.setAttribute("class","sr-only");
		newA2.appendChild(newSpan4);

		var spanText2 = document.createTextNode("Next");
		newSpan4.appendChild(spanText2);
	}
	});

});