import PostsGrid from "./posts-grid";
import style from "./all-posts.module.css";

function AllPosts(props) {
	return (
		<section className={style.posts}>
			<h1>All Posts</h1>
			<PostsGrid posts={props.posts} />
		</section>
	);
}

export default AllPosts;
