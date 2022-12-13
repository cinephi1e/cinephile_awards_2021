import React from "react";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Divide, Category, Choice, Nomination, Flex, Text, Title, Year, Img } from "../element";

const Fashionking = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => {
            history.push("/fashionking-winner")
        }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>패션왕상</Category>
            <Choice>⟨인터스텔라⟩를 상대로 흥행에서 참패한 ⟨패션왕⟩의 이름을 따온 상으로 ⟨스파이더맨: 노 웨이 홈⟩ 덕분에 명예로운 죽음을 맞이한 작품에게 주는 상</Choice>

            <Content>
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

export default Fashionking;
