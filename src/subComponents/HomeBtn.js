import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
	padding: 0.4rem 1rem;
	position: fixed;
	left: 35px;
	top: 38px;
	z-index: 3;
	background-color: #5f9284;
	border-radius: 1rem;
	@media screen and (max-width: 767.98px) {
		left: 20px;
		top: 32px;
	}
`;

const Logo = styled(NavLink)`
	h2 {
		color: #f5eedc;
	}
`;

const HomeBtn = () => {
	return (
		<Logo to="/">
			<Container
				initial={{ x: -200 }}
				animate={{ x: 0, transition: { type: "spring", delay: 0.4 } }}
				exit={{ scale: 0 }}
				whileHover={{ filter: "brightness(1.15)" }}
			>
				<motion.h2>EN</motion.h2>
			</Container>
		</Logo>
	);
};

export default HomeBtn;
