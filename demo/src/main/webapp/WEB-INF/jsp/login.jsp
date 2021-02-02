<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<div id = 'login'>
	<form name = "frm_login" method = 'POST' action = '/loginR'>
		<label>아이디</label>
		<input type = 'text' name = 'mid' />
		<label>비밀번호</label>
		<input type = 'text' name ='pwd'/>
		<input type = 'submit' value = '로그인'/>
	</form> 

</div>

</body>
</html>