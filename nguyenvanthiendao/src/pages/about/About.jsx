import {
	AutorenewOutlined,
	EdgesensorHighOutlined,
	FireTruck,
	PermPhoneMsgOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Introduce = styled.div``;
const Title = styled.h1`
	padding: 20px;
	text-align: center;
`;
const ContentTop = styled.div`
	margin-bottom: 40px;
`;
const ContentBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 60px;
`;
const ContainerText = styled.div``;
const Item = styled.div``;
const TextTop = styled.span`
	font-weight: bold;
	font-size: 12px;
	margin-bottom: 15px;
`;
const TextBottom = styled.span`
	margin-top: 50px;
`;

export const About = () => {
	return (
		<>
			<Container>
				<Introduce>
					<Title>Giới thiệu</Title>

					<ContentTop>
						<p>
							Cửa hàng được thành lập từ năm 1960 trải qua hơn 50
							năm phấn đấu và trưởng thành Công ty đã không ngừng
							lớn mạnh, tích lũy được nhiều kinh nghiệm trong sản
							xuất kinh doanh. Với đội ngũ nhân viên giàu kinh
							nghiệm, chiến lược kinh doanh tốt, đội ngũ thiết kế
							được đào tạo chuyên ngành có năng lực và lực lượng
							nhân viên giỏi tay nghề Cửa hàng&nbsp; đã tiến bước
							vững chắc và phát triển liên tục để giữ vững uy tín
							và chất lượng xứng đáng với niềm tin yêu của người
							tiêu dùng.
						</p>
						<p>
							Công ty chính thức hoạt động dưới hình thức Cửa hàng
							từ ngày 20/01/2004 theo Giấy chứng nhận đăng ký kinh
							doanh số 012348765 do Sở Kế hoạch và đầu tư thành
							phố Hà Nội cấp và thay đổi lần thứ bảy ngày
							09/05/2018. Các hoạt động sản xuất kinh doanh chính
							bao gồm:
						</p>
						<ul>
							<li>
								&nbsp;Kinh doanh xuất nhập khẩu: thời trang nam
								nữ, phụ kiện, quần áo,&nbsp;sản phẩm chuyên
								ngành, hàng hoá tiêu dùng và các sản phẩm hàng
								hoá khác.&nbsp;
							</li>
							<li>
								&nbsp;Đầu tư xây dựng, cho thuê văn phòng, nhà
								ở, trung tâm thương mại.
							</li>
							<li>
								&nbsp;Kinh doanh các ngành nghề khác không bị
								cấm theo các quy định của pháp luật.
							</li>
						</ul>
						<p>
							Sản phẩm của chúng tôi&nbsp;liên tục được người tiêu
							dùng mến mộ và bình chọn là “Hàng Việt nam chất
							lượng cao”.
						</p>
					</ContentTop>
				</Introduce>
				<hr></hr>
				<ContentBottom>
					<ContainerText>
						<Item>
							<FireTruck />
							<TextTop>MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC</TextTop>
						</Item>
						<TextBottom>Giảm phí vận chuyển đến 50%</TextBottom>
					</ContainerText>
					<ContainerText>
						<Item>
							<AutorenewOutlined />
							<TextTop>HOÀN 100% TIỀN MUA HÀNG</TextTop>
						</Item>
						<TextBottom>Trong vòng 7 ngày</TextBottom>
					</ContainerText>
					<ContainerText>
						<Item>
							<EdgesensorHighOutlined />
							<TextTop>ĐẶT HÀNG TRỰC TUYẾN DỄ DÀNG</TextTop>
						</Item>
						<TextBottom>SĐT: 0910 000 000</TextBottom>
					</ContainerText>
					<ContainerText>
						<Item>
							<PermPhoneMsgOutlined />
							<TextTop>TƯ VẤN CHĂM SÓC TẬN TÌNH</TextTop>
						</Item>
						<TextBottom>Chăm sóc 24/24</TextBottom>
					</ContainerText>
				</ContentBottom>
			</Container>
		</>
	);
};
export default About;
