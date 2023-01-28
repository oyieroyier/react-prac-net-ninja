const BlogList = ({ blogs, title }) => {
	return (
		<div className="blogList">
			<h2>{title}</h2>
			{blogs.map((e) => (
				<div className="blogs-body" key={e.id}>
					<div className="blog-preview">
						<h2>{e.title}</h2>
						<p>
							{e.body} <i>written by</i> <span>{e.author}</span>
						</p>
					</div>
					{/* <div className="del-btn">
						<button className="del" onClick={() => handleDelete(e.id)}>
							X
						</button>
					</div> */}
				</div>
			))}
		</div>
	);
};

export default BlogList;
