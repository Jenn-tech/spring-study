/**
 * 파일 첨부 및 이미지 미리보기
 */

var fileAttCnt = 1;

var fileUpload = function(attZone){
	var zone = document.getElementById(attZone);
	
	append(zone);
	
}

//filedUpload 는 클래스, append는 method
function append(zone){
	var style_div = "border:1px solid #00f; width : 120px; height : 100px;"
				  + "display : inline-block; position : relative; margin-right : 4px;";//이미지박스
	var style_delBtn = "position:absolute; bottom:2px; right : 2px; border-width : 0;"
					 + "font-size : 40px; color : #f00; opacity : 0.5; background-color :rgba(0,0,0,0); "; //x버튼
				
	//이미지, file tag, button을 포함하고 있는 div
	var div = document.createElement("div");
	div.setAttribute("style", style_div);
	

	var img = document.createElement("img");
	img.setAttribute("src", "http://placehold.it/120x100");	
	img.setAttribute("width", "120px");
	img.setAttribute("height", "100px");
	div.appendChild(img);
	img.onclick = function(ev){
		imagePreview(zone, ev)
		
	}
	
	
	
	var file = document.createElement("input");
	file.setAttribute("type", "file"); //type이 file임
	file.setAttribute("name", "attfile"+ fileAttCnt); //server로 넘어가야하니까 name태그 붙혀줘야함
	file.setAttribute("style", "display:none;"); //자리차지x
	file.setAttribute("modify", "no"); //파일의 선택여부
	file.setAttribute("class", "attfile");
	fileAttCnt++;
	
	
	
	
	var delBtn = document.createElement("input");
	delBtn.setAttribute("type", "button");
	delBtn.setAttribute("value", "x");  //x버튼
	delBtn.setAttribute("style", style_delBtn);
	delBtn.onclick = function(ev){
		if(zone.childNodes.length <= 1) 
		return;
		var ele = ev.srcElement;//이벤트가 발생한 태그
		var p = ele.parentNode;
		var file = p.getElementsByClassName("attfile").item(0);
		if(file.getAttribute("modify") == "yes"){
			zone.removeChild(p);
		}
	}
	
	div.appendChild(file);
	div.appendChild(delBtn); 
	
	zone.appendChild(div);

}

function imagePreview(zone, ev) {
	var tag = ev.srcElement;
	var pDiv = tag.parentNode;
	var file = pDiv.getElementsByClassName("attfile").item(0);
	file.click();
	
	file.onchange = function(ev2){
		if(file.getAttribute("modify") == "no"){
			append(zone);
		}
		
		var url = ev2.srcElement.files[0];
		var reader = new FileReader();
		reader.readAsDataURL(url);
		reader.onload = function(ev3){
			tag.src = ev3.target.result;
			tag.setAttribute("modify", "yes");
		}
	}
	
	
}












