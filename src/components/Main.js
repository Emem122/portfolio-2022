import { motion } from "framer-motion";
import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3rem;
	background-color: var(--green);
	position: relative;
`;

const MainVisual = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

const Title = styled(motion.h1)`
	font-size: clamp(24px, 17vw, 120px);
	color: var(--red);
	line-height: 1;
	text-shadow: 3px 2px 0px var(--green-dark);
	margin: 0;
	font-family: var(--ff-big);

	span {
		display: inline-block;
	}

	span.white {
		color: var(--white);
	}
`;

const SubTitle = styled.h3`
	color: var(--green-dark);
`;

const bounce = keyframes`
0%{
	transform: translateY(0);
}
50% {
  transform: translateY(-5px);
}
100%{
  transform: translateY(0px);
}
`;

const Nav = styled(motion.div)`
	display: flex;
	gap: 2rem;
	@media screen and (max-width: 767.98px) {
		bottom: 20%;
		gap: 0.75rem;
	}

	& > * {
		font-size: clamp(20px, 10vw, 60px);
		color: var(--white);
		cursor: pointer;
	}
`;

const ABOUT = styled(motion(NavLink))`
	text-shadow: -3px -3px 0px var(--green-dark);
`;
const SKILLS = styled(motion(NavLink))`
	text-shadow: -3px -3px 0px var(--green-dark);
`;
const WORKS = styled(motion(NavLink))`
	text-shadow: -3px -3px 0px var(--green-dark);
`;

/* variants */
const parentVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 2.5,
			when: "beforeChildren",
			staggerChildren: 0.2,
		},
	},
};

const childVariants = {
	hidden: {
		scale: 0,
	},
	visible: {
		scale: [0, 1.2, 1],
		transition: {
			type: "spring",
			duration: 0.5,
		},
	},
};

const Main = () => {
	useLayoutEffect(() => {
		const tl = gsap.timeline();
		tl.from(".title span", {
			y: -10,
			opacity: 0,
			ease: "Power2.easeInOut",
			stagger: 0.1,
			delay: 0.5,
		})
			.from(".sub-title", {
				y: -10,
				opacity: 0,
				ease: "Power2.easeInOut",
			})
			.to(".title span", {
				y: -5,
				repeat: -1,
				yoyo: true,
				textShadow: "4px 4px 0 rgba(79, 9, 29, 0.5)",
				stagger: {
					from: "edges",
					amount: 1,
				},
			});
	}, []);

	return (
		<motion.div exit={{ y: -1000 }} transition={{ duration: 0.8 }}>
			<Container>
				<MainVisual>
					<Title className="title">
						<span>W</span>
						<span>e</span>
						<span>l</span>
						<span>c</span>
						<span>o</span>
						<span>m</span>
						<span>e</span> <br className="md-up" />
						<span>t</span>
						<span>o</span> <br />
						<span className="white">
							<span>E</span>
							<span>N</span>
						</span>{" "}
						<br className="md-up" />
						<span>p</span>
						<span>o</span>
						<span>r</span>
						<span>t</span>
						<span>f</span>
						<span>o</span>
						<span>l</span>
						<span>i</span>
						<span>o</span>
					</Title>
				</MainVisual>
				<SubTitle className="sub-title">Web Design / Coder</SubTitle>
				<Nav className="navTitle" variants={parentVariants} initial="hidden" animate="visible">
					<ABOUT
						to="/about"
						variants={childVariants}
						whileHover={{
							y: [0, -5],
							textShadow: "-3px -3px 0px #dd4a48",
							transition: {
								y: {
									duration: 0.4,
									yoyo: Infinity,
									ease: "easeOut",
								},
							},
						}}
					>
						ABOUT
					</ABOUT>
					<SKILLS
						to="/skills"
						variants={childVariants}
						whileHover={{
							y: [0, -5],
							textShadow: "-3px -3px 0px #dd4a48",
							transition: {
								y: {
									duration: 0.4,
									yoyo: Infinity,
									ease: "easeOut",
								},
							},
						}}
					>
						SKILLS
					</SKILLS>
					<WORKS
						to="/works"
						variants={childVariants}
						whileHover={{
							y: [0, -5],
							textShadow: "-3px -3px 0px #dd4a48",
							transition: {
								y: {
									duration: 0.4,
									yoyo: Infinity,
									ease: "easeOut",
								},
							},
						}}
					>
						WORKS
					</WORKS>
				</Nav>
			</Container>
		</motion.div>
	);
};

export default Main;
