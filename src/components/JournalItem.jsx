import PropTypes from 'prop-types';
import mapPin from "../images/Fill 219.svg";

export default function JournalItem(props) {
    return (
        <>
            <article className="journal-entry">
                <div className="img-contatiner">
                    <img className='main-image' src={props.img.src} alt={props.img.alt} />
                </div>
                <div className="info-container">
                    <div className="location">
                        <img className="map-pin" src={mapPin} alt="pin" />
                        <p>{props.country}</p>
                        <a href={props.googleMapsLink}>View on Google Maps</a>
                    </div>
                    <h2 className="place">{props.title}</h2>
                    <p className="date">{props.dates}</p>
                    <p className="descr">
                        {props.text}
                    </p>
                </div>
            </article>
        </>
    );
}

// Add prop types validation
JournalItem.propTypes = {
    img: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }).isRequired,
    country: PropTypes.string.isRequired,
    googleMapsLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dates: PropTypes.string,
    text: PropTypes.string.isRequired
};