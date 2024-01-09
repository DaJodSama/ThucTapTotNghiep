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
import { useLocation } from "react-router-dom";
import ListPosts from './../listposts/ListPosts';

const Container = styled.div`
	display: flex;
`;
const Home = () => {
	
	return (
		<div>
			<Slider />
			<Categories />
			<Products />
			<ListPosts/>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
