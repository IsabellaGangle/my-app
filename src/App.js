import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {
	return (
    <div>
        <nav class="navBar">
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/index' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
		</Router>
        </nav>
    </div>
	);
}

export default App;
