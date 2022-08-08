import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children}) => {
    return (
        <div className={s.container}>
            <h1>{title}</h1>
            {children}
        </div>
    )

}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;