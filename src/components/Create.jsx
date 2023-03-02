import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Bob Oyier');
	const [isPending, setIsPending] = useState(false);
	const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };
		setIsPending(true);

		fetch('https://react-blog-backend-omega.vercel.app/blogs/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log('new blog added successfully');
			setIsPending(false);
			// history.go(-1)
			history.push('/');
		});

	};
	return (
		<div className="create">
			<h2>Add a new blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Title</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog Body</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label>Blog Author</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="Eva Mueke">Eva Mueke</option>
					<option value="Sumeya Hassan">Sumeya Hassan</option>
					<option value="Ogada Ogada">Ogada Ogada</option>
					<option value="Chemweno Ian">Chemweno Ian</option>
					<option value="Prince Daniel">Prince Daniel</option>
					<option value="Fatuma Abdullrahman">Fatuma Abdullrahman</option>
					<option value="Kimathi Njoki">Kimathi Njoki</option>
					<option value="Robert Wierurch">Robert Wierurch</option>
					<option value="Bob Oyier">Bob Oyier</option>
					<option value="Nyokabi Kamau">Nyokabi Kamau</option>
				</select>
				{!isPending && <button>Add Blog</button>}
				{isPending && <button disabled>Adding blog...</button>}
			</form>

			<p>{title}</p>
			<p>{body}</p>
			<p>{author}</p>
		</div>
	);
};

export default Create;
