import { motion } from "framer-motion";
// import gsap from "gsap";
import React from "react";
import styled from "styled-components";

import Hamburger from "../subComponents/Hamburger";
import HomeBtn from "../subComponents/HomeBtn";

import { IconContext } from "react-icons";
import { FcCalendar, FcSelfie } from "react-icons/fc";
import Twemoji from "react-twemoji";

const Container = styled.div`
	position: relative;
	height: 100vh;
	width: 100vw;
`;

const Box = styled(motion.div)`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 0;
`;

const Title = styled(motion.h2)`
	z-index: 1;
	position: relative;
`;

const ContentWrap = styled.div`
	margin: 2rem auto;
	max-width: 680px;
	padding: 0 1rem;
`;
const ContentList = styled(motion.ul)`
	list-style: none;
	padding-bottom: 2rem;
`;

const ContentItem = styled(motion.li)`
	margin-bottom: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 2rem 3.5rem;
	border-radius: 1rem;
	background-color: var(--white);
	box-shadow: 4px 4px 3px #567c72;
	@media screen and (max-width: 767.98px) {
		padding: 1rem;
		margin-bottom: 1rem;
	}
`;
const ContentEmoji = styled.div`
	width: 12%;
	.twemoji {
		width: 100% !important;
	}
`;

const ContentInn = styled.div`
	width: 83%;
`;

const ContentTitle = styled.h3`
	font-size: clamp(18px, 3vw, 22px);
	margin-bottom: 0.5rem;
	color: var(--green-dark);
`;

const ContentText = styled.div`
	p,
	dl {
		font-size: 1rem;
		color: #3b544e;
		line-height: 1.4;
		dt {
			/* text-decoration: underline; */
			color: var(--green-dark);
			font-weight: bold;
		}
		dd:not(:last-of-type) {
			margin-bottom: 0.5rem;
		}
	}
`;

// Framer-motion configuration
const ContainerVariant = {
	hidden: { scale: 0, opacity: 0 },
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
			delayChildren: 1,
		},
	},
};

const ListVariant = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			mass: 0.9,
		},
	},
};

const AboutPage = () => {
	return (
		<IconContext.Provider value={{ size: "100%" }}>
			<motion.div>
				<Container>
					<HomeBtn />

					<Title
						className="pageTitle"
						initial={{ y: -200 }}
						animate={{ y: 0, transition: { type: "spring", delay: 0.4 } }}
						exit={{ y: 200, opacity: 0, scale: 0, transition: { delay: 0.4, duration: 0.5 } }}
					>
						ABOUT
					</Title>
					<Hamburger />

					<ContentWrap>
						<ContentList variants={ContainerVariant} initial="hidden" animate="show">
							<ContentItem variants={ListVariant} exit={{ scale: 0, opacity: 0, transition: { delay: 0.4 } }}>
								<ContentEmoji>
									<FcSelfie />
								</ContentEmoji>
								<ContentInn>
									<ContentTitle>現在</ContentTitle>
									<ContentText>
										<p>
											2022年6月よりWeb制作会社にて、食品系ECサイトの制作に携わっております。主にサイトの更新や新規LPの制作をしております。
										</p>
									</ContentText>
								</ContentInn>
							</ContentItem>
							<ContentItem variants={ListVariant} exit={{ scale: 0, opacity: 0, transition: { delay: 0.3 } }}>
								<ContentEmoji>
									<FcCalendar />
								</ContentEmoji>
								<ContentInn>
									<ContentTitle>経歴</ContentTitle>
									<ContentText>
										<dl>
											<dt>2020年6月〜</dt>
											<dd>WEB制作会社にてECサイトのコーダーとして勤務</dd>
											<dt>2020年11月〜2021年5月</dt>
											<dd>職業訓練校にてWEBデザイン制作科を受講</dd>
											<dt>2020年4月〜9月</dt>
											<dd>特許事務所にて事務職を経験</dd>
										</dl>
									</ContentText>
								</ContentInn>
							</ContentItem>
							<ContentItem variants={ListVariant} exit={{ scale: 0, opacity: 0, transition: { delay: 0.2 } }}>
								<ContentEmoji>
									<Twemoji options={{ className: "twemoji" }}>
										<p>🛫</p>
									</Twemoji>
								</ContentEmoji>
								<ContentInn>
									<ContentTitle>学生時代</ContentTitle>
									<ContentText>
										<p>
											英語・英米文学を主に学習し、３年次には１年間のカナダ留学を経験いたしました。英語の実力としては基本的な英語の読み聞き、日常会話などが可能です。
										</p>
									</ContentText>
								</ContentInn>
							</ContentItem>
							{/* <ContentItem variants={ListVariant} exit={{ scale: 0, opacity: 0, transition: { delay: 0.1 } }}>
								<ContentEmoji>
									<Twemoji options={{ className: "twemoji" }}>
										<p>📚</p>
									</Twemoji>
								</ContentEmoji>
								<ContentInn>
									<ContentTitle>好きなこと</ContentTitle>
									<ContentText>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam totam impedit! Voluptas
											consequatur alias modi sed magnam laborum blanditiis.
										</p>
									</ContentText>
								</ContentInn>
							</ContentItem> */}
						</ContentList>
					</ContentWrap>
				</Container>
			</motion.div>
		</IconContext.Provider>
	);
};

export default AboutPage;
