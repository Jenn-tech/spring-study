<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Index</title>
<link rel = 'stylesheet' type = 'text/css' href='./css/index.css'>
</head>
<body>
<div id = 'index'>
	<h2>Spring Framework</h2>
	<hr/>
	
	<a href='test.ddd'>Spring MVC Test</a> <!-- test.ddd가 서버에 전달 -->
	<br>
	<a href='gugudan.ddd'>spring MVC를 사용한 구구단</a>
	<br>
	<a href='sum.ddd'>두 수의 합</a>
	<br>
	<a href='insert.mem'>회원가입</a>
	<br>
	<a href='select.mem'>회원조회</a> <!-- 만약 select.mem?nowPage=1이면 null 이 아니지만... 그렇게는 안함 -->
</div>
</body>
</html>