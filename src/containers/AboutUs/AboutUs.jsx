import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
	<div className="app__aboutus app__bg flex__center section__padding" id="about">
		<div className="app__aboutus-overlay flex__center">
			<img src={images.G} alt="g letter" />
		</div>

		<div className="app__aboutus-content flex__center">
			<div className="app__aboutus-content_about">
				<h1 className="headtext__cormorant">About Us</h1>
				<img src={images.spoon} alt="about_spoon" className="spoon_img" />
				<p className="p__opensans">Diamond Net is more than just a restaurant - it's a destination for sushi lovers. Our menu features a diverse selection of sushi and other Japanese dishes, all prepared with an unparalleled attention to detail. Whether you're looking for a romantic evening out, a memorable dining experience with friends and family, or an exploration of the artistry and flavors of authentic Japanese cuisine, Diamond Net offers an inviting ambiance and exceptional service to elevate your culinary journey.</p>
				<button type="button" className="custom__button">Know More</button>

			</div>

			<div className="app__aboutus-content_knife flex__center">
				<img src={images.knife} alt="about_knife"/>
			</div>

			<div className="app__aboutus-content_history">
				<h1 className="headtext__cormorant">Our History</h1>
				<img src={images.spoon} alt="about_spoon" className="spoon_img" />
				<p className="p__opensans">Our story began with a simple mission - to create a sushi restaurant that would stand apart from the rest. Over the years, we have refined our menu, honed our techniques, and created an atmosphere that is truly unique. Today, Diamond Net is proud to be a destination for sushi enthusiasts from around the world, where our dedication to culinary excellence and unwavering commitment to exceptional service continue to shape unforgettable dining experiences.</p>
				<button type="button" className="custom__button">Know More</button>

			</div>

		</div>
	</div>



);


export default AboutUs;