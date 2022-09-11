import Head from "next/head";
import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Berzans Blog</title>
				<meta
					name="description"
					content="My blog about programming"
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</Fragment>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
		revalidate: 60,
	};
}

export default HomePage;
