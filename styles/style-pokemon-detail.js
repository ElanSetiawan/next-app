
import { css } from '@emotion/css'

  const styled = {
    'value': `text-transform: capitalize;font-size: 24px;font-weight: 600;text-align: center;`,
    'dflex' : `display: flex;align-items: center;justify-content: center;flex-flow: wrap;`,
    'wrapImg': `margin: auto;position: relative;`,
    'wrapDesc':`width: 100%;background-color: #fff;border-radius: 10px;padding: 10px; padding-bottom: 2rem;
    padding-top: 2.8rem;margin-top: -30px;@media (min-width: 600px) {
      width: 50%;margin-top: 0px;padding: 1.5rem; 
    }`,
    'bg':'background: rgb(63,251,67);background: radial-gradient(circle, rgba(63,251,67,1) 0%, rgba(70,252,224,1) 100%);min-height: 100vh;padding-bottom: 90px;',
    'textCenter':'text-align: center;',
    'itemsDesc':`display: flex;width: 100%;flex-wrap: wrap;align-items: center;justify-content: space-around;padding-top: 2rem;padding-bottom: 2rem;text-align: center;
    b {
        padding-bottom: 6px;
        display: inline-block;
    }`,
    'btnCatch' : `line-height: 2;position: fixed;bottom: 10px;padding: 10px;background-color: #c50345;height: 80px;width: 80px;text-align: center;color: white;border-radius: 50%;margin: auto;left: 0;right: 0;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px;
      transform: rotate(180deg);
      height: 15px;
      width: 60px;
      border-radius: 60px 60px 0 0;
      background-color: white;
      border-bottom: 5px solid #000;}
    `,
  };
  const modalcss = css`
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        :after {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgb(0 0 0 / 31%);
          content: '';
      }`;
  const modalinercss = css`
        background-color: white;
        padding: 10px;
        position: relative;
        z-index: 1;
        border-radius: 10px;width: 320px;
        max-width: 90%;
        min-height: 200px;
        display: flex;
        align-items: center;flex-wrap: wrap;justify-content: center;
        text-align: center;`;
  const lbl = css`width:130px;text-transform: capitalize;line-height: 1.2;padding-top: 6px;`
  const lbel = css`padding: 2px 10px;
              display: inline-block;
              font-size: 12px;
              background-color: #f6aa00;
              border-radius: 6px;
              color: #fff;margin-right: 4px;text-transform: uppercase;`
  const dflex = css`display: flex;`
  const modalHead =css`width: 100%;font-size: 30px;`;
  const content =css`font-size: 20px;padding-bottom: 5px;`;
  const btn =css`padding: 8px 30px;
  background-color: #03a9f4;
  color: #fff;
  border: 0;
  border-radius: 6px;
  font-size: 15px;margin-top: 10px;`;
  const inputNick = css`display: block;
    width: 90%;
    padding: 8px;
    font-size: 16px;
    margin-bottom: 1rem;
    border-radius: 10px;
    border-width: 1px;
    margin-left: auto;
    margin-right: auto;`
    const eror = css`color: #d53c0c;` 
    const backcss =css`width: 30px;padding-top: 10px;cursor: pointer;`
    const lbll = css`padding-top: 1rem;
  padding-bottom: 0.5rem;
  border-top: 1px solid #ddd;
  margin-top: 1.2rem;`
  const bar = css`width: calc(100% - 190px);
  height: 14px;
  background-color: #ddd;
  position: relative;
  &:after {
    background-color: #4caf50;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 14px;
}`;
const space = css`
width: 20px;
display: inline-block;`

const movesLbl = css`display: inline-block;
padding: 4px;
font-size: 12px;
background-color: #ddd;
border-radius: 10px;
margin-bottom: 4px;
margin-left: 4px;`

export {styled, modalcss, modalinercss, lbl, lbel,dflex,modalHead,content,btn,inputNick,eror,backcss, lbll,bar,space,movesLbl}
