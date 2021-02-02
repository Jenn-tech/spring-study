package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.member.MemberVo;

//반환형 : modelandview, object, text, Json, html
// controller + responsebody
@RestController
public class TestController {

	@RequestMapping(value ="/test", method = RequestMethod.GET)
	public String test() {
		String msg = "hi spring boot controller test";
		return msg;
	}
	
	@RequestMapping(value="/gugudan", method=RequestMethod.GET)
	public ModelAndView gugudan() {
		ModelAndView mv = new ModelAndView();
		String dan = "<h3>2단...</h3>";
		int su = 5;
		for(int i=1; i<10; i++) {
			String temp = String.format("%d * %d = %d<br>", su, i, (su*i));
			dan += temp;
		}
		
		//2단 출력(TODO)
		
		mv.addObject("gugu", dan);
		mv.setViewName("gugudan"); //WEB-INF/jsp/gugudan
		
		return mv;
	}
	
	@RequestMapping(value="/loginR", method=RequestMethod.POST)
	public ModelAndView login(MemberVo vo) {
		String msg = "로그인 실패";
		ModelAndView mv = new ModelAndView();
		
		if(vo.getMid().contentEquals("hong")&&vo.getPwd().contentEquals("1234")) {
			msg = "로그인 성공";
		}
		
		mv.addObject("msg", msg);
		mv.setViewName("login_result");
		
		return mv;
	}
	
	@RequestMapping(value="/login", method = RequestMethod.GET)
	public ModelAndView login() {
		ModelAndView mv = new ModelAndView();
		  mv.setViewName("login");

		return mv;
	}

}
