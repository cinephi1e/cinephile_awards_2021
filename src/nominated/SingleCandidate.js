import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const SingleCandidate = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => { history.push("/supportingactor") }}
            style={{ backgroundColor: "#0422c5" }}>
            <Title>Cinephile Awards</Title>
            <Content>
                <Desc>주요 부문 시상 전에 단일후보 부문 빠르게 훑고 가기</Desc>

                <Category>* 다큐멘터리상 - #위왓치유</Category>
                
                <Category>
                    * 놀란상 - 사운드 오브 메탈
                    <CateDesc>코시국에도 용감무쌍하게 개봉을 감행한 크리스토퍼 놀란의 이름을 따온 상으로 극장개봉이 무산된 작품에게 주는 상. 언젠간 극장에서 꼭 보길 바란다는 염원을 담아 이 상을 수여함.</CateDesc>
                </Category>
                
                <Category>
                    * 홍진호상 - 인천스텔라
                    <CateDesc>이류를 자처하였으므로 이 상을 수여함.</CateDesc>
                </Category>

                <Category>
                    * 아미상 - 이터널스
                    <CateDesc>방탄소년단 MAP OF THE SOUL:7 앨범에 수록된 '친구'를 삽입하여 전세계 아미들의 마음을 사로잡았으므로 이 상을 수여함.</CateDesc>
                </Category>

                <Category>
                    * 브레이킹배드상 - 스파이더맨: 노 웨이 홈
                    <CateDesc>트릴로지의 마지막을 훌륭히 마무리 지었으므로 이 상을 수여함.</CateDesc>
                </Category>

                <Category>
                    * 왕좌의게임상 - 노 타임 투 다이
                    <CateDesc>최악의 마무리로 인기 프렌차이즈를 마무리 지었으므로 이 상을 수여함.</CateDesc>
                </Category>

                <Category>
                    * 전남친상 - 블랙위도우
                    <CateDesc>자꾸만 구질구질하게 붙잡고 싶어지므로 이 상을 수여함.</CateDesc>
                </Category>
            </Content>
            <Continue>Press anything to continue _</Continue>
        </Container>
    );
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;
`;

const Title = styled.span`
font-size: 3vh;
color: #0422c5;
background: white;
margin: 0 auto;
padding: 0.5vh;
`;

const Content = styled.div`
text-align: left;
padding: 0 5vw;
@media screen and (max-width: 1024px) {     
    padding: 1vh 3vw;
}
`;

const Desc = styled.h3`
font-weight: 100;
font-size: 3vh;
margin: 5vh 0;
@media screen and (max-width: 1024px) {     
    font-size: 1.7vh;
}
`;

const Category = styled.h3`
font-size: 2.5vh;
margin: 3vh 0;
@media screen and (max-width: 1024px) {     
    font-size: 1.7vh;
}
`;

const CateDesc = styled.p`
font-weight: 100;
font-size: 1.5vh;
text-align: left;
margin-left: 3vh;
margin-top: 0.7vh;
line-height: 1.2em;
@media screen and (max-width: 1024px) {     
    font-size: 1.3vh;
    margin-left: 1.5vh;
    margin-top: 0.5vh;
}
`;

const Continue = styled.h3`
font-weight: 100;
font-size: 3.5vh;
text-align: left;
@media screen and (max-width: 1024px) {     
    font-size: 2.5vh;
}
`;

export default SingleCandidate;
