import ProfileImage from "../assets/profile_image.jpg"

export default function ProfilePicture() {
    return (
        <div className="profile-image--container">
            <img className="profile-image" src={ProfileImage} alt="profile-picture" width={200} height={200} />
        </div>
    )
}