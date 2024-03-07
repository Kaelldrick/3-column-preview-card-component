import '../styles/Card.css'

export function Card({ color, logo, title, text, children }) {
    return (
        <>
            <div className={`card ${color}`}>
                <div className="card__logo">
                    <img src={logo} alt="icono de sedans" />
                </div>
                <div className="card__title">
                    <h1>{title}</h1>
                </div>
                <div className="card__text">
                    <p>{text}</p>
                </div>
                <div className="card__button">
                    {children}
                </div>
            </div>
        </>
    )
}