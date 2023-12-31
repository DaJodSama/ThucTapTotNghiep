import Header from "./components/header/Header";
import Post from "./components/post/Post";
import TopBar from "./components/menu/Menu";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import ListPosts from "./pages/listposts/ListPosts";
import Login from "./pages/login/Login";
import PostAdd from "./pages/post/PostAdd";
import PostDetail from "./pages/post/PostDetail";
import Register from "./pages/register/Register";
import SettingUser from "./pages/settinguser/SettingUser";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from './pages/listproduct/ProductList';

const App = () => {
	const user = false;
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route
					path="/register"
					element={user ? <Home /> : <Register />}
				/>
				<Route path="/login" element={user ? <Home /> : <Login />} />
				<Route
					path="/about"
					element={user ? <About /> : <Register />}
				/>
				{/* <Route path="/contact" element={user ? <Contact /> : <Register />} /> */}
				<Route
					path="/about"
					element={user ? <About /> : <Register />}
				/>
				<Route
					path="/product"
					element={user ? <ProductList /> : <Register />}
				/>
				<Route
					path="/settinguser"
					element={user ? <SettingUser /> : <Login />}
				/>
				<Route
					path="/post"
					element={user ? <ListPosts /> : <Login />}
				/>
				<Route
					path="/postadd"
					element={user ? <PostAdd /> : <Login />}
				/>
				<Route path="/post/:postId" element={<PostDetail />} />
			</Routes>
		</Router>
	);
};

export default App;
