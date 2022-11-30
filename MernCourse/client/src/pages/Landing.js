import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<img src={logo} alt='jobify' classname='logo' />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						job <span>tracking</span> App
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
						quas suscipit sed placeat impedit maxime esse, repellendus explicabo
						similique eaque architecto blanditiis, sequi reiciendis fugit quia
						repudiandae minus? vero.
					</p>
					<button className='btn btn-hero'>Login/Register</button>
				</div>
				<img src={main} alt='main img' className='img main-img' />
			</div>
		</Wrapper>
	);
};

export default Landing;
