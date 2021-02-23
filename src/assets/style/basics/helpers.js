export const helpers = `
.container-x {
    padding-left: 30px;
    padding-right: 30px;
  
    @media(max-width:550px) {
      padding-left: 13px;
      padding-right: 13px;
    }
  }
  
  .container-y {
    padding-top: 100px;
    padding-bottom: 19vh;
  }
  
  .flex {
    display: flex;
  }
  .flex1 {
    flex: 1;
  }
  .h100 {
    height: 100%
  }
  
  .w100 {
    width: 100%
  }
  
  .col {
    flex-direction: column;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .hidden {
    display: none;
  }
  .hide {
    visibility: hidden;
  }
  .wrap {
    flex-wrap: wrap;
  }
  
  .text-center {
    text-align: center;
  }
  
  .align-center {
    align-items: center;
  }
  .align-end {
    align-items:flex-end;
  }
  .align-baseline {
    align-items:baseline;
  }
  .space-between {
    justify-content: space-between;
  }
  
  .space-around {
    justify-content: space-around;
  }
  .space-evenly {
    justify-content: space-evenly;
  }
  
  .grow {
    flex-grow: 1;
  }
  
  .relative {
    position: relative;
  }
  
  .absolute {
    position: absolute;
  }
  
  .fixed {
    position: fixed;
  }
  
  .cursor-initial {
    cursor: initial;
  }
  
  .cursor-pointer {
    cursor: pointer;
  }
  .m5 {
      margin:5px;
  }
  .m10 {
    margin:10px;
  }
  .m25 {
    margin:15px;
  }
  .m30 {
    margin:20px;
  }
  .m45 {
    margin:25px;
  }
  .m50 {
    margin:30px;
  }
`