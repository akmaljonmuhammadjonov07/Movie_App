import React from 'react';
import { useParams } from 'react-router-dom';

function DetailedPage() {
	const { movieId } = useParams();
	console.log(movieId);

	return <div>{movieId}</div>;
}

export default DetailedPage;
