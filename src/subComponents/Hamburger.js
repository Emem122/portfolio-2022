import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
	position: fixed;
	right: 15px;
	top: 15px;
	z-index: 10;
	@media screen and (max-width: 767.98px) {
		right: 10px;
		top: 10px;
	}
`;

const Button = styled(motion.div)`
	cursor: pointer;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	background: var(--red);
	border: 8px solid var(--yellow);
	box-sizing: border-box;

	@media screen and (max-width: 767.98px) {
		width: 40px;
		height: 40px;
	}
`;
const CloseButton = styled.div`
	cursor: pointer;
`;
const Content = styled(motion.div)`
	position: absolute;
	top: 60px;
	right: 20px;
	z-index: 5;
	display: flex;
	flex-direction: column;
	gap: 10px;
	@media screen and (max-width: 767.98px) {
		top: 50px;
		right: 10px;
	}

	& > * {
		background-color: var(--white);
		color: var(--brown);
		padding: 0.8rem 1.5rem;
		text-align: center;
		border-radius: 20px;
		font-size: 18px;
		font-weight: bold;
		@media screen and (max-width: 767.98px) {
			box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
		}
	}
`;
const SkillsButton = styled(motion(NavLink))``;
const AboutButton = styled(motion(NavLink))``;
const WorksButton = styled(motion(NavLink))``;

const Hamburger = () => {
	const [open, setOpen] = useState(false);

	return (
		<Container>
			<Button
				onClick={() => setOpen(!open)}
				whileHover={{ scale: 0.8 }}
				whileTap={{ scale: 0.6 }}
				initial={{ scale: 0 }}
				animate={{ scale: 1, transition: { delay: 0.4 } }}
				exit={{ scale: 0, transition: { delay: 0.4 } }}
			></Button>
			<AnimatePresence>
				{open && (
					<Content>
						<AboutButton
							onClick={() => setOpen(false)}
							to="/about"
							initial={{ scale: 0, opacity: 0, y: -20 }}
							animate={{
								scale: 1,
								opacity: 1,
								y: 0,
								transition: {
									type: "spring",
									delay: 0,
								},
							}}
							exit={{ scale: 0, opacity: 0, y: -20, transition: { type: "spring", delay: 0.4 } }}
							whileHover={{ scale: 1.1, transition: { delay: 0 } }}
						>
							About
						</AboutButton>
						<SkillsButton
							onClick={() => setOpen(false)}
							to="/skills"
							initial={{ scale: 0, opacity: 0, y: -20 }}
							animate={{
								scale: 1,
								opacity: 1,
								y: 0,
								transition: {
									type: "spring",
								},
							}}
							exit={{ scale: 0, opacity: 0, y: -20, transition: { type: "spring", delay: 0.2 } }}
							whileHover={{ scale: 1.1, transition: { delay: 0 } }}
						>
							Skills
						</SkillsButton>

						<WorksButton
							onClick={() => setOpen(false)}
							to="/works"
							initial={{ scale: 0, opacity: 0, y: -20 }}
							animate={{
								scale: 1,
								opacity: 1,
								y: 0,
								transition: {
									type: "spring",
								},
							}}
							exit={{ scale: 0, opacity: 0, y: -20, transition: { type: "spring" } }}
							whileHover={{ scale: 1.1, transition: { delay: 0 } }}
						>
							Works
						</WorksButton>
					</Content>
				)}
			</AnimatePresence>
		</Container>
	);
};

export default Hamburger;
