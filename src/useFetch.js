import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((r) => {
				if (!r.ok) {
					throw Error("Could not fetch data from that resource");
				}
				return r.json();
			})
			.then((data) => {
				setData(data);
				setIsLoading(false);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;
