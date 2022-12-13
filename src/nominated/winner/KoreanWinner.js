import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Container, Category, Nominated, Content, Nomination, Choice, Flex, Awards, Text, Title, Year, Img, Trophy} from "../../element";

const KoreanWinner = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => {
            history.push("/dduck")
        }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>한국인상</Category>
            <Choice>한 해동안 가장 열심히 일한 영화인에게 주는 상</Choice>
            <Content>
            <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Benedict2.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Awards>
                            <Title>베네딕트 컴버배치</Title>
                            <Desc>더 스파이, 모리타니안, 파워 오브 도그, 스파이더맨: 노 웨이 홈</Desc>
                        </Awards>
                        <Trophy>🏆</Trophy>
                    </Flex>
                </Nomination>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Ryan.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>라이언 레이놀즈</Title>
                            <Desc>크루즈 패밀리: 뉴 에이지, 프리 가이, 킬러의 보디가드2, 레드 노티스</Desc>
                        </Text>
                    </Flex>
                </Nomination>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/TimotheeChalamet2.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>티모시 샬라메</Title>
                            <Year>듄, 프렌치 디스패치, 돈 룩 업</Year>
                        </Text>
                    </Flex>
                </Nomination>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Zendaya2.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>젠 다야</Title>
                            <Year>맬컴과 마리, 듄, 스파이더맨: 노 웨이 홈</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/TomHolland7.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>톰 홀랜드</Title>
                            <Year>카오스 워킹, 체리, 스파이더맨: 노 웨이 홈</Year>
                        </Text>
                    </Flex>
                </Nomination>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Thomasin.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>토마신 맥켄지</Title>
                            <Desc>올드, 파워 오브 도그, 라스트 나잇 인 소호, 더 저스티스 오브 버니 킹</Desc>
                        </Text>
                    </Flex>
                </Nomination>
            </Content>
        </Container>
    );
}

const Desc = styled.p`
margin: 5px;
text-align: left;
font-size: 1vw;
@media screen and (max-width: 1024px) {     
    font-size: 1.3vh;    
    width: auto;
    line-height: 1.2em;
}
`;

export default KoreanWinner;
