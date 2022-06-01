import React from "react";
import { motion } from "framer-motion";
// import gsap from "gsap";
import styled from "styled-components";
import HomeBtn from "../subComponents/HomeBtn";
import { SvgFile } from "./SvgImages";
import Mouse from "../images/mouse.png";
import Hamburger from "../subComponents/Hamburger";
import { Skill } from "../data/SkillsData";

const Container = styled(motion.div)`
	background-color: var(--green);
	box-sizing: border-box;
	border: 1rem solid var(--white);
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	display: flex;
	justify-content: center;
	@media screen and (max-width: 820px) {
		border-width: 10px;
	}
`;

const Title = styled(motion.h2)``;

const FileWrap = styled.div`
	position: absolute;
	top: 8rem;
	left: 4rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	@media screen and (max-width: 820px) {
		top: inherit;
		flex-direction: row;
		bottom: 2rem;
		left: 3rem;
	}
	@media screen and (max-width: 767.98px) {
		transform: scale(0.9);
		bottom: 1rem;
		left: 1rem;
		gap: 1rem;
	}
	@media screen and (max-width: 375px) {
		transform: scale(0.8);
	}
`;

const MouseImg = styled(motion.img)`
	max-width: 200px;
	width: 100%;
	position: absolute;
	right: 1rem;
	bottom: 1rem;
	@media screen and (max-width: 767.98px) {
		width: 40%;
	}
	@media screen and (max-width: 375px) {
		width: 30%;
		bottom: 0rem;
	}
`;

const WindowContainer = styled(motion.div)`
	width: 65vw;
	max-width: 800px;
	height: 70vh;
	max-height: 650px;
	margin: 10% auto 0;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 5;
	@media screen and (max-width: 767.98px) {
		margin-top: 100px;
		width: 90vw;
		height: fit-content;
		max-height: 70vh;
	}
`;

const WindowBar = styled.div`
	flex-shrink: 0;
	width: 100%;
	height: 35px;
	background-color: #c4c4c4;
	position: relative;

	.button {
		width: 15px;
		height: 15px;
		position: absolute;
		top: 50%;
		border-radius: 50%;
		transform: translateY(-50%);
		&--red {
			background-color: var(--red);
			left: 15px;
		}
		&--yellow {
			background-color: var(--yellow);
			left: 45px;
		}
		&--green {
			background-color: var(--green);
			left: 75px;
		}
	}
`;

const ContentWrap = styled.div`
	padding: 2vw clamp(10px, 5vw, 50px);
	background-color: var(--white);
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	height: 100%;

	::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 7px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.35);
		box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
	}
`;
const Content = styled.div`
	display: flex;
	margin: 0 auto;
	gap: 20px;
	max-width: 550px;

	&:nth-of-type(even) {
		flex-direction: row-reverse;
	}
`;
const SkillIcon = styled.div`
	margin-top: 0.5rem;
	width: 50px;
	height: 50px;
	/* border-radius: 50%; */
	/* background: #fff; */
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	/* color: #fff; */

	& > * {
		width: 100%;
		height: 100%;
	}
`;
const SkillBalloonArea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	${Content}:nth-of-type(even) & {
		align-items: flex-end;
	}
`;

const SkillName = styled.h5`
	color: var(--brown);
`;

const SkillBalloon = styled.div`
	padding: 1rem;
	border-radius: 20px;
	background-color: #fff;
	position: relative;
	margin-right: clamp(10px, 5vw, 60px);
	font-size: clamp(12px, 2vw, 14px);
	${Content}:nth-of-type(even) & {
		background-color: rgba(191, 220, 198, 1);
		margin-right: 0;
		margin-left: clamp(10px, 5vw, 60px);
	}

	&:before {
		content: "";
		position: absolute;
		top: 10px;
		left: -33px;
		border: 15px solid transparent;
		border-left: 25px solid #fff;
		z-index: 0;
		-webkit-transform: rotate(195deg);
		transform: rotate(195deg);

		${Content}:nth-of-type(even) & {
			right: -13px;
			left: inherit;
			border-right: 25px solid rgba(191, 220, 198, 1);
			border-left: none;
			-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
		}
	}
	p {
		line-height: 1.4;
	}
`;

const SkillsPage = () => {
	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { type: "spring", duration: 1.5, delay: 0.1 } }}
			exit={{ opacity: 0, transition: { delay: 0.3, duration: 0.5 } }}
		>
			<motion.div exit={{ y: -200, transition: { delay: 0.3 } }}>
				<HomeBtn />
			</motion.div>
			<Title
				className="pageTitle"
				initial={{ y: -200 }}
				animate={{ y: 0, transition: { type: "spring", duration: 1.5, delay: 0.1 } }}
				exit={{ y: -200, opacity: 0, transition: { delay: 0.3, duration: 0.5 } }}
			>
				SKILLS
			</Title>
			<Hamburger />
			<FileWrap>
				<motion.div
					style={{ textAlign: "center" }}
					initial={{ scale: 0 }}
					animate={{ scale: 1, transition: { delay: 1.6 } }}
					exit={{ scale: 0, transition: { delay: 0.1 } }}
				>
					<SvgFile style={{ width: "80%", verticalAlign: "bottom" }} />
					<p style={{ color: "var(--green-dark)", fontFamily: "Bakbak One", textAlign: "center" }}>File1</p>
				</motion.div>
				<motion.div
					style={{ textAlign: "center" }}
					initial={{ scale: 0 }}
					animate={{ scale: 1, transition: { delay: 1.8 } }}
					exit={{ scale: 0, transition: { delay: 0.2 } }}
				>
					<SvgFile style={{ width: "80%", verticalAlign: "bottom" }} />
					<p style={{ color: "var(--green-dark)", fontFamily: "Bakbak One", textAlign: "center" }}>File2</p>
				</motion.div>
			</FileWrap>
			<MouseImg
				initial={{ scale: 0 }}
				animate={{ scale: 1, transition: { type: "spring", delay: 1.9, duration: 0.5 } }}
				exit={{ scale: 0, transition: { delay: 0.3 } }}
				src={Mouse}
			></MouseImg>
			<WindowContainer
				initial={{ y: 1000, scale: 0, transition: { type: "spring", duration: 1.2, delay: 0.5 } }}
				animate={{ y: 0, scale: 1, transition: { type: "spring", duration: 1.2, delay: 0.5 } }}
				exit={{ y: 1000, scale: 0, transition: { delay: 0.4, duration: 1.2, delay: 0.4 } }}
				// drag
				// dragConstraints={{
				// 	right: 0,
				// 	left: 0,
				// 	top: 0,
				// 	bottom: 0,
				// }}
			>
				<WindowBar>
					<span className="button button--red"></span>
					<span className="button button--yellow"></span>
					<span className="button button--green"></span>
				</WindowBar>
				<ContentWrap>
					{Skill.map((d) => (
						<Content key={d.id}>
							<SkillIcon
								style={{
									color: `${d.color}`,
									backgroundColor: `${d.backgroundColor}`,
									borderRadius: `${d.borderRadius}`,
								}}
							>
								{d.icon}
							</SkillIcon>
							<SkillBalloonArea>
								<SkillName>{d.name}</SkillName>
								<SkillBalloon>
									<p>{d.desc}</p>
								</SkillBalloon>
							</SkillBalloonArea>
						</Content>
					))}
				</ContentWrap>
			</WindowContainer>
		</Container>
	);
};

export default SkillsPage;
