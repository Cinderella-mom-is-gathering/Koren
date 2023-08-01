import styled from "styled-components";
import CommentSection from "../component/comment/CommentSection";
import Header from "../component/header/Header";
import PostCard from "../component/postCard/PostCard";
import React, {useEffect, useState} from "react";
import * as Api from "../apis/ApiInterface";
import {useParams} from "react-router-dom";

const MainWrapper = styled.div`
margin:20px;
  position: relative;
  
  display: flex;
  flex-direction:column;
`

const realName = (account) =>  {
    if(account === undefined) return '';
    return account.split(".")[0];
}
const PostDetailPage=()=>{

    const [post,setPost] = useState({});
    const {postId} = useParams();

    useEffect(() => {
        Api.getPostByToken(postId).then(setPost);
    },[]);

    return(
        <div>
            <Header
                title={"Koren"}
                renderBackArrowButton={true}
            />
            <PostCard
                nickname={realName(post?.token_id)}
                text={post?.metadata?.description}
                url={post?.metadata?.img}
                approveBtn={false}
                coinValueBtn={false}
                chooseMenuBtn={true}
            />
            <CommentSection/>
        </div>
    )
}

export default PostDetailPage;