import React from 'react';
import ErrorBoundary from '../error-boundary/error-boundary';
import Hero from '../hero/hero';
import RowMovies from '../row-movies/row-movies';
function HomePage() {
	return (
		<div>
			<ErrorBoundary>
				<Hero />
			</ErrorBoundary>
			<ErrorBoundary>
				<RowMovies />
			</ErrorBoundary>
		</div>
	);
}

export default HomePage;
