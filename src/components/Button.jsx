import "../styles/button.css"

export default function Button() {
    return (
        <div className="contact--container">
            <h2 className="contact--title">Contact Me</h2>
            <div className="contact-button--container">
                <button className="contact-button--facebook" onClick="window.open('https://www.facebook.com/michael.gulfan.12')">Facebook</button>
                <button className="contact-button--github" onClick="('https://github.com/Michael3682')">Github</button>
            </div>
        </div>
    )
}
