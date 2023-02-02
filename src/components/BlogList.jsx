import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
	return (
		<div className="blogList">
			<h2>{title}</h2>
			{blogs.map((e) => (
				<div className="blogs-body" key={e.id}>
					<div className="blog-preview">
						<Link to={`/blogs/${e.id}`} className="link">
							<h2>{e.title}</h2>
							<p>
								{e.preview} <i>written by</i> <span>{e.author}</span>
							</p>
						</Link>
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
