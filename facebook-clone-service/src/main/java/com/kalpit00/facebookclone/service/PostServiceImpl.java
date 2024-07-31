package com.kalpit00.facebookclone.service;

import com.kalpit00.facebookclone.repository.PostEntityRepository;
import org.springframework.stereotype.Service;

@Service
public class PostServiceImpl implements PostService {

    private PostEntityRepository postEntityRepository;

    public PostServiceImpl(PostEntityRepository postEntityRepository) {
        this.postEntityRepository = postEntityRepository;
    }


}
