package member;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import bean.MemberFactory;

public class MemberDao implements Dao {
	
	SqlSession sqlsession ;
	
	public MemberDao() {}
	public MemberDao(MemberFactory f) {
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
	public List<MemberVo> select(Page p) {
		List<MemberVo> list = sqlsession.selectList("member.select", p); // namespace member안의 id값 
		
		
		return null;
	}

	@Override
	public String insert(MemberVo vo) {
		// TODO Auto-generated method stub
		return null;
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
		// TODO Auto-generated method stub
		return null;
	}
	
}
