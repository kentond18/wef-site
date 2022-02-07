const NavDropdown = () => {
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
				Our Work
			</a>
			<ul
				className="dropdown-menu border-0 bg-light text-decoration-none"
				aria-labelledby="navbarDropdown"
			>
				<li>
					<Link href="/our-work/community-rural-outreaches">
						<a
							className={`nav-link ps-2 ${
								active == "community-rural-outreaches"
									? "active"
									: null
							}`}
						>
							Community and Rural Outreaches
						</a>
					</Link>
				</li>
				<li>
					<Link href="/our-work/school-screening-prog">
						<a
							className={`nav-link ps-2 ${
								active == "school-screening-prog"
									? "active"
									: null
							}`}
						>
							School Screening Programmes
						</a>
					</Link>
				</li>
				<li>
					<Link href="/our-work/research-develop">
						<a
							className={`nav-link ps-2 ${
								active == "research-develop" ? "active" : null
							}`}
						>
							Research and Development
						</a>
					</Link>
				</li>
				<li>
					<Link href="/our-work/conf-webinar-tips">
						<a
							className={`nav-link ps-2 ${
								active == "conf-webinar-tips" ? "active" : null
							}`}
						>
							Conferences, Webinars, and Eye Care Tips
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};
