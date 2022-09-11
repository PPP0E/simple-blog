import Link from "next/link";

import Logo from "./logo";
import style from "./main-navigation.module.css";

function MainNavigation() {
	return (
		<header className={style.header}>
			<Link href="/">
				<a>
					<Logo />
				</a>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href="/posts">Posts</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
