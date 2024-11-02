import PropTypes from 'prop-types';
import './spinner.scss';
PropTypes;
const Spinner = ({ width = '50px' }) => {
	return (
		<div className='center'>
			<div className='loader' style={{ width }} />
		</div>
	);
};
Spinner.PropTypes = {
	width: PropTypes.number,
};
export default Spinner;
