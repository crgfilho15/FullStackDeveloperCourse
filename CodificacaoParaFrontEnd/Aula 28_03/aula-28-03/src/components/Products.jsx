import './Products.module.css';
import PropTypes from 'prop-types';

export function Products({pageName}) {
    return (
      <main>
        <h1>{pageName}</h1>
      </main>
    )
}

Products.propTypes = {
    pageName: PropTypes.string.isRequired
};