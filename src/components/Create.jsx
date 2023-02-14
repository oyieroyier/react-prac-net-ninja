import React, { useState } from "react";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("Bob Oyier");

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author }
		
		console.log(blog);
	};
	return (
		<div className="create">
			<h2>Add a new blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Body</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog Title</label>
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
				<button>Add Blog</button>
			</form>

			<p>{title}</p>
			<p>{body}</p>
			<p>{author}</p>
		</div>
	);
};

export default Create;
