import { darken } from '@material-ui/core'
import { localImgService } from '../../services/localImgService'
import { GlobalVars } from './basics/vars'


export const lightTheme = {
    materialBg: `background: url(${localImgService.materialBgLight}) 0 0 repeat;`,

    playerMain: GlobalVars.pinkMain,
    playerSec: GlobalVars.whiteSecondary,

    mainBg: GlobalVars.whiteMain,
    secBg: GlobalVars.whiteSecondary,
    tertiaryBg: GlobalVars.whiteTertiary,

    mainBtn: GlobalVars.pinkMain,
    mainBtnBorder: 'transparent',
    mainBtnTxt: GlobalVars.whiteMain,

    mainTxt: GlobalVars.blackMain,
    secTxt: GlobalVars.blackMain,

    mainSvg: GlobalVars.blackMain,

    songHover: GlobalVars.whiteTertiary,

    linkTxt: GlobalVars.pinkMain,

    bannerTitle: GlobalVars.pinkMain,
    hr: GlobalVars.whiteMain,
    neon: GlobalVars.pinkMain,

    mainModal: GlobalVars.whiteSecondary,
    neonModal: GlobalVars.pinkMain,

    mainBorder: GlobalVars.pinkMain,


    chipBorder: GlobalVars.blueMain,
    chipTrunk: GlobalVars.blackMain,
    chipTxt: GlobalVars.whiteMain,

    slideBtnSvg: GlobalVars.blackMain,

    navbar: GlobalVars.whiteMain,
    navbarTxt: GlobalVars.pinkMain,
    navbarLogo: localImgService.logoDark,



    menuShadow: 'rgb(0 0 0 / 43%)  0px 16px 32px 0px',

    chatBubbleBody: GlobalVars.whiteSecondary,
    chatBubbleTxt: GlobalVars.whiteMain,

    inputTxt: darken(GlobalVars.pinkMain, 0.3),
    inputBorder: GlobalVars.pinkMain,

    selectionBg: GlobalVars.pinkMain,
    selectionTxt: GlobalVars.whiteMain,

    scrollbarThumb: GlobalVars.pinkMain,

    favouriteIcon: GlobalVars.yellowMain,
}

export const darkTheme = {
    materialBg: `background: url(${localImgService.materialBgDark}) 0 0 repeat;
    background-color: ${GlobalVars.yellowMain};
    background-blend-mode: darken;
    `,

    playerMain: GlobalVars.yellowMain,
    playerSec: GlobalVars.whiteSecondary,

    mainBg: GlobalVars.blackMain,
    secBg: GlobalVars.blackSecondary,
    tertiaryBg: GlobalVars.blackTertiary,

    mainBtn: GlobalVars.yellowMain,
    mainBtnBorder: GlobalVars.blackMain,
    mainBtnTxt: GlobalVars.blackMain,

    mainTxt: GlobalVars.yellowMain,
    secTxt: GlobalVars.blackMain,

    mainSvg: GlobalVars.whiteSecondary,

    songHover: GlobalVars.blackTertiary,

    linkTxt: GlobalVars.yellowMain,

    bannerTitle: GlobalVars.yellowMain,
    hr: GlobalVars.blackMain,
    neon: GlobalVars.yellowMain,

    mainModal: GlobalVars.blackMain,
    neonModal: GlobalVars.pinkMain,

    mainBorder: GlobalVars.yellowMain,

    chipBorder: GlobalVars.blueMain,
    chipTrunk: GlobalVars.blueMain,
    chipTxt: GlobalVars.blueMain,

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

    inputTxt: darken(GlobalVars.yellowMain, 0.15),
    inputBorder: GlobalVars.yellowMain,

    selectionBg: GlobalVars.yellowMain,
    selectionTxt: GlobalVars.blackMain,

    scrollbarThumb: GlobalVars.yellowMain,

    favouriteIcon: GlobalVars.yellowMain,
}