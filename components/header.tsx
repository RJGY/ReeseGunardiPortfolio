import Image from 'next/image'
import logo from 'public/logo.png';
import { Button } from 'react-bootstrap';

export default function Header() {
    return (
        <>
            <div className="header">
                <nav className="navbar navbar-expand-lg dark-navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><Image src={logo} height="60" width="60" layout="intrinsic" alt="Logo" /></a>
                        <div className="navbar">
                            <ul className="navbar-nav .ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-light fs-4 m-1" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light fs-4 m-1" href="#">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light fs-4 m-1" href="#">Work</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light fs-4 m-1" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light fs-4 p-1 m-1" href="#">
                                        <Button variant="outline-light" size="lg">
                                            Resume
                                        </Button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}