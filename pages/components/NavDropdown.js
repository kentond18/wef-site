import NavLink from "./NavLink";

const NavDropdown = ({ sublinks, active }) => {
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
				{sublinks.name}
			</a>
			<ul
				className="dropdown-menu border-0 bg-light text-decoration-none"
				aria-labelledby="navbarDropdown"
			>
				{sublinks.sublinks.map((link, index) => {
					return (
						<li key={index}>
							<NavLink
								title={link.name}
								route={link.link}
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
