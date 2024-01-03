import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Annoucement from "../../components/annoucement/Annoucement";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/Categories";
import Products from "../../components/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import TopBar from "../../components/topbar/TopBar";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import styled from "styled-components";
import axios from "axios"

const Container = styled.div`
	display: flex;
`;
const Home = () => {
	const [post,setPosts]=useState([]);

	useEffect(()=>{
		const fetchPosts=async ()=>{
			const url="http://localhost:5000/api/posts";
			const res = await axios.get(url)
			console.log(res)
		}
		fetchPosts();
	},[])
	return (
		<div>
			<Slider />
			<Categories />
			<Products />
			<Container>
				<Post />
				<Sidebar />
			</Container>

			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
