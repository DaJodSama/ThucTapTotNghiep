import React, { useEffect, useState } from "react";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import Products from "../../components/product/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import styled from "styled-components";
import ListPosts from './../listposts/ListPosts';
import Header from "../../components/header/Header";

const Container = styled.div`
	display: flex;
`;
const Home = () => {
	
	return (
		<div>
			<Header/>
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
