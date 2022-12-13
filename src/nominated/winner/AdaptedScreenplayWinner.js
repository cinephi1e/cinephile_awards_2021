import React from "react";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Category, Choice, Nomination, Flex, Text, Awards, Trophy, Title, Year, Img } from "../../element";

const AdaptedScreenplayWinner = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => { history.push("/animation") }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>각색상</Category>
            <Content>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Dune.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>듄</Title>
                            <Year>드니 빌뇌브</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/ThePowerofDog.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Awards>
                            <Title>파워 오브 도그</Title>
                            <Year>제인 캠피온</Year>
                        </Awards>
                        <Trophy>🏆</Trophy>
                    </Flex>
                </Nomination>
            </Content>
        </Container>
    );
}

export default AdaptedScreenplayWinner;
