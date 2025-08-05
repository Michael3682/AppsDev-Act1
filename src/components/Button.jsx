import "../styles/button.css"

export default function Button() {
    return (
        <div className="contact--container">
            <h2 className="contact--title">Contact Me</h2>
            <div className="contact-button--container">
                <button className="contact-button--facebook">Facebook</button>
                <button className="contact-button--github">Github</button>
            </div>
        </div>
    )
}