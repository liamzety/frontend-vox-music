import { GlobalVars } from './global'
import materialBg from '../img/material-bg.png'
import materialBgLight from '../img/material-bg-light.png'

export const lightTheme = {
    materialBg: materialBgLight,

    mainBg: GlobalVars.whiteMain,
    mainBtn: GlobalVars.blackMain,
    mainBtnTxt: GlobalVars.redMain,
    mainTxt: GlobalVars.blackMain,
    mainSvg: GlobalVars.blackMain,

    songHover: GlobalVars.whiteTertiary,

    secTxt: GlobalVars.redMain,
    secBg: GlobalVars.whiteSecondary,

    bannerTitle: GlobalVars.redMain,
    hr: GlobalVars.whiteMain,
    navbar: GlobalVars.whiteMain,
    neon: GlobalVars.redMain,

    mainModal: GlobalVars.whiteSecondary,
    neonModal: GlobalVars.redMain,

    chipBorder: GlobalVars.blackMain,

    slideBtnSvg: GlobalVars.blackMain
}

export const darkTheme = {
    materialBg: materialBg,

    mainBg: GlobalVars.blackMain,
    mainBtn: GlobalVars.yellowMain,
    mainBtnTxt: GlobalVars.blackMain,
    mainTxt: GlobalVars.yellowMain,
    mainSvg: GlobalVars.blackMain,

    songHover: GlobalVars.blackTertiary,

    secTxt: GlobalVars.blackMain,
    secBg: GlobalVars.blackSecondary,

    bannerTitle: GlobalVars.yellowMain,
    hr: GlobalVars.blackMain,
    navbar: GlobalVars.blackMain,
    neon: GlobalVars.yellowMain,

    mainModal: GlobalVars.blackSecondary,
    neonModal: GlobalVars.redMain,

    chipBorder: GlobalVars.redMain,

    slideBtnSvg: GlobalVars.yellowMain
}