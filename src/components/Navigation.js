import React from 'react';
import Classes from './Navigation.module.css';

const Navigation = () => {
	return (
		<>
			<div className={Classes.navbarContainer}>
				<div className={Classes.navbarBrandContainer}>
					<img src='' alt='logo' className={Classes.navbarBrandImage} />
				</div>
				<div className={Classes.navbarInputContainer}>
					<input type='text' name='search' className={Classes.navbarInput} />
				</div>
				<div className={Classes.navbarMenuContainer}></div>
			</div>
		</>
	);
};

export default Navigation;
