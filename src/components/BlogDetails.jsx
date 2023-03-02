import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
	const { id } = useParams();

	const {
		data: blog,
		isLoading,
		error,
	} = useFetch(' https://react-blog-backend-omega.vercel.app/blogs/' + id);

	const history = useHistory();

	const handleClick = () => {
		fetch('https://react-blog-backend-omega.vercel.app/blogs/' + blog.id, {
			method: 'DELETE',
		}).then(() => {
			history.push('/');
		});
	};
	
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
					<button onClick={handleClick}>Delete</button>
				</article>
			)}
			{/* <h2>Blog Details - {id} </h2> */}
		</div>
	);
};

export default BlogDetails;
