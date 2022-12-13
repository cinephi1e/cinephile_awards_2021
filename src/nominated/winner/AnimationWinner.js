import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Category, Choice, Nomination, Flex, Text, Awards, Trophy, Title, Year, Img } from "../../element";

const AnimationWinner = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => { history.push("/animal") }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>애니메이션상</Category>

            <Content>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Soul.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Awards>
                            <Title>소울</Title>
                            <Year>피트 닥터, 켐프 파워스</Year>
                        </Awards>
                        <Trophy>🏆</Trophy>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Luca.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>루카</Title>
                            <Year>에린코 카사로사</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Encanto.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>엔칸토</Title>
                            <Year>자레드 부시, 바이론 하워드, 채리스 카스트로 스미스</Year>
                        </Text>
                    </Flex>
                </Nomination>
            </Content>
        </Container>
    );
}

export default AnimationWinner;
