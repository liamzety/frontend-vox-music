export const helpers = `
.container-x {
    padding-left: 30px;
    padding-right: 30px;
  
    @media(max-width:520px) {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
  
  .container-y {
    padding-top: 100px;
    padding-bottom: 150px;
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
  
  .wrap {
    flex-wrap: wrap;
  }
  
  .text-center {
    text-align: center;
  }
  
  .align-center {
    align-items: center;
  }
  
  .space-between {
    justify-content: space-between;
  }
  
  .space-around {
    justify-content: space-around;
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
`