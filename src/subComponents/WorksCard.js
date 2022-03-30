import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Box = styled(motion.li)`
	width: 18rem;
	/* height: 60vh; */
	/* padding: 1.5rem 2rem; */
	margin-right: 8rem;
	background-color: var(--white);
	border-radius: 28px;
	border: 20px solid var(--green-dark);
	display: flex;
	flex-direction: column;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
	/* justify-content: space-between; */
	@media screen and (max-width: 820px) {
		width: 22rem;
	}
	@media screen and (max-width: 767.98px) {
		width: 18rem;
		margin-right: 5rem;
	}
`;

const Thumb = styled.div`
	flex-shrink: 0;
	border-radius: 8px 8px 0 0;
	max-width: 300px;
	width: 100%;
	overflow: hidden;

	@media screen and (max-width: 820px) {
		max-width: 100%;
	}

	img {
		height: auto;
		width: 100%;
		vertical-align: bottom;
		transition: all 250ms ease;
		${Box}:hover & {
			transform: scale(1.2);
			@media screen and (max-width: 820px) {
				transform: none;
			}
		}
	}
`;

const Text = styled.div`
	padding: 0.75rem 1rem;
	@media screen and (max-width: 820px) {
		padding: 2rem 1.5rem;
	}
	@media screen and (max-width: 767.98px) {
		padding: 1rem 1rem;
	}
`;

const Title = styled.h2`
	color: var(--red);
	font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
	color: var(--brown);
	font-size: calc(0.8em + 0.3vw);
	font-weight: 400;
`;

const Tags = styled.div`
	/* padding: 0.5rem 0; */
	padding: 0.25rem 0 0.5rem;
	display: flex;
	flex-wrap: wrap;
	gap: 0.25rem;
	${Box}:hover & {
	}
`;

const Tag = styled.span`
	margin-top: 0.25rem;
	font-size: 13px;
	padding: 0.15rem 0.3rem 0.1rem;
	border-radius: 5px;
	font-weight: bold;
	color: var(--green);
	border: 2px solid var(--green);
`;

const Footer = styled.footer`
	display: flex;
	justify-content: space-between;
	margin-top: auto;
`;

const Link = styled(NavLink)`
	margin-left: auto;
	padding: 0.5rem 2.5rem;
	background-color: var(--green-dark);
	border-radius: 0 0 7px 0;
	color: var(--white);
	font-size: calc(1em + 0.5vw);
	text-decoration: none;
	transition: all 250ms ease;
	font-family: var(--ff-big);

	&:hover {
		background-color: #58887b;
		box-shadow: 5px 5px 4px 2px #567c72 inset;
	}
`;

// Framer-motion configuration
const Item = {
	hidden: {
		scale: 0,
	},
	show: {
		scale: 1,
		transition: {
			type: "spring",
			duration: 0.5,
		},
	},
};

const Card = (props) => {
	const { id, name, description, tags, demo, github, img } = props.data;

	return (
		<Box exit={{ scale: 0 }} key={id} variants={Item}>
			<Thumb>
				<img src={img} alt="" />
			</Thumb>
			<Text>
				<Title>{name}</Title>
				<Tags>
					{tags.map((t, id) => {
						return <Tag key={id}>{t}</Tag>;
					})}
				</Tags>
				<Description>{description}</Description>
			</Text>
			<Footer>
				<Link to={{ pathname: `${demo}` }} target="_blank">
					Visit
				</Link>
			</Footer>
		</Box>
	);
};

export default Card;
