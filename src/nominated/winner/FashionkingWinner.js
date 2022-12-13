import React from "react";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Category, Choice, Nomination, Flex, Text, Awards, Trophy, Title, Year, Img } from "../../element";

const FashionkingWinner = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => {
            history.push("/namtaehyun")
        }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>패션왕상</Category>
            <Choice>우열을 가리기 힘든 치열한 승부였으므로 공동으로 상을 수여합니다 :)</Choice>

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
                        <Awards>
                            <Title>매트릭스: 리저렉션</Title>
                            <Year>라나 워쇼스키</Year>
                        </Awards>
                        <Trophy>🏆</Trophy>
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
                        <Awards>
                            <Title>킹스맨: 퍼스트 에이전트</Title>
                            <Year>매튜 본</Year>
                        </Awards>
                        <Trophy>🏆</Trophy>
                    </Flex>
                </Nomination>
            </Content>
        </Container>
    );
}

export default FashionkingWinner;
