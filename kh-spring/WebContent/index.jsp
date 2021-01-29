<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Index</title>
<link rel = 'stylesheet' type = 'text/css' href='./css/index.css'>
<script src ='./js/member.js'></script>
	<!--jquery CDN사용 -->
<script src="https://code.jquery.com/jquery-3.5.1.js" 
		integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" 
		crossorigin="anonymous"></script>
<script src = 'http://dmaps.daum.net/map_js_init/postcode.v2.js'></script>

</head>
<body>
<div id = 'index'>
	<h2>Spring Framework</h2>
	<hr/>
	<div class='menu'>
		<a href='test.ddd'>Spring MVC Test</a> <!-- test.ddd가 서버에 전달 -->
		<a href='gugudan.ddd'>spring MVC를 사용한 구구단</a>
		<a href='sum.ddd'>두 수의 합</a>
		<a href='insert.mem'>회원가입</a>
		<a href='javascript:member.select();' >회원조회</a> <!-- member라는 객체가 가지고 있는 select -->
		<!-- 만약 select.mem?nowPage=1이면 null 이 아니지만... 그렇게는 안함 -->
	</div>
	<div id = 'here'></div>

	<h4 class = 'footer'>디지털 웹 콘텐츠 융합 응용 sw개발사</h4>
</div>
<script>member()</script>
</body>
</html>