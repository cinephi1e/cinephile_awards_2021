import React from "react";
import { useHistory } from "react-router";
import { Container, Flex, Content, Lists, Divide, Category, Name, Next} from "./credit";


const Credit_03 = (props) => {
    const history = useHistory();

    return (
        <Container style={{ backgroundColor: "black" }}
            onClick={() => { history.push("/theend") }}>
            <Flex>
                <Content>
                    <Lists>
                        <Divide><Category>ㅇ</Category></Divide>
                        <Divide>
                            <Name>아네트(2021)</Name>
                            <Name>애플(2020)</Name>
                            <Name>어른들은 몰라요(2020)</Name>
                            <Name>엔칸토(2021)</Name>
                            <Name>연애 빠진 로맨스(2021)</Name>
                            <Name>위왓치유(2020)</Name>
                            <Name>유다 그리고 블랙 메시아(2021)</Name>
                            <Name>이터널스(2021)</Name>
                            <Name>인질(2021)</Name>
                            <Name>인천스텔라(2020)</Name>
                            <Name>인트로덕션(2020)</Name>
                        </Divide>
                    </Lists>

                    <Lists>
                        <Divide><Category>ㅈ</Category></Divide>
                        <Divide>
                            <Name>자산어보(2021)</Name>
                        </Divide>
                    </Lists>
                    <Lists>
                        <Divide><Category>ㅋ</Category></Divide>
                        <Divide>
                            <Name>카오스 워킹(2021)</Name>
                            <Name>캐시트럭(2021)</Name>
                            <Name>콰이어트 플레이스 파트2(2020)</Name>
                            <Name>쿠오바디스, 아이다?(2020)</Name>
                            <Name>크루엘라(2021)</Name>
                            <Name>클라이밍(2020)</Name>
                            <Name>킬러의 보디가드2(2021)</Name>
                            <Name>킹스맨: 퍼스트 에이전트(2021)</Name>
                        </Divide>
                    </Lists>
                </Content>

                <Content>
                    <Lists>
                        <Divide><Category>ㅌ</Category></Divide>
                        <Divide>
                            <Name>티탄(2021)</Name>
                            <Name>틱, 틱...붐!(2021)</Name>
                        </Divide>
                    </Lists>

                    <Lists>
                        <Divide><Category>ㅍ</Category></Divide>
                        <Divide>
                            <Name>파 프롬 더 트리(2021)</Name>
                            <Name>파워 오브 도그(2021)</Name>
                            <Name>패싱(2021)</Name>
                            <Name>퍼스트 카우(2019)</Name>
                            <Name>페어웰(2019)</Name>
                            <Name>프라미싱 영 우먼(2020)</Name>
                            <Name>프렌치 디스패치(2021)</Name>
                            <Name>프리가이(2021)</Name>
                            <Name>피닉스(2014)</Name>
                            <Name>피부를 판 남자(2020)</Name>
                        </Divide>
                    </Lists>
                </Content>
            </Flex>
            <Next>❯ ❯ ❯ 크레딧 마저 보기 ❯ ❯ ❯</Next>
        </Container>
    );
}


export default Credit_03;
