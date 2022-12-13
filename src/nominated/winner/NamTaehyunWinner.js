import React from "react";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Category, Choice, Nomination, Flex, Text, Awards, Trophy, Title, Year, Img } from "../../element";

const NamTaehyunWinner = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => {
            history.push("/bagel")
        }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>남태현상</Category>
            <Choice>인상적인 발연기를 선보인 배우에게 주는 상</Choice>

            <Content>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Lily.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>릴리 로즈 뎁</Title>
                            <Year>보이저스</Year>
                        </Text>
                    </Flex>
                </Nomination>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Fionn.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Awards>
                            <Title>핀 화이트헤드</Title>
                            <Year>보이저스</Year>
                        </Awards>
                        <Trophy>🏆</Trophy>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Zendaya.jpeg" style={{
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
                            <Year>듄</Year>
                        </Text>
                    </Flex>
                </Nomination>
            </Content>
        </Container>
    );
}

export default NamTaehyunWinner;
