import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../../responsive";
import Header from "../../components/header/Header";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from './../../httpAxios';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;
const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;
const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
	color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
	${mobile({ display: "none" })}
`;
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`;
const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
	flex: 3;
`;
const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;
const Image = styled.img`
	width: 200px;
`;
const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;
const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;
const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	//height:50vh;
`;
const SummaryTitle = styled.h1`
	font-weight: 200;
`;
const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
`;

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const [stripeToken, setStripeToken] = useState(null);

	const onToken = (token) => {
		setStripeToken(token);
	};
	useEffect(()=>{
		const makeRequest=async ()=>{
			try{
				const res=await userRequest("")
			}catch(err){}
		}
	},[stripeToken])
	console.log(stripeToken);
	return (
		<Container>
			<Header />
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Giỏ Hàng(2)</TopText>
						<TopText>Yêu Thích (0)</TopText>
					</TopTexts>
					<TopButton type="filled">CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						{cart.products.map((product) => (
							<Product>
								<ProductDetail>
									<Image src={product.img} />
									<Details>
										<ProductName>
											<b>Product:</b> {product.title}
										</ProductName>
										<ProductID>
											<b>ID:</b> {product._id}
										</ProductID>
										<ProductColor color={product.color} />
										<ProductSize>
											<b>Size:</b> {product.size}
										</ProductSize>
									</Details>
								</ProductDetail>
								<PriceDetail>
									<ProductAmountContainer>
										<Add />
										<ProductAmount>
											{product.quantity}
										</ProductAmount>
										<Remove />
									</ProductAmountContainer>
									<ProductPrice>
										$ {product.price * product.quantity}
									</ProductPrice>
								</PriceDetail>
							</Product>
						))}
						<Hr />
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>
								Estimated Shipping
							</SummaryItemText>
							<SummaryItemPrice>$ 5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<StripeCheckout
							name="DaJod Shop"
							image="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/362950566_1630927964054521_7084906538356959359_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=0gRMiC6S5pMAX9aU26s&_nc_ht=scontent.fsgn5-5.fna&cb_e2o_trans=t&oh=00_AfAnEtalrPJ42zpfgdT5gj7LflFLMiE8ViP-T7jbx9FeAw&oe=65A94313"
							billingAddress
							shippingAddress
							description={`Your total is $${cart.total}`}
							amount={cart.total * 100}
							token={onToken}
							stripeKey={KEY}>
							<Button>CHECKOUT NOW</Button>
						</StripeCheckout>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
