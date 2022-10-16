import PropTypes from 'prop-types'
import '../Sass/Description.sass'

export const Description = ({Storage, Users, Memory}) => {
  return (
    <div className='Card--Description border-top-bottom'>
        <span>{Storage} TB Storage</span>
        <span className='border-top-bottom'>{Users} Users Allowed</span>
        <span>Send up to {Memory} GB</span>
    </div>
  )
};

Description.proptypes = {
    Storage: PropTypes.number.isRequired,
    Users: PropTypes.number.isRequired,
    Memory: PropTypes.number.isRequired,
};

