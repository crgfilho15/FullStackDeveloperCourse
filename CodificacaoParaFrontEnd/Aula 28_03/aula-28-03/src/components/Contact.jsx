import './Contact.module.css';
import PropTypes from 'prop-types';

export function Contact({pageName}) {
    return (
      <main>
        <h1>{pageName}</h1>
      </main>
    )
}

Contact.propTypes = {
  pageName: PropTypes.string.isRequired
};