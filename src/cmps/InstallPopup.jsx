import React, { useEffect, useState } from 'react';

export default function InstallPopup() {
    const [isAppInstalled, setIsAppInstalled] = useState(false)

    useEffect(() => {
        // variable store event
        window.deferredPrompt = {};
        window.addEventListener("beforeinstallprompt", (e) => {
            // this event does not fire if the application is already installed
            // then your popup wil be still hidden ;)
            setTimeout(() => {
                setIsAppInstalled(true)
            }, 3000);
            e.preventDefault();

            // store install avaliable event
            window.deferredPrompt = e;
        });

        // if standalone android OR safari
        if (
            window.matchMedia("(display-mode: standalone)").matches ||
            window.navigator.standalone === true
        ) {
            // hide the popup
            setIsAppInstalled(false)
        }

        // do action when finished the install
        window.addEventListener("appinstalled", () => {
            console.log("success app install!");
        });
    }, [])


    const handleInstall = () => {
        window.deferredPrompt.prompt();
        window.deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                // user accept the prompt
                // we hide the popup
                setIsAppInstalled(false)
            } else {
                console.log("User dismissed the prompt");
            }
            window.deferredPrompt = null;
        });
    }

    return isAppInstalled ? (
        <div class="install-popup">
            <div class="container flex align-center space-between h100">
                <h2>Download our awesome app!</h2>
                <button onClick={handleInstall} class="install-btn">install</button>
            </div>
        </div>
    )
        :
        <></>
}
