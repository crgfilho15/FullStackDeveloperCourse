import './History.module.css';
import PropTypes from 'prop-types';

export function History({pageName}) {
    return (
      <main>
        <h1>{pageName}</h1>
      </main>
    )
}

History.propTypes = {
  pageName: PropTypes.string.isRequired
};