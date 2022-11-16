import React from "react";
import Button from 'react-bootstrap/Button';

import img from "../images/image.jpeg"

function Info() {
    return (
        <div className="info">
            <img src={img} className="img-ayush" />
            <div className="info-details">
                <h1>Ayush Parui</h1>
                <h3>Frontend Developer</h3>
                <p>ayushparui.codes</p>
                <div className="buttons">
                    <Button variant="light" className="buttons-b" href="">
                        <i class="bi bi-envelope fa-sm"></i>
                        <strong>Email</strong>
                    </Button>{' '}
                    <Button variant="primary" className="buttons-b" href="https://www.linkedin.com/in/ayushparui342/">
                        <i class="bi bi-linkedin fa-sm"></i>
                        <strong>LinkedIn</strong>
                    </Button>{' '}
                </div>
            </div>
        </div>
    )
}
export default Info