package member;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MemberController {
	
	Dao dao ; 
	FileUpload fu ;

	
	public MemberController() {	}
	public MemberController(Dao dao) { 
		//생성자를 통해 dao를 넘겨받음, dao는 인터페이스일것이다
		//memberdao는 dao를 구현한 것 
		this.dao = dao;
	}

	@RequestMapping(value = "insert.mem", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView insert() {
		ModelAndView mv = new ModelAndView();
		
		
		mv.setViewName("insert"); //WEB-INF/member/insert.jsp안에 있어야 될 것이다
		
		return mv;
		
	}
	
	@RequestMapping(value = "insertR.mem", method=RequestMethod.POST)
	public ModelAndView insertR(HttpServletRequest req) {
		ModelAndView mv = new ModelAndView();
		
		fu = new FileUpload(req);
		MemberVo vo = fu.getMember();
		Page page = fu.getPage();
		
		System.out.println("─────────────────────");
		System.out.println(vo.getMid());
		System.out.println(vo.getPwd());
		System.out.println(vo.getPhone());
		
		mv.setViewName("insert_result"); //WEB-INF/member/insert_result.jsp
		mv.addObject("msg", "회원정보가 정상적으로 저장되었습니다.");
		
		return mv;
	}
	
	
	
	@RequestMapping(value = "select.mem", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView select(Page page) { 
		ModelAndView mv = new ModelAndView();
		
		List<MemberVo> list = null;

		if(page != null) {
		System.out.println("controller.select()....");
		System.out.println("nowPage :" + page.getNowPage());
		}else {
			System.out.println("page is null");
		}
		
		
		//page만든 후(dao에서) dao호출
		Map<String, Object> map = dao.select(page); //select의 반환형은 list<MemberVo>
		page = (Page)map.get("page");
		list = (List<MemberVo>)map.get("list");
		
		mv.addObject("page", page);
		mv.addObject("list", list);
		mv.setViewName("select"); //WEB-INF/member/select.jsp가 viewResolver됨

		return mv;
		
	}
	@RequestMapping(value= "view.mem", method = RequestMethod.POST)
	public ModelAndView view(MemberVo vo) {
		ModelAndView mv = new ModelAndView();
		
		System.out.println("controller.view().....");
		System.out.println(vo.getMid());
		
		vo = dao.view(vo.getMid());
		mv.addObject("vo", vo);
		mv.setViewName("view"); //WEB-INF/member/view.jsp
		
		return mv;
	}
	
	
	
}









