import React from "react";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Divide, Category, Choice, Nomination, Flex, Text, Title, Year, Img } from "../element";

const Kid = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => { history.push("/kid-winner") }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>아역상</Category>
            <Content>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/AlanKim.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>앨런 킴</Title>
                            <Year>미나리</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/MillicentSimmonds.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>밀리센트 시몬즈</Title>
                            <Year>콰이어트 플레이스 파트2</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/DevynMcDowell.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>데빈 맥도웰</Title>
                            <Year>아네트</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/LiaMcHugh.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>리아 맥휴</Title>
                            <Year>이터널스</Year>
                        </Text>
                    </Flex>
                </Nomination>
            </Content>
        </Container>
    );
}

export default Kid;
