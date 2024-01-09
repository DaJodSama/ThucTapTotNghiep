import styled from "styled-components";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import httpAxios from "../../httpAxios";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Container = styled.div`
	display: flex;
`;

export default function ListPosts() {
	const [posts, setPosts] = useState([]);
	const { search } = useLocation();

	useEffect(() => {
		const getPost = async () => {
			const res = await httpAxios.get("/posts" + search);
			setPosts(res.data);
		};
		getPost();
	}, [search]);
	return (
		<>
			<Container>
				<Post posts={posts} />
				<Sidebar />
			</Container>
			<Footer />
		</>
	);
}
