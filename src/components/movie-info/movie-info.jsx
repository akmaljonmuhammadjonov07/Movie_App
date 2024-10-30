import './movie-info.scss';

const MovieInfo = () => {
	return (
		<div className='movieinfo'>
			<img src='/image1.svg' alt='movie' />

			<div className='movieinfo-descr'>
				<h1>Movie Title</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto enim,
					deleniti quis unde rerum veritatis ex expedita quisquam voluptatibus
					error deserunt cumque laudantium quos similique officiis? Totam
					veritatis nesciunt quod!
				</p>
			</div>
		</div>
	);
};

export default MovieInfo;
