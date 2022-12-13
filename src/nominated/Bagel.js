import React from "react";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Divide, Category, Choice, Nomination, Flex, Text, Title, Year, Img } from "../element";

const Bagel = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => {
            history.push("/bagel-winner")
        }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>베이글상</Category>
            <Choice>최고의 베이글남에게 주는 상</Choice>
            <Content>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/ChaosWalking.gif" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>톰 홀랜드</Title>
                            <Year>카오스 워킹</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/FarFromHome.gif" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>톰 홀랜드</Title>
                            <Year>스파이더맨: 노 웨이 홈</Year>
                        </Text>
                    </Flex>
                </Nomination>
            </Content>
        </Container>
    );
}

export default Bagel;
