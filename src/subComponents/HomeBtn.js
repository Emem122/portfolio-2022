import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { BiHomeCircle } from "react-icons/bi";

const Container = styled(motion.div)`
	padding: 0.25rem 1rem;
	position: fixed;
	left: 30px;
	top: 20px;
	z-index: 3;
	background-color: var(--green-dark);
	border-radius: 1rem;
	@media screen and (max-width: 767.98px) {
		left: 10px;
		top: 10px;
	}
`;

const HomeIcon = styled(NavLink)`
	&:hover {
		svg {
			fill: var(--green);
		}
	}
	svg {
		width: 40px;
		height: 40px;
		fill: var(--white);
		transition: all 250ms ease;
	}
`;

const HomeBtn = () => {
	return (
		<Container
			initial={{ x: -200, transition: { type: "spring", duration: 1.5, delay: 1 } }}
			animate={{ x: 0, transition: { type: "spring", duration: 1.5, delay: 1 } }}
			exit={{ scale: 0 }}
		>
			<HomeIcon to="/">
				<BiHomeCircle />
			</HomeIcon>
		</Container>
	);
};

export default HomeBtn;
