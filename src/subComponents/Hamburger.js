import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
	position: fixed;
	right: 35px;
	top: 35px;
	z-index: 10;
	@media screen and (max-width: 767.98px) {
		right: 20px;
		top: 30px;
	}
`;

const Button = styled(motion.div)`
	cursor: pointer;
	display: flex;
	gap: 3px;
	height: 42px;
	width: 42px;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	/* background-color: #f5eedc; */
	/* background-color: #5f9284; */
	border: 2px solid #5f9284;
	@media screen and (max-width: 767.98px) {
		height: 38px;
		width: 38px;
	}
`;

const Dot = styled(motion.div)`
	width: 8px;
	height: 8px;
	/* background-color: #5f9284; */
	background-color: #f5eedc;
	border-radius: 50%;
`;

const Content = styled(motion.div)`
	position: absolute;
	top: 50px;
	right: 10px;
	z-index: 5;
	display: flex;
	flex-direction: column;
	gap: 10px;
	@media screen and (max-width: 767.98px) {
		top: 50px;
		right: 10px;
	}

	& > * {
		background-color: #f5eedc;
		color: #4f091d;
		padding: 0.6rem 1.2rem;
		text-align: center;
		border-radius: 15px;
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

const buttonVariants = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.4,
		},
	},
	exit: {
		scale: 0,
	},
};

const Hamburger = () => {
	const [open, setOpen] = useState(false);
	const handleClick = (e) => {
		// クリックされた要素が.hamburgerの内側かどうか？
		if (!e.target.closest(".hamburger")) {
			// console.log("外側");
			setOpen(false);
		} else {
			// console.log("内側");
		}
	};
	useEffect(() => {
		document.addEventListener("click", handleClick);
	}, []);

	return (
		<Container className="hamburger">
			<Button
				onClick={() => setOpen(!open)}
				variants={buttonVariants}
				whileHover={{ scale: 0.9 }}
				whileTap={{ scale: 0.8 }}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<Dot></Dot>
				<Dot></Dot>
				<Dot></Dot>
			</Button>
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
							exit={{ scale: 0, opacity: 0, y: -20, transition: { type: "spring", delay: 0.2 } }}
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
							exit={{ scale: 0, opacity: 0, y: -20, transition: { type: "spring", delay: 0.1 } }}
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
