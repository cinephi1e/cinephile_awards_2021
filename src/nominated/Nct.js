import React from "react";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Divide, Category, Choice, Nomination, Flex, Text, Title, Year, Img } from "../element";

const Nct = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => {
            history.push("/nct-winner")
        }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>엔시티상</Category>
            <Choice>생각보다 흥행이 저조했던 작품에게 주는 상</Choice>

            <Content>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/ThreeSisters.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>세자매</Title>
                            <Year>이승원</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/TheLastDuel.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>라스트 듀얼</Title>
                            <Year>리들리 스콧</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Matrix.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>매트릭스: 리저렉션</Title>
                            <Year>라나 워쇼스키</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Kingsman.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>킹스맨: 퍼스트 에이전트</Title>
                            <Year>매튜 본</Year>
                        </Text>
                    </Flex>
                </Nomination>

            </Content>
        </Container>
    );
}

export default Nct;
