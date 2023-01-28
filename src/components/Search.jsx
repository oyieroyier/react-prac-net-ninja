import React, { useState } from "react";
function Search({ products }) {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
		let results = products.filter((product) => {
			return (
				product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
				product.price.toString().includes(searchQuery)
			);
		});
		setSearchResults(results);
	};
	return (
		<div id="search">
			<input
				type="text"
				placeholder="Search products"
				onChange={handleSearch}
				className="input"
			/>
			<ul>
				{searchResults.map((product) => (
					<li key={product.id}>
						{product.name} - {product.category} - ${product.price}
					</li>
				))}
			</ul>
		</div>
	);
}
export default Search;
