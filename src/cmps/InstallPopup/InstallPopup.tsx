import React, { useEffect, useState } from 'react';
// Styles
import {
  InstallPopupContainer,
  InstallPopupInnerContainer,
  InstallPopupBtn,
  InstallPopupCloseBtn,
  InstallPopupWordContainer,
} from './installPopup-styles';

interface Window {
  webkitURL?: any;
  deferredPrompt?: any;
  addEventListener?: any;
  matchMedia?: any;
  navigator?: any;
}

declare var window: Window;

if (window.webkitURL !== undefined) {
  console.log(window.webkitURL);
}

export const InstallPopup: React.FC = () => {
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  useEffect(() => {
    // variable store event
    window.deferredPrompt = {};
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      // this event does not fire if the application is already installed
      //   setTimeout(() => {
      setIsAppInstalled(false);
      //   }, 3000);
      e.preventDefault();
      // store install avaliable event
      window.deferredPrompt = e;
    });

    // if standalone android OR safari
    if (
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true
    ) {
      // hide the popup
      setIsAppInstalled(true);
    }

    // do action when finished the install
    window.addEventListener('appinstalled', () => {
      console.log('success app install!');
    });
  }, []);

  const handleInstall = () => {
    window.deferredPrompt.prompt();
    window.deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        // user accept the prompt
        // we hide the popup
        setIsAppInstalled(false);
      } else {
        console.log('User dismissed the prompt');
      }
      window.deferredPrompt = null;
    });
  };

  return isAppInstalled ? (
    <></>
  ) : (
    <InstallPopupContainer>
      <InstallPopupInnerContainer>
        <InstallPopupWordContainer>
          <h2>Install our awesome app!</h2>
          <p>
            No download required. Click install to add the app to your home
            screen.
          </p>
        </InstallPopupWordContainer>
        <InstallPopupBtn onClick={handleInstall}>+ INSTALL</InstallPopupBtn>
        <InstallPopupCloseBtn onClick={setIsAppInstalled.bind({}, true)}>
          X
        </InstallPopupCloseBtn>
      </InstallPopupInnerContainer>
    </InstallPopupContainer>
  );
};
