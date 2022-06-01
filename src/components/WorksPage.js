import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import styled, { keyframes } from "styled-components";
import HomeBtn from "../subComponents/HomeBtn";
import { Work } from "../data/WorksData";
import Card from "../subComponents/WorksCard";
import WorksBg from "../subComponents/WorksBg";
import Hamburger from "../subComponents/Hamburger";

const Container = styled.div`
	width: 100vw;
`;

const Title = styled(motion.h2)``;

const Box = styled(motion.div)`
	height: 400vh;
	position: relative;
	display: flex;

	@media screen and (max-width: 767.98px) {
		height: 370vh;
	}
`;

const Main = styled(motion.ul)`
	position: fixed;
	top: 25%;
	left: calc(8rem + 15vw);
	display: flex;
	color: white;
	@media screen and (max-width: 767.98px) {
		left: calc(5rem + 15vw);
	}
`;

const Rotate = styled.span`
	display: block;
	position: fixed;
	right: 1rem;
	bottom: 1rem;
	width: 80px;
	height: 80px;
	z-index: 1;
`;

const ScrollAnime = keyframes`
0% {
    transform: scale(1, 0);
    transform-origin: 0 0;
  }
  35% {
    transform: scale(1, 1);
    transform-origin: 0 0;
  }
  35.1% {
    transform: scale(1, 1);
    transform-origin: 0 100%;
  }
  70%, 100% {
    transform: scale(1, 0);
    transform-origin: 0 100%;
  }`;

const Scroll = styled(motion.p)`
	display: inline-block;
	position: fixed;
	left: 40px;
	bottom: 0;
	/* z-index: 1; */
	padding: 10px 10px 110px;
	overflow: hidden;
	color: #fff;
	font-size: 16px;
	font-weight: bold;
	line-height: 1;
	letter-spacing: 0.2em;
	text-transform: uppercase;
	text-decoration: none;
	writing-mode: vertical-lr;
	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 2px;
		height: 100px;
		background: #fff;
		animation: ${ScrollAnime} 2s cubic-bezier(1, 0, 0, 1) infinite;
	}
`;

// Framer-motion Configuration
const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
			duration: 0.5,
			delayChildren: 1.5,
		},
	},
};

const WorksPage = () => {
	const ref = useRef(null);

	useEffect(() => {
		let element = ref.current;

		const rotate = () => {
			element.style.transform = `translateX(${-window.pageYOffset}px)`;
		};

		window.addEventListener("scroll", rotate);
		return () => window.removeEventListener("scroll", rotate);
	}, []);

	return (
		<Container>
			<WorksBg />
			<motion.div exit={{ opacity: 0, transition: { duration: 0.5 } }}>
				<HomeBtn />
			</motion.div>
			<Scroll
				initial={{ y: 200, opacity: 0 }}
				animate={{ y: 0, opacity: 1, transition: { type: "spring", duration: 1.5, delay: 0.3 } }}
				exit={{ scale: 0, opacity: 0, transition: { delay: 0.1, duration: 0.5 } }}
			>
				Scroll
			</Scroll>
			<Title
				className="pageTitle"
				initial={{ y: -200 }}
				animate={{ y: 0, transition: { type: "spring", duration: 1.5, delay: 0.7 } }}
				exit={{ scale: 0, opacity: 0, transition: { delay: 0.1, duration: 0.5 } }}
			>
				WORKS
			</Title>
			<Hamburger />
			<Box>
				<Main ref={ref} variants={container} initial="hidden" animate="show">
					{Work.map((d) => (
						<Card key={d.id} data={d} />
					))}
				</Main>
			</Box>
		</Container>
	);
};

export default WorksPage;
