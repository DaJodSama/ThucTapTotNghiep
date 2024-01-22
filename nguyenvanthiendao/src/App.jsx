import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import ListPosts from "./pages/listposts/ListPosts";
import Login from "./pages/login/Login";
import PostAdd from "./pages/post/PostAdd";
import PostDetail from "./pages/post/PostDetail";
import Register from "./pages/register/Register";
import SettingUser from "./pages/settinguser/SettingUser";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import ProductList from "./pages/listproduct/ProductList";
import ProductDetail from "./pages/productdetail/ProductDetail";
import Success from "./pages/success/Success";
import { useSelector } from "react-redux";

const App = () => {
	const user = useSelector((state) => state.user.currentUser);
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>

				<Route path="/about" element={<About />} />
				{/* <Route path="/contact" element={user ? <Contact /> : <Register />} /> */}

				{/* PRODUCT */}
				<Route path="/products" element={<ProductList />} />
				<Route path="/products/:category" element={<ProductList />} />
				<Route path="/product/:id" element={<ProductDetail />} />

				{/* USER */}
				<Route path="/settinguser" element={<SettingUser />} />

				{/* POST */}
				<Route path="/post" element={<ListPosts />} />
				<Route path="/postadd" element={<PostAdd />} />
				<Route path="/post/:postId" element={<PostDetail />} />

				{/* CART */}
				<Route path="/cart" element={<Cart />} />

				{/* SUCCESS */}
				<Route path="/success" element={<Success />} />
			</Routes>
		</Router>
	);
};

export default App;
