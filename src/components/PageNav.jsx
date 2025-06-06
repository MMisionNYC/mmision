import React from 'react';
import DesktopNavigation from "../components/DesktopNavigation";
import MobileNavigation from "../components/MobileNavigation";

function PageNav() {
	return (
		<div>
            <DesktopNavigation />
            <MobileNavigation />
        </div>
	);
}

export default PageNav;
