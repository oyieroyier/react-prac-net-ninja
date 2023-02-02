import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
	const { id } = useParams();

	const {
		data: blog,
		isLoading,
		error,
	} = useFetch(" https://api.npoint.io/1961c31d4e500e32b218/blogs/" + id);

	return (
		<div className="blog-details">
			{isLoading && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>
						<span>Written by </span>
						{blog.author}
					</p>
					<div>{blog.body}</div>
				</article>
			)}
			{/* <h2>Blog Details - {id} </h2> */}
		</div>
	);
};

export default BlogDetails;
