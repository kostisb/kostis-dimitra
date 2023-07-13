import * as React from "react";
import figure from "/src/images/figure.png";
import hands from "/src/images/hands.png";
import text1 from "/src/images/text-1.png";
import text2 from "/src/images/text-2.png";
import text3 from "/src/images/text-3.png";
import text4 from "/src/images/text-4.png";
import text5 from "/src/images/text-5.png";
import text6 from "/src/images/text-6.png";
import leavesOrange1 from "/src/images/leaves-orange-1.png";
import leavesOrange2 from "/src/images/leaves-orange-2.png";
import leavesOrangeFaded1 from "/src/images/leaves-orange-faded-1.png";
import leavesOrangeFaded2 from "/src/images/leaves-orange-faded-2.png";
import leavesPurple1 from "/src/images/leaves-purple-1.png";
import leavesPurple2 from "/src/images/leaves-purple-2.png";
import leavesPurple3 from "/src/images/leaves-purple-3.png";
import leavesPurpleFaded1 from "/src/images/leaves-purple-faded-1.png";
import leavesPurpleFaded2 from "/src/images/leaves-purple-faded-2.png";
import mainWhenWhere from "/src/images/main-when-where.png";
import mainWho from "/src/images/main-who.png";
import mainRestInfo from "/src/images/main-rest-info.png";
import * as styles from "./index.module.scss";
// import { motion } from "framer-motion";

const IndexPage = () => {
  return (
    <main style={{}}>
      <div className={`relative ${styles.handsWrapper}`}>
        <div className={'absolute w-full h-full'} style={{background: '#f6ecdc'}}></div>
        <img src={figure} alt={''} className={'absolute w-full h-full object-contain object-right'}/>
        <img src={hands} alt={''} className={'absolute w-full h-full object-contain object-right'}/>
        <img src={text1} alt={''} className={'absolute w-full h-full object-contain object-right'}/>
        <img src={text2} alt={''} className={'absolute w-full h-full object-contain object-right'}/>
        <img src={text3} alt={''} className={'absolute w-full h-full object-contain object-right'}/>
        <img src={text4} alt={''} className={'absolute w-full h-full object-contain object-right'}/>
        <img src={text5} alt={''} className={'absolute w-full h-full object-contain object-right'}/>
        <img src={text6} alt={''} className={'absolute w-full h-full object-contain object-right'}/>
        <div className={'absolute w-full h-full backdrop-blur-sm backdrop-brightness-95'}></div>
        <img src={leavesOrange1} alt={''} className={'absolute scale-50'}/>
        <img src={leavesOrange2} alt={''} className={'absolute scale-50'}/>
        <img src={leavesOrangeFaded1} alt={''} className={'absolute scale-50'}/>
        <img src={leavesOrangeFaded2} alt={''} className={'absolute scale-50'}/>
        <img src={leavesPurple1} alt={''} className={'absolute scale-50'}/>
        <img src={leavesPurple2} alt={''} className={'absolute scale-50'}/>
        <img src={leavesPurple3} alt={''} className={'absolute scale-50'}/>
        <img src={leavesPurpleFaded1} alt={''} className={'absolute scale-50'}/>
        <img src={leavesPurpleFaded2} alt={''} className={'absolute scale-50'}/>
      </div>
      <div className={`flex flex-col gap-16 px-2 py-24 ${styles.mainWrapper}`}>
        <img src={mainWhenWhere} width={1500} alt={''} className={'w-full max-w-xl mx-auto'}/>
        <img src={mainWho} width={1916} alt={''} className={'w-full max-w-4xl mx-auto'}/>
        <img src={mainRestInfo} width={932} alt={''} className={'w-full max-w-2xl mx-auto cursor-pointer'} onClick={()=>{
          console.log("copy iban")
        }}/>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
