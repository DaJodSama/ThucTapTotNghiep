import styled from "styled-components";
import Posts from "../posts/Posts";

const Container = styled.div`
	flex: 9;
	display: flex;
	flex-wrap: wrap;
`;

export default function Post() {
	return (
		<Container>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
		</Container>
	);
}
