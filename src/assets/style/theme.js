import { GlobalVars } from './basics/vars'
import materialBg from '../img/material-bg.png'
import materialBgLight from '../img/material-bg-light.png'
import logoLight from '../img/vox-logo-light.png';
import logoDark from '../img/vox-logo-dark.png';

export const lightTheme = {
    materialBg: materialBgLight,

    mainBg: GlobalVars.whiteMain,
    secBg: GlobalVars.whiteSecondary,
    tertiaryBg: GlobalVars.whiteTertiary,

    mainBtn: GlobalVars.blackMain,
    mainBtnTxt: GlobalVars.yellowMain,

    mainTxt: GlobalVars.blackMain,
    secTxt: GlobalVars.yellowMain,

    mainSvg: GlobalVars.blackMain,

    songHover: GlobalVars.whiteTertiary,


    bannerTitle: GlobalVars.yellowMain,
    hr: GlobalVars.whiteMain,
    navbar: GlobalVars.whiteMain,
    neon: GlobalVars.pinkMain,

    mainModal: GlobalVars.whiteSecondary,
    neonModal: GlobalVars.pinkMain,

    chipBorder: GlobalVars.blackMain,

    slideBtnSvg: GlobalVars.blackMain,

    navbarTxt: GlobalVars.blackSec,
    navbarTxtTop: GlobalVars.yellowMain,
    navbarLogoTop: logoLight,
    navbarLogo: logoDark,

    alert: GlobalVars.yellowMain,
    error: GlobalVars.pinkMain,
    success: GlobalVars.greenMain,

}

export const darkTheme = {
    materialBg: materialBg,

    mainBg: GlobalVars.blackMain,
    secBg: GlobalVars.blackSecondary,
    tertiaryBg: GlobalVars.blackTertiary,

    mainBtn: GlobalVars.yellowMain,
    mainBtnTxt: GlobalVars.blackMain,

    mainTxt: GlobalVars.yellowMain,
    secTxt: GlobalVars.blackMain,

    mainSvg: GlobalVars.blackMain,

    songHover: GlobalVars.blackTertiary,


    bannerTitle: GlobalVars.yellowMain,
    hr: GlobalVars.blackMain,
    navbar: GlobalVars.blackMain,
    neon: GlobalVars.yellowMain,

    mainModal: GlobalVars.blackSecondary,
    neonModal: GlobalVars.pinkMain,

    chipBorder: GlobalVars.pinkMain,

    slideBtnSvg: GlobalVars.yellowMain,

    navbarTxt: GlobalVars.yellowMain,
    navbarTxtTop: GlobalVars.yellowMain,
    navbarLogoTop: logoLight,
    navbarLogo: logoLight,

    alert: GlobalVars.yellowMain,
    error: GlobalVars.pinkMain,
    success: GlobalVars.greenMain,
}