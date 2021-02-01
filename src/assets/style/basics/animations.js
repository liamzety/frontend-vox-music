
export const animations = `
@keyframes title-animation {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
    
@keyframes retro-future-tv-lines {
  0% {
    -webkit-mask-position: center 0rem;
    mask-position: center 0rem;
  }
  100% {
    -webkit-mask-position: center -1.5rem;
    mask-position: center -1.5rem;
  }
}

@keyframes pulsate-bck{0%{transform:scale(1)}50%{transform:scale(.9)}100%{transform:scale(1)}}
@keyframes scale-in-tr{0%{transform:scale(0);transform-origin:100% 0;opacity:1}100%{transform:scale(1);transform-origin:100% 0;opacity:1}}
@keyframes scale-in-tl{0%{transform:scale(0);transform-origin:0 0;opacity:1}100%{transform:scale(1);transform-origin:0 0;opacity:1}}

@keyframes glitch-animation {
    0% {
      opacity: 1;
      transform: translateZ(0);
      clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
    }
  
    2% {
      clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
      transform: translate(-5px);
    }
  
    6% {
      clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
      transform: translate(5px);
    }
  
    8% {
      clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
      transform: translate(-5px);
    }
  
    9% {
      clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
      transform: translate(0);
    }
  
    10% {
      clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
      transform: translate3d(5px, 0, 0);
    }
  
    13% {
      clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
      transform: translateZ(0);
    }
  
    13.1% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate3d(5px, 0, 0);
    }
  
    15% {
      clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
      transform: translate3d(5px, 0, 0);
    }
  
    20% {
      clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
      transform: translate3d(-5px, 0, 0);
    }
  
    20.1% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      transform: translate3d(5px, 0, 0);
    }
  
    25% {
      clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
      transform: translate3d(5px, 0, 0);
    }
  
    30% {
      clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
      transform: translate3d(-5px, 0, 0);
    }
  
    30.1% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    }
  
    35% {
      clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
      transform: translate(-5px);
    }
  
    40% {
      clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
      transform: translate(5px);
    }
  
    45% {
      clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
      transform: translate(-5px);
    }
  
    50% {
      clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
      transform: translate(0);
    }
  
    55% {
      clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
      transform: translate3d(5px, 0, 0);
    }
  
    60% {
      clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
      transform: translateZ(0);
      opacity: 1;
    }
  
    60.1% {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      opacity: 1;
    }
  
    to {
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      opacity: 1;
    }
  }



`
