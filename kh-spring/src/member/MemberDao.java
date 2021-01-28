package member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import bean.MemberFactory;

public class MemberDao implements Dao {
	
	SqlSession sqlsession ;
	MemberFactory f;
	
	public MemberDao() {}
	public MemberDao(MemberFactory f) {
		this.f = f;
		sqlsession = f.getFactory().openSession();
	}
	@Override
	public boolean log(String mid, String pwd) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public int getTotListSize(String findStr) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Map<String, Object> select(Page p) {
		sqlsession = f.getFactory().openSession();
		Map<String, Object> map = new HashMap<String, Object>();
		
		//page가 null이면 nowpage에 1 넣어준다
		if(p==null) {
			p = new Page();
			p.setNowPage(1);
		}else if(p.getNowPage()<1) {
			p.setNowPage(1);
		}
		
		System.out.println("Dao.select().............");
		System.out.println("nowPage : " + p.getNowPage());
		
		int cnt = sqlsession.selectOne("member.tot_list_size", p); //member안의 tot_list_size
		p.setTotListSize(cnt);
		p.pageCompute();
		
		System.out.println("startNo : " + p.getStartPage());
		System.out.println("endPage : " + p.getEndPage());

		List<MemberVo> list = sqlsession.selectList("member.select", p); // namespace member안의 id값 
		
		System.out.println("list.size : " + list.size());
		map.put("list", list);
		map.put("page", p);
		
		sqlsession.close();
		return map;
	}

	@Override
	public String insert(MemberVo vo) {
		String msg = "회원 정보가 정상적으로 저장되었습니다.";
		
		sqlsession = f.getFactory().openSession();
		
		int cnt = sqlsession.insert("member.insert", vo);
		
		if(cnt<1) {
			msg = "회원 정보 저장 중 오류 발생";
			sqlsession.rollback();
		}
		
		sqlsession.commit();
		sqlsession.close();
		return msg;
	}

	@Override
	public String update(MemberVo vo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String delete(MemberVo vo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MemberVo view(String mid) {
		sqlsession = f.getFactory().openSession();

		MemberVo vo = sqlsession.selectOne("member.view", mid);
		
		System.out.println(vo.getName());
		sqlsession.close();
		return vo;
		
	}
	
}
