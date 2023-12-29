import React from "react";
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

const Container = styled.div`
	display: flex;
`;
const Home = () => {
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
