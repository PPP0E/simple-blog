import ReactMarkdown from "react-markdown";
import { PrismLight as CodeSnippet } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";

import PostHeader from "./post-header";
import style from "./post-content.module.css";
import Image from "next/image";

CodeSnippet.registerLanguage("js", js);

function PostContent(props) {
	const { post } = props;

	const imagePath = `/images/posts/${post.slug}/${post.image}`;
	console.log(imagePath);
	const customRenderers = {
		p(paragraph) {
			const { node } = paragraph;
			if (node.children[0].tagName === "img") {
				const image = node.children[0];
				return (
					<div className={style.image}>
						<Image
							src={`/images/posts/${post.slug}/${image.properties.src}`}
							alt={image.alt}
							width={600}
							height={300}
						/>
					</div>
				);
			}

			return <p>{paragraph.children}</p>;
		},
		code(code) {
			const { className, children } = code;
			const language = className.split("-")[1];
			return (
				<CodeSnippet
					style={atomDark}
					language={language}
					children={children}
				/>
			);
		},
	};

	return (
		<article className={style.content}>
			<PostHeader
				title={post.title}
				image={imagePath}
			/>
			<ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
		</article>
	);
}
export default PostContent;
