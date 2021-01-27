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
    navbarLogoTop: localImgService.logoLight,
    navbarLogo: localImgService.logoDark,

    alert: GlobalVars.yellowMain,
    error: GlobalVars.pinkMain,
    success: GlobalVars.greenMain,

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
    navbarLogoTop: localImgService.logoLight,
    navbarLogo: localImgService.logoLight,

    alert: GlobalVars.yellowMain,
    error: GlobalVars.pinkMain,
    success: GlobalVars.greenMain,
}