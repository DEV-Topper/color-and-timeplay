import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Hero = () => {
	const [day, setDay] = useState(0);
	const [hour, setHour] = useState(0);
	const [mins, setMins] = useState(0);
	const [sec, setSec] = useState(0);
	const [inputColor, setInputColor] = useState("");

	const changeInput = (e: any) => {
		setInputColor(e.target.value);
	};

	const [color, setColor] = useState("");
	const change = (color: any) => {
		setColor(color);
	};

	useEffect(() => {
		let presentTime: any = new Date();
		let eventTime: any = new Date("10/8/2023 11:59:59");
		let timeDifference: any = eventTime - presentTime;

		const interval = setInterval(() => {
			let day = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

			setDay(day);

			let hour = Math.floor(
				(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			setHour(hour);

			let mins = Math.floor(
				(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
			);

			setMins(mins);

			let sec = Math.floor((timeDifference % (1000 * 60)) / 1000);
			setSec(sec);
		}, 1000);
		return () => clearInterval(interval);
	});

	return (
		<div>
			<Container style={{ backgroundColor: inputColor }}>
				<Wrapper>
					<CountHold>
						<Count color={color}>
							<span>{day}</span> Day (s)
						</Count>
						<Count color={color}>
							<span>{hour}</span> Hours
						</Count>
						<Count color={color}>
							<span>{mins}</span> Minutes
						</Count>
						<Count color={color}>
							<span>{sec}</span> Seconds
						</Count>
					</CountHold>
					<ColorBox>
						<Wrap>
							<Color
								bcc="red"
								onClick={() => change("red")}
							></Color>
							<Color
								bcc="blue"
								onClick={() => change("blue")}
							></Color>
							<Color
								bcc="pink"
								onClick={() => change("pink")}
							></Color>
							<Color
								bcc="orange"
								onClick={() => change("orange")}
							></Color>
							<Color
								bcc="gold"
								onClick={() => change("gold")}
							></Color>
							<Color
								bcc="brown"
								onClick={() => change("brown")}
							></Color>
							<Color
								bcc="purple"
								onClick={() => change("purple")}
							></Color>
							<Color
								bcc="gray"
								onClick={() => change("gray")}
							></Color>
							{/* <Color
								bcc="violet"
								onClick={() => change("violet")}
							></Color> */}
						</Wrap>
					</ColorBox>
					<input
						type="text"
						placeholder="Type Your Color"
						onChange={changeInput}
						style={{
							marginTop: "10px",
							outline: "none",
							border: "2px solid silver",
						}}
					/>
				</Wrapper>
			</Container>
		</div>
	);
};

export default Hero;

const Color = styled.div<{ bcc: string }>`
	width: 50px;
	height: 50px;
	background-color: ${({ bcc }) => bcc};
	cursor: pointer;
	border-radius: 360px;
	position: relative;
	/* animation: bounce 4s ease infinite; */
	/* z-index: -9999999999; */

	/* @keyframes bounce {
		0%,
		100% {
			transform: rotate(0);
		}
		50% {
			transform: rotate(3deg);
		}
	} */
	transition: ease-in-out 360ms;

	&:hover {
		transform: scale(0.9);
	}

	@media screen and (max-width: 780px) {
		width: 30px;
		height: 30px;
	}
`;

const Wrap = styled.div`
	width: 90%;
	height: 90%;
	gap: 10px;
	flex-wrap: wrap;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ColorBox = styled.div`
	width: 600px;
	height: 95px;
	background-color: white;
	border: 2px solid silver;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	/* position: absolute; */
	@media screen and (max-width: 780px) {
		/* margin-bottom: 30px; */
		width: 0px;
		height: 100px;
	}
`;

const Count = styled.div`
	width: 200px;
	height: 80%;
	background-color: ${(props) => props.color || "green"};
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 50px;
	color: white;
	border: 2px solid silver;

	@media screen and (max-width: 1061px) {
		height: 60%;
		margin-left: 10px;
		width: 400px;
	}

	span {
		font-size: 90px;
		font-weight: 800;
		/* margin-bottom: 90px; */

		@media screen and (max-width: 1061px) {
			font-size: 40px;
		}
	}
`;

const Container = styled.div`
	background-color: black;
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	/* background-color: green; */
	height: 90%;
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const CountHold = styled.div`
	width: 90%;
	height: 350px;
	/* background-color: black; */
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 1061px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
`;