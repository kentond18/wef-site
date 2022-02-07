import Link from "next/link";

const NavLink = ({ title, route, active }) => {
	if (active == title.toLowerCase()) {
		return (
			<Link aria-current="page" href={route}>
				<a className="nav-link active">{title}</a>
			</Link>
		);
	} else {
		return (
			<Link href={route}>
				<a className="nav-link">{title}</a>
			</Link>
		);
	}
};

export default NavLink;
