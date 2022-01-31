import Head from 'next/head'
import Router from "next/router";
import React, { useEffect, useState } from "react";
// import Image from "next/image";
import { css } from '@emotion/css'
import {container, body} from '../../../styles/global'

import {getDataMoveById, getDataById} from '../../api/getData'
import { useAmp } from "next/amp";
import {styled, modalcss, modalinercss, lbl, lbel,dflex,modalHead,content,btn,inputNick,eror,backcss, lbll,bar,space} from "../../../styles/style-pokemon-detail";

export const config = { amp: "hybrid" };

const DetailPokemon = ({ detail, name, moves}) => {
  const isAmp = useAmp();
  // detail.types.map(v => console.log(v.type.name));
  // console.log(detail.sprites.other.dream_world.front_default);
  const [ showModalFlas, setShowModalSuccess] = useState(false);
  const [ showModalDelete, setShowModalDelete] = useState(false);
  const [ nick, setNick] = useState()
  const [ canDelete, setCanDelete] = useState(false)
  const [ modalFailed, setModalFailed] = useState(false)
  const [ errorExist, showErrorExist] = useState(false)


  
  const handleCatchPokemon = () => {
    if (Math.random() > 0.5) {
      setShowModalSuccess(true)
    } else {
      setModalFailed(true);
    }
  }
  

  const saveLocal =()=>{
    if(localStorage.getItem('catchUser')){
      let prev = JSON.parse(localStorage.getItem('catchUser'))
      const exist = prev.filter(v => v.name === nick )
      if(exist.length > 0){
        showErrorExist(true)
      }else{
        const pok = {
          'id': detail.id,
          'name': nick,
          'img':detail.sprites.other.dream_world.front_default
        }
        let pk = [...prev, pok];
        localStorage.setItem('catchUser', JSON.stringify(pk))
        setShowModalSuccess(false)
      }
    }else{
      const pok = {
        'id': detail.id,
        'name': nick,
        'img':detail.sprites.other.dream_world.front_default
      }
      localStorage.setItem('catchUser', JSON.stringify([pok]))
      setShowModalSuccess(false)
    }
  }

  const deleteLocal =()=>{
    let prev = JSON.parse(localStorage.getItem('catchUser'))
    let newPoke = prev.filter(function(item) {
      return item.name != name;
    });
    
    localStorage.setItem('catchUser', JSON.stringify(newPoke))
 
  setShowModalSuccess(false)
  Router.back();
}

  useEffect(()=>{
    if(name){
      setCanDelete(true)
    }
  },[])
  
  return (
    <>
      <Head>
          <title>{"Pokemon "+detail.species.name}</title>
          <meta name="description" content={"Pokemon go "+ detail.species.name} />
          <link rel="icon" href="/favicon.ico" />
          <style amp-custom></style>
          {/* style AMP */}
          {isAmp && <style amp-custom>{`
          .container{padding: 0 14px;max-width: 112rem;}
          .backcss{width: 30px;padding-top: 10px;}
            svg {max-width: 100%;}
            .lbl{width:130px;text-transform: capitalize;line-height: 1.2;padding-top: 6px;}
            .bg{ background: rgb(63,251,67);background: radial-gradient(circle, rgba(63,251,67,1) 0%, rgba(70,252,224,1) 100%);min-height: 100vh;padding-bottom: 90px;}
            * {box-sizing: border-box;}
            html {-webkit-font-smoothing: antialiased;text-rendering: optimizeLegibility;}
            body {margin: 0;font-family: Roboto,HelveticaNeue,Helvetica Neue,sans-serif;}
            .wrapDesc{width: 100%;background-color: #fff;border-radius: 10px;padding: 10px;margin-top: -24px;padding-bottom: 2rem;padding-top: 2.5rem;}
            .dflex{display: flex;align-items: center;}
            .value{text-transform: capitalize;font-size: 24px;font-weight: 600;text-align: center;}
            .itemsDesc{display: flex;width: 100%;flex-wrap: wrap;align-items: center;justify-content: space-around;padding-top: 2rem;padding-bottom: 2rem;text-align: center;}
            .lbel{padding: 2px 10px;display: inline-block;font-size: 12px;background-color: #f6aa00;border-radius: 6px;color: #fff;margin-right: 4px;text-transform: uppercase;}
            .lbll{padding-top: 1rem;padding-bottom: 0.5rem;border-top: 1px solid #ddd;margin-top: 1.2rem;}`}</style>}
      </Head>
      <div className={isAmp? "bg":css`${styled.bg}`}>
      <div className={isAmp?"container":container}>
        <div onClick={() => isAmp? window.history.back():Router.back()} className={isAmp?"backcss":backcss}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        </div>
        <div className={css`${styled.dflex}`}>
            <div className={css`${styled.wrapImg}`}>
            {isAmp ? (
            <>
            <amp-img
              width="300"
              height="300"
              src={detail.sprites.other.dream_world.front_default }
              alt={detail.species.name}
              layout="responsive"
            />
            
            </>
              ) : (
                <img className='img' src={detail.sprites.other.dream_world.front_default}  alt={detail.species.name} width={300} height={300} loading="eager"/>
              )}
                {/* <Image className='img' src={detail.sprites.other.home.front_default}  alt={detail.species.name} width={512} height={512} unoptimized={true} loading="eager"/> */}
            </div>
            <div className={isAmp? "wrapDesc":css`${styled.wrapDesc}`}>
                <div className="">
                    <div className={isAmp?"value":css`${styled.value}`}>{canDelete? name: detail.species.name}</div>
                    <div className={isAmp?"itemsDesc":css`${styled.itemsDesc}`}>
                        <div className=''><b>WEIGHT</b><br/> {detail.weight}</div>
                        <div><b>TYPE</b><br/> {detail.types.length > 0 &&
                         detail.types.map((v, i)=>  <span key={i} className={isAmp?"lbel":lbel}> {v.type.name}</span>  )}</div>
                        <div><b>HEIGHT</b><br/> {detail.height}</div>
                    </div>
                    <div className=''>
                      <div className={isAmp?"dflex":dflex}><div className={isAmp?"lbl":lbl}>Accuracy </div>: {moves.accuracy?moves.accuracy:"-"}</div>
                      <div className={isAmp?"dflex":dflex}><div className={isAmp?"lbl":lbl}>Power </div>: {moves.power?moves.power:"-"}</div>
                      <div className={isAmp?"dflex":dflex}><div className={isAmp?"lbl":lbl}>PP </div>: {moves.pp?moves.pp:"-"}</div>
                    </div>
                    <div className=''>
                      <div className={isAmp?"lbll":lbll}>STATS:</div>
                      {detail.stats.length > 0 && detail.stats.map((v,i)=> 
                        <div key={i} className={isAmp?"dflex":dflex}><div className={isAmp?"lbl":lbl}>{v.stat.name} </div><div className={css`width:50px`}>: {(v.base_stat)?v.base_stat: "-"} </div>
                        <div className={css`${bar}
                              &:after {
                                width: ${v.base_stat > 100? 100:v.base_stat}%;
                            }`}></div></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        {!isAmp &&
        <div className={css`${styled.btnCatch}`} onClick={()=>canDelete?setShowModalDelete(true):handleCatchPokemon()}>{canDelete? 'Remove': 'Catch'}</div>}

        
        {!isAmp && showModalFlas && <div className={modalcss}>
              <div className={modalinercss}>
                <div className={modalHead}>Coctha!</div>
                  <div className='modal-conten'>
                    <div className={content}>Give Nickname</div>
                    <input className={inputNick} onChange={e=>setNick(e.target.value)} value={nick}/>
                    {errorExist && <div className={eror}> Nickname Already Exist </div>}
                    <button type='button' className={btn} onClick={()=>saveLocal()}>Save </button>
                    </div>
                </div>
              </div>
              }

      {!isAmp && showModalDelete && <div className={modalcss}>
              <div className={modalinercss}>
                <div className={modalHead}>Are You Sure!</div>
                  <div className='modal-conten'>
                    <div className={content}>Remove This Pokemon</div>
                    
                    <button type='button' className={btn} onClick={()=>setShowModalDelete(false)}>Cancel </button> <span className={space}></span>
                    <button type='button' className={btn} onClick={()=>deleteLocal()}>Yes </button>
                    </div>
                </div>
              </div>
              }
      {!isAmp && modalFailed && <div className={modalcss}>
              <div className={modalinercss}>
                <div className={modalHead}>Opps!</div>
                  <div className='modal-conten'>
                    <div className={content}>Fail Get Pokemon</div>
                    <button type='button'  className={btn} onClick={()=>setModalFailed(false)}>Close </button>
                    </div>
                </div>
              </div>
              }
        </div>
      </div>
      
    </>
  )
}

DetailPokemon.getInitialProps = async (context) => {
  const { id, name } = context.query;

  const detail = await getDataById(id)
  const move = await getDataMoveById(id)
  const moves = {"accuracy": move["accuracy"], "power":move["power"], "pp":move["pp"], "priority":move["priority"], "type": move["type"]["name"] }

  return { detail, name , moves}
}

export default DetailPokemon;