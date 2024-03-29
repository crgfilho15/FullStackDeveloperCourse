import './Mission.module.css';
import PropTypes from 'prop-types';

export function Mission({pageName}) {
    return (
      <main>
        <h1>{pageName}</h1>
      </main>
    )
}

Mission.propTypes = {
    pageName: PropTypes.string.isRequired
};