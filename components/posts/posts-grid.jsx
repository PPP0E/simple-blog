import PostItem from "./post-item";
import style from "./posts-grid.module.css";

function PostsGrid(props) {
	const { posts } = props;

	return (
		<ul className={style.grid}>
			{posts.map((post) => (
				<PostItem
					key={post.slug}
					post={post}
				/>
			))}
		</ul>
	);
}

export default PostsGrid;
