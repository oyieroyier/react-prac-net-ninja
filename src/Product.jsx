import React from "react";

const Product = () => {
	fetch(
		"https://api.bluecartapi.com/request?api_key=E2E784511C5D4787B579BA8EA0E735A2&search_term=highlighter+pens&type=search"
	)
		.then((r) => r.json())
		.then((data) => console.log(data));
	return <div></div>;
};
export default Product;
