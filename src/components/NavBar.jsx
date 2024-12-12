import globeImage from '../images/Globe.svg';

export default function NavBar() {
    return (
        <>
            <header className='header'>
                <nav className='navbar'>
                    <img className='globe-img' src={globeImage} alt="globe" />
                    <h1 className='travel-journal'>my travel journal.</h1>
                </nav>
            </header>
        </>
    )
}