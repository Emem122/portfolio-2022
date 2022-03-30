import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import {
	VectorBrown,
	VectorDarkYellow,
	VectorRed,
	VectorGreen,
	VectorWhite,
	VectorYellow,
} from "../components/SvgImages";

const Box = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	opacity: 0.8;
`;

const Brown = styled(motion.div)`
	min-width: 200px;
	width: 24vw;
	position: absolute;
	right: 8%;
	top: 20%;
	@media screen and (max-width: 820px) {
		width: 50vw;
		right: 0%;
	}
	@media screen and (max-width: 767.98px) {
		width: 70vw;
		top: 10%;
		right: -2%;
	}
`;

const DarkYellow = styled(motion.div)`
	min-width: 200px;
	width: 19vw;
	position: absolute;
	left: 0;
	bottom: 6%;
	@media screen and (max-width: 820px) {
		width: 40vw;
	}

	@media screen and (max-width: 767.98px) {
		width: 50vw;
	}
`;

const Red = styled(motion.div)`
	min-width: 200px;
	width: 23vw;
	position: absolute;
	left: 13%;
	top: 18%;
	@media screen and (max-width: 820px) {
		width: 44vw;
		left: -10%;
	}
	@media screen and (max-width: 767.98px) {
		width: 50vw;
		left: -10%;
		top: 30%;
	}
`;

const Green = styled(motion.div)`
	// style={{ minWidth: "200px", width: "22vw", position: "absolute", top: 0, left: "45%" }}
	min-width: 200px;
	width: 25vw;
	position: absolute;
	top: 0;
	left: 45%;
	@media screen and (max-width: 820px) {
		left: 20%;
		width: 50vw;
	}
	@media screen and (max-width: 767.98px) {
		width: 70vw;
		left: 2%;
	}
`;

const White = styled(motion.div)`
	// style={{ minWidth: "200px", width: "22vw", position: "absolute", bottom: 0, left: "38%" }}
	min-width: 200px;
	width: 24vw;
	position: absolute;
	bottom: 0%;
	left: 38%;
	@media screen and (max-width: 820px) {
		width: 50vw;
		top: 50%;
	}
	@media screen and (max-width: 767.98px) {
		width: 80vw;
		top: 40%;
		left: inherit;
		right: -5%;
	}
`;

const Yellow = styled(motion.div)`
	// style={{ minWidth: "200px", width: "20vw", position: "absolute", bottom: 0, right: 0 }}
	min-width: 200px;
	width: 23vw;
	position: absolute;
	bottom: 0;
	right: 0;
	@media screen and (max-width: 820px) {
		width: 40vw;
	}
	@media screen and (max-width: 767.98px) {
		width: 70vw;
		right: -5%;
		bottom: -2%;
	}
`;

const WorksBg = () => {
	return (
		<Box>
			<Brown
				// style={{ minWidth: "200px", width: "21vw", position: "absolute", right: "8%", top: "20%" }}
				initial={{ scale: 0, transition: { type: "spring", duration: 1.5, delay: 0.2 } }}
				animate={{ scale: 1, transition: { type: "spring", duration: 1.5, delay: 0.2 } }}
				exit={{ scale: 0, opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
			>
				<VectorBrown style={{ verticalAlign: "bottom", width: "100%", height: "auto" }} />
			</Brown>
			<DarkYellow
				// style={{ minWidth: "200px", width: "14vw", position: "absolute", left: 0, bottom: "6%" }}
				initial={{ scale: 0, left: -200, transition: { type: "spring", duration: 1.5, delay: 0.5 } }}
				animate={{ scale: 1, left: 0, transition: { type: "spring", duration: 1.5, delay: 0.5 } }}
				exit={{ scale: 0, left: -200, opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
			>
				<VectorDarkYellow style={{ verticalAlign: "bottom", width: "100%", height: "auto" }} />
			</DarkYellow>
			<Red
				// style={{ minWidth: "200px", width: "21vw", position: "absolute", left: "13%", top: "18%" }}
				initial={{ scale: 0, transition: { type: "spring", duration: 1.5, delay: 0.3 } }}
				animate={{ scale: 1, transition: { type: "spring", duration: 1.5, delay: 0.3 } }}
				exit={{ scale: 0, opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
			>
				<VectorRed style={{ verticalAlign: "bottom", width: "100%", height: "auto" }} />
			</Red>
			<Green
				// style={{ minWidth: "200px", width: "22vw", position: "absolute", top: 0, left: "45%" }}
				initial={{ scale: 0, top: -200, transition: { type: "spring", duration: 1.5, delay: 0.5 } }}
				animate={{ scale: 1, top: 0, transition: { type: "spring", duration: 1.5, delay: 0.5 } }}
				exit={{ scale: 0, top: -200, opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
			>
				<VectorGreen style={{ verticalAlign: "bottom", width: "100%", height: "auto" }} />
			</Green>
			<White
				// style={{ minWidth: "200px", width: "22vw", position: "absolute", bottom: 0, left: "38%" }}
				initial={{ scale: 0, bottom: -200, transition: { type: "spring", duration: 1.5, delay: 0.3 } }}
				animate={{ scale: 1, bottom: 0, transition: { type: "spring", duration: 1.5, delay: 0.3 } }}
				exit={{ scale: 0, bottom: -200, opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
			>
				<VectorWhite style={{ verticalAlign: "bottom", width: "100%", height: "auto" }} />
			</White>
			<Yellow
				// style={{ minWidth: "200px", width: "20vw", position: "absolute", bottom: 0, right: 0 }}
				initial={{ scale: 0, right: -200, bottom: -100, transition: { type: "spring", duration: 1.5, delay: 0.4 } }}
				animate={{ scale: 1, right: 0, bottom: 0, transition: { type: "spring", duration: 1.5, delay: 0.4 } }}
				exit={{ scale: 0, right: -200, bottom: -100, opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
			>
				<VectorYellow style={{ verticalAlign: "bottom", width: "100%", height: "auto" }} />
			</Yellow>
		</Box>
	);
};

export default WorksBg;
