import React, { useEffect, useState } from 'react';
// Styles
import {
  InstallPopupContainer,
  InstallPopupInnerContainer,
  InstallPopupCloseBtn,
  InstallPopupWordContainer,
} from './InstallPopup.styles';
// Cmps
import { Button } from '../../aux-cmps/Button/Button';
import { Text } from '../../aux-cmps/Text/Text';

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
  const [isAppInstalled, setIsAppInstalled] = useState(true);

  useEffect(() => {
    // variable store event
    window.deferredPrompt = {};
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      // this event does not fire if the application is already installed
      setTimeout(() => {
        setIsAppInstalled(false);
      }, 3000);
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
        setIsAppInstalled(true);
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
          <Text color="blackMain" type="h3">
            Install our awesome app!
          </Text>
          <Text color="blackMain" type="p">
            No download required. Click install to add the app to your home
            screen.
          </Text>
        </InstallPopupWordContainer>
        <Button
          color="blackMain"
          border="blackMain"
          bgColor="yellowMain"
          onClick={handleInstall}
        >
          INSTALL
        </Button>
        <InstallPopupCloseBtn onClick={setIsAppInstalled.bind({}, true)}>
          X
        </InstallPopupCloseBtn>
      </InstallPopupInnerContainer>
    </InstallPopupContainer>
  );
};
