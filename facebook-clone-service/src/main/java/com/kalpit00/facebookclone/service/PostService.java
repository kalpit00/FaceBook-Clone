package com.kalpit00.facebookclone.service;

import com.kalpit00.facebookclone.model.Post;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}
