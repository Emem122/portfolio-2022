import { motion } from "framer-motion";
// import gsap from "gsap";
import React from "react";
import styled from "styled-components";

import Hamburger from "../subComponents/Hamburger";
import HomeBtn from "../subComponents/HomeBtn";
// import { ProfilePic } from "./SvgImages";

import { IconContext } from "react-icons";
import { FcCalendar, FcSelfie } from "react-icons/fc";
import Twemoji from "react-twemoji";

const Container = styled.div`
	position: relative;
	height: 100vh;
	width: 100vw;
	/* overflow: hidden; */
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
	margin: 2rem auto 0;
	max-width: 680px;
	padding: 0 1rem;
`;
const ContentList = styled(motion.ul)`
	list-style: none;
	& > li:not(:first-of-type) {
		margin-top: 1.5rem;
	}
`;

const ContentItem = styled(motion.li)`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 2rem 3.5rem;
	border-radius: 1rem;
	background-color: #f5eedc;
	box-shadow: 4px 4px 3px #567c72;
	@media screen and (max-width: 767.98px) {
		padding: 1.5rem 2rem;
	}
`;
const ContentEmoji = styled.div`
	width: 15%;
	.twemoji {
		width: 100% !important;
	}
`;

const ContentInn = styled.div`
	width: 80%;
`;

const ContentTitle = styled.h3`
	font-size: clamp(18px, 3vw, 24px);
	margin-bottom: 0.5rem;
	color: #5f9284;
`;

const ContentText = styled.div`
	p {
		font-size: 1rem;
		color: #3b544e;
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
		scaleX: 0,
		opacity: 0,
	},
	show: {
		scaleX: 1,
		opacity: 1,
		transition: {
			type: "spring",
		},
	},
};

const AboutPage = () => {
	return (
		<IconContext.Provider value={{ size: "100%" }}>
			<motion.div>
				<Container>
					<motion.div exit={{ y: 200, opacity: 0, transition: { duration: 0.5 } }}>
						<HomeBtn />
					</motion.div>

					<Title
						className="pageTitle"
						initial={{ y: -200, transition: { type: "spring", duration: 1.5, delay: 0.3 } }}
						animate={{ y: 0, transition: { type: "spring", duration: 1.5, delay: 0.3 } }}
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
									<ContentTitle>プロフィール</ContentTitle>
									<ContentText>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam totam impedit! Voluptas
											consequatur alias modi sed magnam laborum blanditiis.
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
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam totam impedit! Voluptas
											consequatur alias modi sed magnam laborum blanditiis.
										</p>
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
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam totam impedit! Voluptas
											consequatur alias modi sed magnam laborum blanditiis.
										</p>
									</ContentText>
								</ContentInn>
							</ContentItem>
							<ContentItem variants={ListVariant} exit={{ scale: 0, opacity: 0, transition: { delay: 0.1 } }}>
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
							</ContentItem>
						</ContentList>
					</ContentWrap>
				</Container>
			</motion.div>
		</IconContext.Provider>
	);
};

export default AboutPage;
