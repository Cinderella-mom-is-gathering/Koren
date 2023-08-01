import React from "react";

import styled from "styled-components";
import Profile from "./Profile";
import TextBox from "./TextBox";
import ImgBox from "./ImgBox";
import ApproveButton from "./ApproveButton";
import RejectButton from "./RejectButton";
import PostPIC from "../../assets/postPIC.png";
const CardBox = styled.div`
  width: 100%;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 20px;
  box-shadow: 0px 2px 3px 0.5px #d5d5d5;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-right: 10px;
  padding-left: 10px;
`;

const PostCard = ({
  profilePIC,
  nickname = "Agust D",
  text = "hi hi",
  url,
  approveBtn = true,
  coinValueBtn = true,
  chooseMenuBtn = false,
  coinValue=0.001,
}) => {
  return (
    <CardBox onClick={props.goDetailPageHandler}>
      <Profile
        coinValue={coinValue}
        profilePIC={profilePIC}
        nickname={nickname}
        coinValueBtn={coinValueBtn}
        chooseMenuBtn={chooseMenuBtn}
      />
      <TextBox text={text} />
      <ImgBox url={url} />
      <>
        {approveBtn === true ? (
          <>
            <RejectButton />
            <ApproveButton />{" "}
          </>
        ) : (
          <div></div>
        )}
      </>
    </CardBox>
  );
};

export default PostCard;
