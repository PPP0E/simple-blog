import Head from "next/head";
import { Fragment } from "react";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
	return (
		<Fragment>
			<Head>
				<title>All Posts</title>
				<meta
					name="description"
					content="All posts of the blog"
				/>
			</Head>
			<AllPosts posts={props.posts} />
		</Fragment>
	);
}

export function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts,
		},
		revalidate: 60,
	};
}

export default AllPostsPage;
