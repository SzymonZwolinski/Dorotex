import React, { Component } from 'react';
import './socials.css';

export class Socials extends Component {
    static displayName = Socials.name;


    render() {
        return (
            <div>
                <div class="socials-text">Zapraszam</div>
                <div class="row-content-socials">
                
                    <div class="social-icons">

                        <a class="share-icon"
                            href="https://www.facebook.com/dorotarusniakphotography"
                            target="_blank"
                            rel="noopener"
                        >
                            <ion-icon  name="logo-facebook"></ion-icon>
                        </a>

                        <a class="share-icon"
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener"
                        >
                            <ion-icon  name="logo-instagram"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
