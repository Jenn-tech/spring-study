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
/*	
	if(btnDelete != null){
		btnDelete.onclick = function(){
			var frm = document.frm_member;
			var pwd = prompt("회원정보를 삭제하시려면 암호를 입력하세요");
			if(pwd != null){
				frm.action = 'member.do?job=delete';
				frm.pwd.value = pwd;
				frm.mid.disabled=false;
				frm.submit();
			}
		}
	}
	*/
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
               frm.action = 'deleteR.mem';
               frm.mid.disabled = false; // disabled 속성을 false로 주면 disabled라도 값이 넘어감
               frm.submit();
            }
         }
            
      }
         
   }
	
	if(btnUpdate != null){
		btnUpdate.onclick = function(){
			var frm = document.frm_member;
			
			var pwd = prompt("회원정보를 수정하시려면 암호 입력");
			if(pwd == null){
				return;
			}
			frm.pwd.value = pwd;
			//frm.enctype = 'multipart/form-data';
			frm.enctype = 'multipart/form-data';
			frm.action = 'update.mem';
			frm.submit();
		}
	}
	
	if(btnModify != null){
		btnModify.onclick = function(){
			var frm = document.frm_member;
			frm.mid.disabled = false;
			frm.action ='modify.mem';
			frm.submit();
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
         
         // 암호와 암호확인의 일치 여부
         if(frm.pwd.value != frm.pwdConfirm.value) {
            alert("암호가 일치하지 않습니다, 암호를 확인해 주세요.");
            return;
         }
            
         // 파일 업로드 하기 위해 enctype가 필요함.   
         frm.enctype = 'multipart/form-data';
         frm.action = 'insertR.mem';
         frm.submit();
      }
   }

	
	
	if(btnSelect != null){
		btnSelect.onclick = function(){
			var frm = document.frm_member;
			frm.action = 'select.mem';
			frm.submit();
		}
	}
	
	
	if(btnFind != null){
		btnFind.onclick = function(){
			var frm = document.frm_member;
			frm.action = "select.mem";
			frm.nowPage.value = 1;
			frm.submit();
		}
	}
	
	
	//$('#btnInsert').on('click', function(){ ... });
	if(btnInsert != null){
		btnInsert.onclick = function(){
			var frm = document.frm_member;
			frm.action = 'insert.mem';
			frm.submit();
		}
	}
}

function goPage(page){
	var frm = document.frm_member;
	frm.action = 'select.mem';
	frm.nowPage.value = page;
	frm.submit();
}
function view(mid){
	var frm = document.frm_member;
	frm.action = 'view.mem';
	frm.mid.value = mid;
	frm.submit();
}
