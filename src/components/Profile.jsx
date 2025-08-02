import ProfilePicture from "./ProfilePicture"
import AboutMe from "./AboutMe"
import Skills from "./Skills"
import Button from "./Button"
import "../styles/profile.css"

export default function Profile() {
    return (
        <div className="profile--container">
            <ProfilePicture />
            <AboutMe />
            <Skills />
            <Button />
        </div>
    )
}