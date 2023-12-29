import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Annoucement from "../../components/annoucement/Annoucement";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
	flex: 1;
`;
const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
	${mobile({ height: "40vh" })}
`;
const InforContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	${mobile({ padding: "10px" })}
	${mobile({ width: "100%" })}
`;
const Title = styled.h1`
	font-weight: 200;
`;
const Desc = styled.p`
	margin: 20px 0px;
`;
const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;
const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	${mobile({ width: "100%" })}
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;
const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
`;
const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;
const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;
const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;

	&:hover {
		background-color: #f8f4f4;
	}
`;

const Product = () => {
	return (
		<Container>
			<Navbar />
			<Annoucement />
			<Wrapper>
				<ImgContainer>
					<Image src="https://cdn2.yame.vn/pimg/ao-thun-co-tron-y-nguyen-ban-18-ver93-0021413/355cd475-f9db-4601-4cd3-0019a4c0f804.jpg?w=540&h=756&c=true&ntf=false" />
				</ImgContainer>
				<InforContainer>
					<Title>Denim Jumpsuit</Title>
					<Desc>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Commodi excepturi quam quaerat facilis et
						voluptate sed, officiis vero explicabo dignissimos unde
						perspiciatis dicta ipsam quibusdam voluptatibus suscipit
						beatae. Magni, ipsam!
					</Desc>
					<Price>$20</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="blue" />
							<FilterColor color="grey" />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InforContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
