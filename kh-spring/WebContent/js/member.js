function getID(id){ return document.getElementById(id)}

var member = function(){
	
	var btnInsert = getID('btnInsert');
	var btnFind   = getID('btnFind');
	var btnSelect = getID('btnSelect');
	var btnSave   = getID('btnSave');
	var btnFindZip = getID('btnFindZip');
	var btnPhoto  = getID('btnPhoto');
	var btnModify = getID('btnModify');
	var btnUpdate = getID('btnUpdate');
	var btnDelete = getID('btnDelete');


	if(btnDelete != null) {
      btnDelete.onclick = function() {
         var frm = document.frm_member; // form 가져오기
         var pZone = getID('password_zone');
         var btnPassword = getID('btnPassword');
         frm.pwd.value='';
         pZone.style.display = 'block';
         
         btnPassword.onclick = function() {
            pZone.style.display = 'none';
         
            if( frm.pwd.value != '' ) {
               frm.mid.disabled = false; // disabled 속성을 false로 주면 disabled라도 값이 넘어감
               member.delete('deleteR.mem');
            }
         }
            
      }
         
   }
	
	if(btnUpdate != null){
		btnUpdate.onclick = function(){
			var frm = document.frm_member;
			var pZone = getID('password_zone');
	        var btnPassword = getID('btnPassword');
	        frm.pwd.value='';
	        pZone.style.display = 'block';
	         
	        btnPassword.onclick = function() {
	        pZone.style.display = 'none';
         	
			if(frm.pwd.value != ''){
				member.update('modifyR.mem') ;
				}
		
			}
		}
	}
	if(btnModify != null){
		btnModify.onclick = function(){
			var frm = document.frm_member;
			frm.mid.disabled = false;
			member.select('modify.mem');
			}
	}
	
	
	
	// 이미지 파일 미리보기
	if(btnPhoto != null){ //file tag의 id
		btnPhoto.onchange = function(ev){
			var tag = ev.srcElement; // 이벤트 발생한 태그
			var url = tag.files[0]; // 선택된 파일명
			var reader = new FileReader();
			reader.readAsDataURL(url);
			reader.onload = function(e){
				var img = new Image();
				img.src = e.target.result;
				var photo = getID('photo');
				photo.src = img.src;
			}
		}
	}
	
	
	
	
	// 다음 우편번호 검색 API를 사용한 주소 찾기
	if(btnFindZip != null){
		btnFindZip.onclick = function(){
			var frm = document.frm_member;
			new daum.Postcode({
				oncomplete : function(data){
					frm.zipcode.value = data.zonecode;
					frm.address.value = data.address;
				}
			}).open();
		}
	}
	
	
	if(btnSave != null) { //낫널이 곧 클릭
      btnSave.onclick = function() {
         var frm = document.frm_member;
         var checkFlag = true;
		 if(checkFlag){
	         // 파일 업로드 하기 위해 enctype가 필요함.   
	         	member.update('insertR.mem');
		}
      }
   }

	
	
	if(btnSelect != null){
		btnSelect.onclick = function(){
			var frm = document.frm_member;
			member.select('select.mem');
		}
	}
	
	
	if(btnFind != null){
		btnFind.onclick = function(){
			var frm = document.frm_member;
			frm.nowPage.value = 1;
			member.select();
			}
	}
	
	
	//$('#btnInsert').on('click', function(){ ... });
	if(btnInsert != null){
		btnInsert.onclick = function(){
			var frm = document.frm_member;
			member.select('insert.mem');
		}
	}
}//end of member()

member.goPage=function(page){ //member.gopage를 호출함
	var frm = document.frm_member;
	frm.nowPage.value = page;
	member.select();
}
member.view=function(mid){
	var frm = document.frm_member;
	frm.mid.value = mid;
	member.select('view.mem');
}

//spring -> ajax로 호출
member.select = function(url){

	if(url == null ){
		url = 'select.mem';
	}
	
	$param = $('#frm_member').serialize();
	
	$.ajax({
		url 	: url,
		data 	: $param,
		dataType: 'html', //응답 데이터
		method  : 'POST',
		success : function(data){
			$('#here').html(data);
		}
	});


}


member.delete = function(url){

	if(url == null ){
		url = 'select.mem';
	}
	
	$param = $('#frm_member').serialize();
	
	$.ajax({
		url 	: url,
		data 	: $param,
		dataType: 'html', //응답 데이터
		method  : 'POST',
		success : function(data){
			$('#here').html(data);
		}
	});


}


//입력하기, 수정하기
member.update = function(url){ //insertR, modifyR 둘중 하나 들어옴
	var formData = new FormData($('#frm_member')[0]);
	
	$.ajax({
		url 	: url,
		data  	: formData,
		dataType: 'html',
		method  : 'POST',
		enctype : 'multipart/form-data',
		contentType : false, //text로 바뀌는거 예방
		processData : false, 
		success : function(data){
			$('#here').html(data);
		}
	})
}




