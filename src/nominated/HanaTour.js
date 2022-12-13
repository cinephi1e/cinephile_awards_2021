import React from "react";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Divide, Category, Choice, Nomination, Flex, Text, Title, Year, Img } from "../element";

const HanaTour = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => {
            history.push("/hanatour-winner")
        }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>하나투어상</Category>
            <Choice>여행욕구를 대리만족 시켜준 작품에게 주는 상</Choice>

            <Content>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Nomadland.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>노매드랜드</Title>
                            <Year>미국 사우스다코타</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/TheFrenchDispatch.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>프렌치 디스패치</Title>
                            <Year>프랑스 블라제</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/TheHandofGod.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>신의 손</Title>
                            <Year>이탈리아 나폴리</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/LastNightInSoho.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>라스트 나잇 인 소호</Title>
                            <Year>영국 런던</Year>
                        </Text>
                    </Flex>
                </Nomination>
            </Content>
        </Container>
    );
}

export default HanaTour;
