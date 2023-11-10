import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
   


const Navbar = () => {
	return (
		<>
			<Nav>

				<NavMenu>
                    <navLink to="/index" activeStyle>
                        
                    </navLink>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Treatment
					</NavLink>
					<NavLink to="/blogs" activeStyle>
						Possible Treatments
					</NavLink>
					<NavLink to="/sign-up" activeStyle>
						Dual Diagnosis Treatments
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
