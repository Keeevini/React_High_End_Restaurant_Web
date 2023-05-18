import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './Chef.css';

const Chef = () => (
	<div className="app__bg app__wrapper section__padding">
		<div className="app__wrapper_img app__wrapper_img-reverse">
			<img src={images.chef} alt="chef" />
		</div>

		<div className="app__wrapper_info">
			<SubHeading title="Chef's Word" />
			<h1 className="headtext__cormorant">What we believe in</h1>
			<div className="app__chef-content">
				<div className="app__chef-content_quote">
					<img src={images.quote} alt="quote" />
					<p className="p__opensans">With a deep appreciation for the art of sushi making, we strive to</p>
				</div>
				<p className="p__opensans">create a culinary experience that transcends taste alone. Our team of skilled chefs is dedicated to delivering the finest quality sushi, prepared with precision and creativity. We embrace the principles of omotenashi, providing warm hospitality and personalized service to ensure that every guest feels welcomed and cared for. We invite you to join us on a journey of exquisite flavors and impeccable craftsmanship, where every dish tells a story of passion and dedication.</p>
			</div>
			<div className="app__chef-sign">
				<p>Kevin Luo</p>
				<p className="p__opensans">Chef & Founder</p>
				<img src={images.signature} alt="signature" />
			</div>
		</div>
	</div>
);

export default Chef;