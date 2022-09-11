import PostsGrid from "../posts/posts-grid";
import style from "./featured-posts.module.css";

function FeaturedPosts(props) {
	return (
		<section className={style.latest}>
			<h2>Featured Posts</h2>
			<PostsGrid posts={props.posts} />
		</section>
	);
}

export default FeaturedPosts;
