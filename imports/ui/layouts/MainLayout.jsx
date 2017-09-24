import React from 'react';

import NavBar from '../partials/NavBar.jsx';
import Footer from '../partials/Footer.jsx';

export const MainLayout = ({content}) => (
	<div className="main-layout">
		<NavBar />
		<main>
			{content}
		</main>
		<Footer />
	</div>
);