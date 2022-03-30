import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import styled from "styled-components";
import HomeBtn from "../subComponents/HomeBtn";
import { SvgFile } from "./SvgImages";
import Mouse from "./../images/mouse.png";
import Hamburger from "../subComponents/Hamburger";

const Container = styled.div`
	background-color: var(--green);
	/* position: relative; */
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	display: flex;
	justify-content: center;
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
	margin: 160px auto 0;
	border-radius: 20px;
	overflow: hidden;
	box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	position: relative;
	@media screen and (max-width: 767.98px) {
		margin-top: 100px;
		width: 90vw;
		height: fit-content;
	}
`;

const WindowBar = styled.div`
	flex-shrink: 0;
	width: 100%;
	height: 45px;
	background-color: #c4c4c4;
	position: relative;
	cursor: pointer;

	.button {
		width: 18px;
		height: 18px;
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
`;
const Content = styled.div`
	display: flex;
	margin: 0 auto;
	gap: 20px;
	max-width: 500px;

	&:nth-of-type(even) {
		flex-direction: row-reverse;
	}
`;
const SkillIcon = styled.div`
	margin-top: 0.5rem;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: var(--yellow);
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	color: #fff;
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
		background-color: var(--green);
		margin-right: 0;
		margin-left: clamp(10px, 5vw, 60px);
	}

	&:before {
		content: "";
		position: absolute;
		top: 10px;
		left: -33px;
		/* margin-top: -15px; */
		border: 15px solid transparent;
		border-left: 25px solid #fff;
		z-index: 0;
		-webkit-transform: rotate(195deg);
		transform: rotate(195deg);

		${Content}:nth-of-type(even) & {
			right: -13px;
			left: inherit;
			border-right: 25px solid var(--green);
			border-left: none;
			-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
		}
	}
`;

const SkillsPage = () => {
	return (
		<Container>
			<motion.div exit={{ y: -200, transition: { delay: 0.3 } }}>
				<HomeBtn />
			</motion.div>
			<Title
				className="pageTitle"
				initial={{ y: -200, transition: { type: "spring", duration: 1.5, delay: 0.1 } }}
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
					<p style={{ color: "var(--green-dark)", fontFamily: "var(--ff-big)", textAlign: "center" }}>File1</p>
				</motion.div>
				<motion.div
					style={{ textAlign: "center" }}
					initial={{ scale: 0 }}
					animate={{ scale: 1, transition: { delay: 1.8 } }}
					exit={{ scale: 0, transition: { delay: 0.2 } }}
				>
					<SvgFile style={{ width: "80%", verticalAlign: "bottom" }} />
					<p style={{ color: "var(--green-dark)", fontFamily: "var(--ff-big)", textAlign: "center" }}>File2</p>
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
				drag
				dragConstraints={{
					right: 500,
					left: -500,
					top: -40,
					bottom: 300,
				}}
			>
				<WindowBar>
					<span className="button button--red"></span>
					<span className="button button--yellow"></span>
					<span className="button button--green"></span>
				</WindowBar>
				<ContentWrap>
					<Content>
						<SkillIcon>JS</SkillIcon>
						<SkillBalloonArea>
							<SkillName>JavaScript</SkillName>
							<SkillBalloon>
								<p>
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
								</p>
							</SkillBalloon>
						</SkillBalloonArea>
					</Content>
					<Content>
						<SkillIcon>JS</SkillIcon>
						<SkillBalloonArea>
							<SkillName>JavaScript</SkillName>
							<SkillBalloon>
								<p>
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
								</p>
							</SkillBalloon>
						</SkillBalloonArea>
					</Content>
					<Content>
						<SkillIcon>JS</SkillIcon>
						<SkillBalloonArea>
							<SkillName>JavaScript</SkillName>
							<SkillBalloon>
								<p>
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
								</p>
							</SkillBalloon>
						</SkillBalloonArea>
					</Content>
					<Content>
						<SkillIcon>JS</SkillIcon>
						<SkillBalloonArea>
							<SkillName>JavaScript</SkillName>
							<SkillBalloon>
								<p>
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
								</p>
							</SkillBalloon>
						</SkillBalloonArea>
					</Content>
					<Content>
						<SkillIcon>JS</SkillIcon>
						<SkillBalloonArea>
							<SkillName>JavaScript</SkillName>
							<SkillBalloon>
								<p>
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
								</p>
							</SkillBalloon>
						</SkillBalloonArea>
					</Content>
					<Content>
						<SkillIcon>JS</SkillIcon>
						<SkillBalloonArea>
							<SkillName>JavaScript</SkillName>
							<SkillBalloon>
								<p>
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
								</p>
							</SkillBalloon>
						</SkillBalloonArea>
					</Content>
					<Content>
						<SkillIcon>JS</SkillIcon>
						<SkillBalloonArea>
							<SkillName>JavaScript</SkillName>
							<SkillBalloon>
								<p>
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
								</p>
							</SkillBalloon>
						</SkillBalloonArea>
					</Content>
					<Content>
						<SkillIcon>JS</SkillIcon>
						<SkillBalloonArea>
							<SkillName>JavaScript</SkillName>
							<SkillBalloon>
								<p>
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
								</p>
							</SkillBalloon>
						</SkillBalloonArea>
					</Content>
				</ContentWrap>
			</WindowContainer>
		</Container>
	);
};

export default SkillsPage;