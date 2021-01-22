package member;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MemberController {
	
	Dao dao ; 
	public MemberController() {	}
	public MemberController(Dao dao) { 
		//생성자를 통해 dao를 넘겨받음, dao는 인터페이스일것이다
		//memberdao는 dao를 구현한 것 
		this.dao = dao;
	}

	@RequestMapping(value = "insert.mem", method = RequestMethod.GET)
	public ModelAndView insert() {
		ModelAndView mv = new ModelAndView();
		
		
		mv.setViewName("insert"); //WEB-INF/member/insert.jsp안에 있어야 될 것이다
		
		return mv;
		
	}
	
	@RequestMapping(value = "insertR.mem", method=RequestMethod.POST)
	public ModelAndView insert(MemberVo vo) {
		ModelAndView mv = new ModelAndView();
		
		System.out.println("─────────────────────");
		System.out.println(vo.getMid());
		System.out.println(vo.getPwd());
		System.out.println(vo.getPhone());
		
		mv.setViewName("insert_result"); //WEB-INF/member/insert_result.jsp
		mv.addObject("msg", "회원정보가 정상적으로 저장되었습니다.");
		
		return mv;
	}
	
	
	
	@RequestMapping(value = "select.mem", method = RequestMethod.GET)
	public ModelAndView select(Page page) {
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("select"); 

		return mv;
		
	}
	
	
	
	
	
}









