import linkedin from 'public/linkedin logo.png'
import github from 'public/github logo.png'

import Image from 'next/image'

export default function Footer() {
    return (
        <>  
            <div className="footer">
                <div className="m-1">
                    <a href="https://github.com/RJGY" target="_blank">
                        <Image src={github} className="p-1" height="60" width="60" layout="intrinsic" alt="Logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/reese-gunardi-485ba6184/" target="_blank">
                        <Image src={linkedin} className="p-1" height="60" width="60" layout="intrinsic" alt="Logo" />
                    </a>
                    <p className="fs-5 white m-1">rjgy2yu@gmail.com</p>
                </div>
            </div>
            
        </>
    )
}