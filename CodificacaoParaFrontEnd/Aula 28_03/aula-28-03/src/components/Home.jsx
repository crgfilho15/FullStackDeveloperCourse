import './Home.module.css';
import PropTypes from 'prop-types';

export function Home({pageName}) {
    return (
        <main>
            <h1>{pageName}</h1>
        </main>
    )
}

Home.propTypes = {
    pageName: PropTypes.string.isRequired
};