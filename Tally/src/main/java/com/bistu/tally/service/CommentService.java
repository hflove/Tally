package com.bistu.tally.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;

import com.bistu.tally.dao.entity.Comment;
import com.bistu.tally.dao.entity.Social;
import com.bistu.tally.dao.repository.CommentRepository;
import com.bistu.tally.dao.repository.PraiseRepository;
import com.bistu.tally.dao.repository.SocialRepository;
import com.bistu.tally.dao.repository.UserRepository;
import com.bistu.tally.helper.CommentBean;
import com.bistu.tally.helper.SocialBean;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CommentService {
	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private SocialRepository socialRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PraiseRepository praiseRepository;
	/**
	 * 通过bean，增加t_comment表，增加一条评论信息
	 * 
	 * @param bean 动态信息
	 * @return 增加成功返回当前数据库保存的动态信息
	 */
	public SocialBean create(CommentBean bean) {
		Comment entity = CommentBean.of(bean);
		log.info("entity before save: {}", entity);
		entity = this.commentRepository.save(entity);
		log.info("entity saved: {}", entity);
		Social entity2 = this.socialRepository.findById(entity.getSocialId()).get();
		entity2.setCommentsNum(entity2.getCommentsNum() + 1);
		entity2 = this.socialRepository.save(entity2);
		SocialBean bean2 = SocialBean.of(entity2);
		bean2.setPraise(this.praiseRepository.existsByUserIdAndSocialId(bean.getUserId(), bean.getSocialId()));
		bean2.setUserName(this.userRepository.findCase(bean.getUserId()));
		if(bean2.getCommentsNum() > 0)
			bean2.setComments(getBySocialId(bean.getSocialId()));
		return bean2;
	}
	
	private List<CommentBean> getBySocialId(Long id) {
		List<Comment> comments = commentRepository.findAllBySocialId(id);
		List<CommentBean> entities = new ArrayList<CommentBean>();
		for(int i = 0; i < comments.size(); i++) {
			CommentBean bean = CommentBean.of(comments.get(i));
			bean.setUserName(this.userRepository.findCase(bean.getUserId()));
			entities.add(bean);
		}
		return entities;
	}
	/**
	 * 通过cid和uid，删除t_comment表中记录
	 * 
	 * @param cid 评论编号
	 * @param uid 用户编号
	 * @return 删除成功 true
	 */
	public boolean delete(Long cid, Long uid) {
		boolean result = this.commentRepository.existsByIdAndUserId(cid, uid);
		if (result) {
			this.commentRepository.deleteById(cid);
		}
		else 
			return false;
		result = this.commentRepository.existsById(cid);
        log.info("comment id:{}, exist:{}", cid, result);
        if(result)
            return false;
        else
            return true;
	}
}
