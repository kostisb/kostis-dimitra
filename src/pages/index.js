import * as React from "react";
import figure from "/src/images/figure.png";
import hands from "/src/images/hands.png";
import logo from "/src/images/logo.png";
import text1 from "/src/images/text-1.png";
import text2 from "/src/images/text-2.png";
import text3 from "/src/images/text-3.png";
import text4 from "/src/images/text-4.png";
import text5 from "/src/images/text-5.png";
import text6 from "/src/images/text-6.png";
import leavesOrange1 from "/src/images/leaves-orange-1.png";
import leavesOrangeFaded1 from "/src/images/leaves-orange-faded-1.png";
import leavesOrangeFaded2 from "/src/images/leaves-orange-faded-2.png";
import leavesPurple1 from "/src/images/leaves-purple-1.png";
import leavesPurple2 from "/src/images/leaves-purple-2.png";
import leavesPurple3 from "/src/images/leaves-purple-3.png";
import leavesPurpleFaded1 from "/src/images/leaves-purple-faded-1.png";
import leavesPurpleFaded2 from "/src/images/leaves-purple-faded-2.png";
import mainWhenWhere from "/src/images/main-when-where.png";
import whoDParentsLabel from "/src/images/who-d-parents-label.png";
import whoDParentsValue1 from "/src/images/who-d-parents-value-1.png";
import whoDParentsValue2 from "/src/images/who-d-parents-value-2.png";
import whoKParentsLabel from "/src/images/who-k-parents-label.png";
import whoKParentsValue1 from "/src/images/who-k-parents-value-1.png";
import whoKParentsValue2 from "/src/images/who-k-parents-value-2.png";
import whoBestsLabel from "/src/images/who-bests-label.png";
import whoBestsValue1 from "/src/images/who-bests-value-1.png";
import whoBestsValue2 from "/src/images/who-bests-value-2.png";
import mainRestInfo from "/src/images/main-rest-info.png";
import mainIban from "/src/images/main-iban.png";
import * as styles from "./index.module.scss";
import {motion, stagger, useAnimate} from "framer-motion";
import {useEffect, useState} from "react";

const IndexPage = () => {
	const [copied, setCopied] = useState(false);
	useEffect(() => {
		if (copied) {
			setTimeout(() => {
				setCopied(false);
			}, 1500);
		}
	}, [copied])
	const [content, animate] = useAnimate();
	const sequence = [
		['.leaf-wrapper img', {
			scaleX: [0, 1],
			scaleY: [0.5, 1]
		}, {
			delay: stagger(0.05, {startDelay: 1}),
			ease: 'backOut',
			duration: 0.6
		}],
		['.hero-figure, .main-content-wrapper', {opacity: [0, 1]}, {duration: 1}],
		['.hero-hands', {opacity: [0, 1]}, {duration: 1}],
		['.blurrer', {
			opacity: 0
		}, {
			delay: 2,
			duration: 1
		}],
		['.hero-text, .main-content', {
			opacity: [0, 1],
		}, {
			delay: stagger(0.2),
			duration: 0.6
		}],
	]
	useEffect(() => {
		animate(sequence);
	}, [])
	return (
		<main style={{background: '#f6ecdc'}} ref={content}>
			<div className={`hero relative ${styles.handsWrapper}`}>
				<div
					className={`blurrer fixed z-10 pointer-events-none w-full h-screen overflow-hidden backdrop-blur-sm bg-white/50`}>
					<div className={`logo-wrapper ${styles.logoWrapper} ${styles.logo}`}><img src={logo} alt={''}/></div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesOrange1}`}><img src={leavesOrange1}
																																														 alt={''}/></div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesOrangeFaded1}`}><img
						src={leavesOrangeFaded2} alt={''}/>
					</div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesOrangeFaded2}`}><img
						src={leavesOrangeFaded2} alt={''}/>
					</div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesOrangeFaded3}`}><img
						src={leavesOrangeFaded1} alt={''}/>
					</div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesOrangeFaded4}`}><img
						src={leavesOrangeFaded1} alt={''}/>
					</div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesOrangeFaded5}`}><img
						src={leavesOrangeFaded1} alt={''}/>
					</div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurple1}`}><img src={leavesPurple3}
																																														 alt={''}/></div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurple2}`}><img src={leavesPurple2}
																																														 alt={''}/></div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurple3}`}><img src={leavesPurple1}
																																														 alt={''}/></div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurple4}`}><img src={leavesPurple2}
																																														 alt={''}/></div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurple5}`}><img src={leavesPurple3}
																																														 alt={''}/></div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurple6}`}><img src={leavesPurple1}
																																														 alt={''}/></div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurple7}`}><img src={leavesPurple1}
																																														 alt={''}/></div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurple8}`}><img src={leavesPurple3}
																																														 alt={''}/></div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurple9}`}><img src={leavesPurple3}
																																														 alt={''}/></div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurpleFaded1}`}><img
						src={leavesPurpleFaded1} alt={''}/>
					</div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurpleFaded2}`}><img
						src={leavesPurpleFaded1} alt={''}/>
					</div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurpleFaded3}`}><img
						src={leavesPurpleFaded1} alt={''}/>
					</div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurpleFaded4}`}><img
						src={leavesPurpleFaded2} alt={''}/>
					</div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurpleFaded5}`}><img
						src={leavesPurpleFaded2} alt={''}/>
					</div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurpleFaded6}`}><img
						src={leavesPurpleFaded2} alt={''}/>
					</div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurpleFaded7}`}><img
						src={leavesPurpleFaded2} alt={''}/>
					</div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurpleFaded8}`}><img
						src={leavesPurpleFaded2} alt={''}/>
					</div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurpleFaded9}`}><img
						src={leavesPurpleFaded1} alt={''}/>
					</div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurpleFaded10}`}><img
						src={leavesPurpleFaded2}
						alt={''}/></div>
					<div className={`leaf-wrapper ${styles.leafWrapper} ${styles.leavesPurpleFaded11}`}><img
						src={leavesPurpleFaded2}
						alt={''}/></div>
				</div>
				<div className="hero-main absolute w-full h-full">
					<div className={'absolute w-full h-full'}></div>
					<img src={figure} alt={''} className={`hero-figure ${styles.heroElement}`}/>
					<img src={hands} alt={''} className={`hero-hands ${styles.heroElement}`}/>
					<div className="texts">
						<img src={text1} alt={''} className={`hero-text hero-text1 ${styles.heroElement}`}/>
						<img src={text2} alt={''} className={`hero-text hero-text2 ${styles.heroElement}`}/>
						<img src={text3} alt={''} className={`hero-text hero-text3 ${styles.heroElement}`}/>
						<img src={text4} alt={''} className={`hero-text hero-text4 ${styles.heroElement}`}/>
						<img src={text5} alt={''} className={`hero-text hero-text5 ${styles.heroElement}`}/>
						<img src={text6} alt={''} className={`hero-text hero-text6 ${styles.heroElement}`}/>
					</div>
				</div>
			</div>
			<div className={`main-content-wrapper bg-white opacity-0 px-4 py-24 md:py-36 lg:py-44`}>
				<div className="main-content opacity-0">
					<div className="mx-auto max-w-screen-sm mb-24">
						<img src={mainWhenWhere} width={1500} alt={''}
								 className={`max-w-full mx-auto mb-16 lg:mb-32 ${styles.mainWhenWhere}`}/>
						<div className={'mb-16 lg:mb-32'}>
							<div className="flex flex-col gap-6">
								<div className={'xl:flex justify-center gap-4'}>
									<img src={whoKParentsLabel} width={614} alt={''}
											 className={`max-w-full mx-auto xl:mx-0 ${styles.whoKParentsLabel}`}/>
									<div className={'max-w-full md:flex justify-center gap-2 mx-auto xl:mx-0'}>
										<img src={whoKParentsValue1} width={590} alt={''}
												 className={`max-w-full mx-auto md:mx-0 ${styles.whoKParentsValue1}`}/>
										<img src={whoKParentsValue2} width={629} alt={''}
												 className={`max-w-full mx-auto md:mx-0 ${styles.whoKParentsValue2}`}/>
									</div>
								</div>
								<div className={'xl:flex justify-center gap-4'}>
									<img src={whoDParentsLabel} width={600} alt={''}
											 className={`max-w-full mx-auto xl:mx-0 ${styles.whoDParentsLabel}`}/>
									<div className={'max-w-full md:flex justify-center gap-2 mx-auto xl:mx-0'}>
										<img src={whoDParentsValue1} width={533} alt={''}
												 className={`max-w-full mx-auto md:mx-0 ${styles.whoDParentsValue1}`}/>
										<img src={whoDParentsValue2} width={326} alt={''}
												 className={`max-w-full mx-auto md:mx-0 ${styles.whoDParentsValue2}`}/>
									</div>
								</div>
								<div className={'xl:flex justify-center gap-4'}>
									<img src={whoBestsLabel} width={321} alt={''}
											 className={`max-w-full mx-auto xl:mx-0 ${styles.whoBestsLabel}`}/>
									<div className={'max-w-full md:flex justify-center gap-2 mx-auto xl:mx-0'}>
										<img src={whoBestsValue1} width={488} alt={''}
												 className={`max-w-full mx-auto md:mx-0 ${styles.whoBestsValue1}`}/>
										<img src={whoBestsValue2} width={300} alt={''}
												 className={`max-w-full mx-auto md:mx-0 ${styles.whoBestsValue2}`}/>
									</div>
								</div>
							</div>
						</div>
						<img src={mainRestInfo} width={714} alt={''} className={`max-w-full mx-auto mb-16 ${styles.mainRestInfo}`}/>
						<div className="text-center text-lg">
							<div className="mb-24">
								<p className={'font-bold text-[#E37938] tracking-wider'}>
									- τηλέφωνο Κ : <a href={'tel:+306997040549'}>6997040549</a>
								</p>
								<p className={'font-bold text-[#E37938] tracking-wider'}>
									- τηλέφωνο Δ : <a href={'tel:+306981104151'}>6981104151</a>
								</p>
							</div>
							<div className={'font-bold text-lg text-[#A293E4] tracking-wider mb-4'}>
								{copied ? (
									<p>το IBAN αντιγράφηκε!</p>
								) : (
									<p>
										IBAN (Εθνική Τράπεζα): <button className={'tracking-wider'} onClick={() => {
										navigator.clipboard.writeText('GR3201104690000046900148779').then(
											() => {
												setCopied(true);
												console.log('successfully copied IBAN to your clipboard');
											},
											() => {
												console.log('error copying IBAN to clipboard');
											}
										)
									}}>GR3201104690000046900148779</button>
									</p>
								)}
							</div>
						</div>
					</div>
					<div className={'map mb-24'}>
						<div className={'max-w-4xl mx-auto'}>
							<div className={`${styles.mapWrapper}`}>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.158716204169!2d23.8542118!3d38.1829872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a175d480ea0129%3A0x1744cc4ea5ba4a82!2zzprPhM6uzrzOsSAyOA!5e0!3m2!1sen!2sgr!4v1689870669340!5m2!1sen!2sgr&z=2"
									width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"/>
							</div>
						</div>
					</div>
					<div className={'mx-auto text-center'}>
						<img src={logo} width={173} alt={''} className={'inline-block'}/>
					</div>
				</div>
			</div>
		</main>
	)
}

export default IndexPage

export const Head = () => {
	return <title>Κ + Δ = L.F.e.A.e.</title>;
}
