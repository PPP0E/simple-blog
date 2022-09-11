import Image from "next/image";

import style from "./hero.module.css";

function Hero() {
	return (
		<section className={style.hero}>
			<div className={style.image}>
				<Image
					src="/images/site/profile.png"
					alt="An image showing Berzan"
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, Im Berzan</h1>
			<p>
				My blog is about coding, all types of coding, and my journey of
				coding...
			</p>
		</section>
	);
}

export default Hero;
