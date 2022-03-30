import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import styled from "styled-components";
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
	/* background-color: #97bfb4; */
	position: fixed;
	top: 12rem;
	left: calc(8rem + 15vw);
	/* height: 40vh; */
	display: flex;
	color: white;
	@media screen and (max-width: 820px) {
		top: 20rem;
	}
	@media screen and (max-width: 767.98px) {
		left: calc(5rem + 15vw);
		top: 15rem;
	}
	@media screen and (max-width: 375px) {
		top: 10rem;
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

// Framer-motion Configuration
const container = {
	hidden: { opacity: 0, transition: { delayChildren: 2.1 } },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
			duration: 0.5,
			delayChildren: 2.1,
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
			<Title
				className="pageTitle"
				initial={{ y: -200, transition: { type: "spring", duration: 1.5, delay: 1 } }}
				animate={{ y: 0, transition: { type: "spring", duration: 1.5, delay: 1 } }}
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
