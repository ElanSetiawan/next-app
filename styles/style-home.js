
import { css } from '@emotion/css';

const csslistName = `padding: 5px 14px;
  background-color: #00bcd4;
  font-size: 24px;
  border-radius: 4px;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  margin-bottom: 6px;
  width: calc(50% - 2px);
  @media (min-width: 600px) {
    width: calc(20% - 12px);
    margin: 6px;
  }`;
const dflex = css`
display: flex;
align-items: center;
justify-content: space-between;
h1 {
font-size: 24px;
}`
const dflex2 = css`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-between;
@media (min-width: 600px) {
justify-content: center;
}`
const mypokemoncss = css`text-align: center;
padding: 1rem 0;
background-color: green;
color: #fff;
font-size: 18px;
border-radius: 6px;margin-bottom: 2rem;cursor: pointer;`
const nextcss = css`
background-color: #2196f3;
color: #fff;
cursor: pointer;
padding: 10px;
border-radius: 8px;
width: 45%;
text-align: center;
max-width: 190px;`
const img_ = css`max-width: 100%;
max-height: 150px;
object-fit: contain;
object-position: center;`
const desc = css`margin: 0;text-align: center;text-transform: uppercase;font-size: 14px;padding-bottom: 5px;`;
const ar = css`width: 20px;display: inline-block;vertical-align: middle; svg{max-width: 100%;font-size: 18px;line-height: 1;}`
const btnDiv = css`display: flex;justify-content: space-between;padding-top: 1rem;padding-bottom: 2rem;@media (min-width: 600px) {padding-left: 6px;padding-right: 6px;}`
const overlay = css`
background-color: rgba(0,0,0,0.5);
position: fixed;
height: 100vh;
width: 100vw;
left: 0;
right: 0;
top: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
div {
width: 40px;
height: 40px;
border-radius: 50%;
border: 4px solid #03a9f4;
border-right-color: transparent;
transform-origin: center;
animation: rotate 1s linear infinite;
}
@keyframes rotate {
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}
}`


export {csslistName, btnDiv, ar, desc,nextcss,mypokemoncss,dflex,dflex2,img_,overlay}