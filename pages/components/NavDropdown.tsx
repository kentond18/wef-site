import { Page } from "../../types";
import NavLink from "./NavLink";

type Props = {
	active: string;
	links: Page;
};

const NavDropdown = ({ links, active }) => {
	return (
		<div className="nav-item dropdown">
			<a
				className="nav-link dropdown-toggle"
				href="#"
				id="navbarDropdown"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{links.name}
			</a>
			<ul
				className="dropdown-menu border-0 bg-light text-decoration-none"
				aria-labelledby="navbarDropdown"
			>
				{links.sublinks.map((sublink, index) => {
					return (
						<li key={index}>
							<NavLink
								title={sublink.name}
								route={sublink.link}
								active={active}
								classes="ps-2"
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default NavDropdown;
