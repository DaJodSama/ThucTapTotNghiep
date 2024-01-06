import styled from "styled-components";
import Posts from "./Posts";

const Container = styled.div`
	flex: 9;
	display: flex;
	flex-wrap: wrap;
`;

export default function Post({posts}) {
	return (
		<Container>
			{posts.map((p)=>(
				<Posts posts={p}/>
			))}
		</Container>
	);
}
