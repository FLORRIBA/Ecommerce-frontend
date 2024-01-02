import logo from '../../assets/images/logos/LOGO3.png';
import videos from '../../assets/video/sea.mp4';

export default function banner() {
    return (
        <>
<div className="main-banner">
<div className="brand"> <img src={logo} alt=""/>

</div>


<video className="banner-video" autoPlay muted loop playsInline id="video-background">


    <source src={videos} type="video/mp4"/>

</video>

</div>
</>
    )
    }

