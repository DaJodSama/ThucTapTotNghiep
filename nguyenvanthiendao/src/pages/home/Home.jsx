import React, { useEffect, useState } from "react";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import Products from "../../components/product/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import styled from "styled-components";
import httpAxios from "../../httpAxios";

const Container = styled.div`
	display: flex;
`;
const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPost = async () => {
			const res = await httpAxios.get("/posts");
			setPosts(res.data);
		};
		getPost();
	}, []);
	return (
		<div>
			<Slider />
			<Categories />
			<Products />
			<Container>
				<Post posts={posts}/>
				<Sidebar />
			</Container>

			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
