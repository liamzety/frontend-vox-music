import { localImgService } from '../../services/localImgService'
import { GlobalVars } from './basics/vars'


export const lightTheme = {
    materialBg: localImgService.materialBgLight,

    playerMain: GlobalVars.pinkMain,
    playerSec: GlobalVars.whiteSecondary,

    mainBg: GlobalVars.whiteMain,
    secBg: GlobalVars.whiteSecondary,
    tertiaryBg: GlobalVars.whiteTertiary,

    mainBtn: GlobalVars.blackMain,
    mainBtnTxt: GlobalVars.pinkMain,

    mainTxt: GlobalVars.blackMain,
    secTxt: GlobalVars.yellowMain,

    mainSvg: GlobalVars.blackMain,

    songHover: GlobalVars.whiteTertiary,

    linkTxt: GlobalVars.pinkMain,

    bannerTitle: GlobalVars.pinkMain,
    hr: GlobalVars.whiteMain,
    neon: GlobalVars.pinkMain,

    mainModal: GlobalVars.whiteSecondary,
    neonModal: GlobalVars.pinkMain,

    mainBorder: GlobalVars.pinkMain,

    chipBorder: GlobalVars.blackMain,
    chipCard: GlobalVars.blackMain,
    chipTxt: GlobalVars.whiteMain,

    slideBtnSvg: GlobalVars.blackMain,

    navbar: GlobalVars.whiteMain,
    navbarTxt: GlobalVars.pinkMain,
    navbarLogo: localImgService.logoDark,

    alert: GlobalVars.yellowMain,
    error: GlobalVars.pinkMain,
    success: GlobalVars.greenMain,

    menuShadow: 'rgb(0 0 0 / 43%)  0px 16px 32px 0px',

    chatBubbleBody: GlobalVars.blackMain,
    chatBubbleTxt: GlobalVars.whiteMain,

}

export const darkTheme = {
    materialBg: localImgService.materialBgDark,

    playerMain: GlobalVars.yellowMain,
    playerSec: GlobalVars.whiteSecondary,

    mainBg: GlobalVars.blackMain,
    secBg: GlobalVars.blackSecondary,
    tertiaryBg: GlobalVars.blackTertiary,

    mainBtn: GlobalVars.yellowMain,
    mainBtnTxt: GlobalVars.blackMain,

    mainTxt: GlobalVars.yellowMain,
    secTxt: GlobalVars.blackMain,

    mainSvg: GlobalVars.blackMain,

    songHover: GlobalVars.blackTertiary,

    linkTxt: GlobalVars.yellowMain,

    bannerTitle: GlobalVars.yellowMain,
    hr: GlobalVars.blackMain,
    neon: GlobalVars.yellowMain,

    mainModal: GlobalVars.blackSecondary,
    neonModal: GlobalVars.pinkMain,

    mainBorder: GlobalVars.yellowMain,

    chipBorder: GlobalVars.pinkMain,
    chipCard: '#1d0208',
    chipTxt: GlobalVars.pinkMain,

    slideBtnSvg: GlobalVars.yellowMain,

    navbar: GlobalVars.blackMain,
    navbarTxt: GlobalVars.yellowMain,
    navbarLogo: localImgService.logoLight,

    alert: GlobalVars.yellowMain,
    error: GlobalVars.pinkMain,
    success: GlobalVars.greenMain,

    menuShadow: 'rgba(1, 4, 9, 0.85) 0px 16px 32px 0px',

    chatBubbleBody: GlobalVars.whiteMain,
    chatBubbleTxt: GlobalVars.blackMain,

}