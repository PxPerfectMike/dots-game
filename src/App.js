import React, { useState, useEffect, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import './App.css';

function App() {
	const controls = useDragControls();

	const [gameObj0, setGameObj0] = useState(Math.floor(Math.random() * 4));
	const [gameObj1, setGameobj1] = useState(Math.floor(Math.random() * 4));
	const [gameObj2, setGameobj2] = useState(Math.floor(Math.random() * 4));
	const [gameObj3, setGameobj3] = useState(Math.floor(Math.random() * 4));
	const [gameObj4, setGameobj4] = useState(Math.floor(Math.random() * 4));
	const [gameObj5, setGameobj5] = useState(Math.floor(Math.random() * 4));
	const [gameObj6, setGameobj6] = useState(Math.floor(Math.random() * 4));
	const [gameObj7, setGameobj7] = useState(Math.floor(Math.random() * 4));
	const [gameObj8, setGameobj8] = useState(Math.floor(Math.random() * 4));
	const [gameObj9, setGameobj9] = useState(Math.floor(Math.random() * 4));
	const [gameObj10, setGameobj10] = useState(Math.floor(Math.random() * 4));
	const [gameObj11, setGameobj11] = useState(Math.floor(Math.random() * 4));
	const [gameObj12, setGameobj12] = useState(Math.floor(Math.random() * 4));
	const [gameObj13, setGameobj13] = useState(Math.floor(Math.random() * 4));
	const [gameObj14, setGameobj14] = useState(Math.floor(Math.random() * 4));
	const [gameObj15, setGameobj15] = useState(Math.floor(Math.random() * 4));
	const [gameObj16, setGameobj16] = useState(Math.floor(Math.random() * 4));
	const [gameObj17, setGameobj17] = useState(Math.floor(Math.random() * 4));
	const [gameObj18, setGameobj18] = useState(Math.floor(Math.random() * 4));
	const [gameObj19, setGameobj19] = useState(Math.floor(Math.random() * 4));
	const [gameObj20, setGameobj20] = useState(Math.floor(Math.random() * 4));
	const [gameObj21, setGameobj21] = useState(Math.floor(Math.random() * 4));
	const [gameObj22, setGameobj22] = useState(Math.floor(Math.random() * 4));
	const [gameObj23, setGameobj23] = useState(Math.floor(Math.random() * 4));
	const [gameObj24, setGameobj24] = useState(Math.floor(Math.random() * 4));

	const [winPercentage, setWinPercentage] = useState(100);
	const [won, setWon] = useState(false);
	const [per, setPer] = useState(0);
	const [level, setLevel] = useState(0);

	let gameArray = [
		gameObj0,
		gameObj1,
		gameObj2,
		gameObj3,
		gameObj4,
		gameObj5,
		gameObj6,
		gameObj7,
		gameObj8,
		gameObj9,
		gameObj10,
		gameObj11,
		gameObj12,
		gameObj13,
		gameObj14,
		gameObj15,
		gameObj16,
		gameObj17,
		gameObj18,
		gameObj19,
		gameObj20,
		gameObj21,
		gameObj22,
		gameObj23,
		gameObj24,
	];

	const setterArray = [
		setGameObj0,
		setGameobj1,
		setGameobj2,
		setGameobj3,
		setGameobj4,
		setGameobj5,
		setGameobj6,
		setGameobj7,
		setGameobj8,
		setGameobj9,
		setGameobj10,
		setGameobj11,
		setGameobj12,
		setGameobj13,
		setGameobj14,
		setGameobj15,
		setGameobj16,
		setGameobj17,
		setGameobj18,
		setGameobj19,
		setGameobj20,
		setGameobj21,
		setGameobj22,
		setGameobj23,
		setGameobj24,
	];

	let winState = [
		[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
		[0, 0, 0, 0, 0, 0, 3, 2, 3, 0, 0, 2, 1, 2, 0, 0, 3, 2, 3, 0, 0, 0, 0, 0, 0],
		[0, 1, 3, 1, 0, 1, 1, 3, 1, 1, 3, 3, 2, 3, 3, 1, 1, 3, 1, 1, 0, 1, 3, 1, 0],
	];
	// get the x, y position of the middle game-item
	const middleRef = useRef();

	const getPosition = () => {
		const x = middleRef.current.offsetLeft;

		const y = middleRef.current.offsetTop;
		console.log(x, y);
		return { x, y };
	};

	useEffect(() => {
		window.addEventListener('resize', getPosition);
	}, []);

	// let level = 0;
	// console.log(level);

	// const randomizeLevel = () => {
	// 	level = winState[Math.floor(Math.random() * winState.length)];
	// 	console.log(level);
	// };

	function checkWinPercentage() {
		let count = 0;
		// let newLevel = true;
		for (let i = 0; i < gameArray.length; i++) {
			if (gameArray[i] === winState[level][i]) {
				count++;
			}
			//  else {
			// 	newLevel = false;
			// }
		}
		// if (newLevel) {
		// 	randomizeLevel();
		// }
		setPer(count);
		setWinPercentage(Math.floor((count / 25) * 100));
		if (count === 25) {
			setWon(true);
			winSetter();
		}

		return per;
	}

	function winSetter() {
		for (let i = 0; i < gameArray.length; i++) {
			setterArray[i](4);
		}
	}

	useEffect(() => {
		checkWinPercentage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gameArray]);

	function changeLogic1() {
		for (let i = 0; i < gameArray.length; i++) {
			if (gameArray[i] === 1) {
				setterArray[i](2);
			}
		}
	}

	function changeLogic2() {
		for (let i = 0; i < gameArray.length; i++) {
			if (gameArray[i] === 2) {
				setterArray[i](1);
			}
		}
	}

	function changeLogic3() {
		for (let i = 0; i < gameArray.length; i++) {
			if (gameArray[i] === 3) {
				setterArray[i](2);
			}
		}
	}

	const motionProps = {
		initial: { scale: 0 },
		animate: { scale: 1 },
		transition: { type: 'spring', stiffness: 260, damping: 20 },
	};

	const winProps = {
		initial: { scale: 0 },
		animate: { backgroundColor: 'rgba(0,0,0,0)' },
		transition: { ease: 'linear' },
	};

	const winPropsCoin = {
		initial: { scale: 1 },
		animate: {
			scale: 3,
			background:
				'radial-gradient(circle at center, rgb(255,215,11), rgb(218,165,32) 100%)',
		},
		transition: { ease: 'easeOut', duration: 0.6 },
	};

	function handleDragEnd() {
		for (let i = 0; i < gameArray.length; i++) {
			if (gameArray[i] === 4) {
				setterArray[i](Math.floor(Math.random() * 4));
			}
		}
		console.log('restart');
		if (level < 2) {
			setLevel(level + 1);
		} else {
			setLevel(0);
		}
		setWon(false);
	}

	function handleClick0() {
		switch (gameArray[0]) {
			case 0:
				setGameObj0(gameObj0 + 1);
				break;
			case 1:
				changeLogic1();
				setGameObj0(gameObj0 - 1);
				break;
			case 2:
				changeLogic2();
				setGameObj0(gameObj0 + 1);
				break;
			case 3:
				changeLogic3();
				setGameObj0(0);
				break;
			default:
				break;
		}
	}

	function handleClick1() {
		switch (gameArray[1]) {
			case 0:
				setGameobj1(gameObj1 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj1(gameObj1 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj1(gameObj1 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj1(0);
				break;
			default:
				break;
		}
	}

	function handleClick2() {
		switch (gameArray[2]) {
			case 0:
				setGameobj2(gameObj2 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj2(gameObj2 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj2(gameObj2 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj2(0);
				break;
			default:
				break;
		}
	}

	function handleClick3() {
		switch (gameArray[3]) {
			case 0:
				setGameobj3(gameObj3 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj3(gameObj3 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj3(gameObj3 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj3(0);
				break;
			default:
				break;
		}
	}

	function handleClick4() {
		switch (gameArray[4]) {
			case 0:
				setGameobj4(gameObj4 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj4(gameObj4 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj4(gameObj4 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj4(0);
				break;
			default:
				break;
		}
	}

	function handleClick5() {
		switch (gameArray[5]) {
			case 0:
				setGameobj5(gameObj5 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj5(gameObj5 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj5(gameObj5 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj5(0);
				break;
			default:
				break;
		}
	}

	function handleClick6() {
		switch (gameArray[6]) {
			case 0:
				setGameobj6(gameObj6 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj6(gameObj6 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj6(gameObj6 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj6(0);
				break;
			default:
				break;
		}
	}

	function handleClick7() {
		switch (gameArray[7]) {
			case 0:
				setGameobj7(gameObj7 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj7(gameObj7 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj7(gameObj7 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj7(0);
				break;
			default:
				break;
		}
	}

	function handleClick8() {
		switch (gameArray[8]) {
			case 0:
				setGameobj8(gameObj8 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj8(gameObj8 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj8(gameObj8 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj8(0);
				break;
			default:
				break;
		}
	}

	function handleClick9() {
		switch (gameArray[9]) {
			case 0:
				setGameobj9(gameObj9 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj9(gameObj9 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj9(gameObj9 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj9(0);
				break;
			default:
				break;
		}
	}

	function handleClick10() {
		switch (gameArray[10]) {
			case 0:
				setGameobj10(gameObj10 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj10(gameObj10 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj10(gameObj10 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj10(0);
				break;
			default:
				break;
		}
	}

	function handleClick11() {
		switch (gameArray[11]) {
			case 0:
				setGameobj11(gameObj11 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj11(gameObj11 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj11(gameObj11 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj11(0);
				break;
			default:
				break;
		}
	}

	function handleClick12() {
		switch (gameArray[12]) {
			case 0:
				setGameobj12(gameObj12 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj12(gameObj12 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj12(gameObj12 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj12(0);
				break;
			default:
				break;
		}
	}

	function handleClick13() {
		switch (gameArray[13]) {
			case 0:
				setGameobj13(gameObj13 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj13(gameObj13 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj13(gameObj13 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj13(0);
				break;
			default:
				break;
		}
	}

	function handleClick14() {
		switch (gameArray[14]) {
			case 0:
				setGameobj14(gameObj14 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj14(gameObj14 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj14(gameObj14 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj14(0);
				break;
			default:
				break;
		}
	}

	function handleClick15() {
		switch (gameArray[15]) {
			case 0:
				setGameobj15(gameObj15 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj15(gameObj15 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj15(gameObj15 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj15(0);
				break;
			default:
				break;
		}
	}

	function handleClick16() {
		switch (gameArray[16]) {
			case 0:
				setGameobj16(gameObj16 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj16(gameObj16 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj16(gameObj16 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj16(0);
				break;
			default:
				break;
		}
	}

	function handleClick17() {
		switch (gameArray[17]) {
			case 0:
				setGameobj17(gameObj17 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj17(gameObj17 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj17(gameObj17 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj17(0);
				break;
			default:
				break;
		}
	}

	function handleClick18() {
		switch (gameArray[18]) {
			case 0:
				setGameobj18(gameObj18 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj18(gameObj18 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj18(gameObj18 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj18(0);
				break;
			default:
				break;
		}
	}

	function handleClick19() {
		switch (gameArray[19]) {
			case 0:
				setGameobj19(gameObj19 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj19(gameObj19 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj19(gameObj19 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj19(0);
				break;
			default:
				break;
		}
	}

	function handleClick20() {
		switch (gameArray[20]) {
			case 0:
				setGameobj20(gameObj20 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj20(gameObj20 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj20(gameObj20 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj20(0);
				break;
			default:
				break;
		}
	}

	function handleClick21() {
		switch (gameArray[21]) {
			case 0:
				setGameobj21(gameObj21 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj21(gameObj21 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj21(gameObj21 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj21(0);
				break;
			default:
				break;
		}
	}

	function handleClick22() {
		switch (gameArray[22]) {
			case 0:
				setGameobj22(gameObj22 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj22(gameObj22 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj22(gameObj22 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj22(0);
				break;
			default:
				break;
		}
	}

	function handleClick23() {
		switch (gameArray[23]) {
			case 0:
				setGameobj23(gameObj23 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj23(gameObj23 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj23(gameObj23 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj23(0);
				break;
			default:
				break;
		}
	}

	function handleClick24() {
		switch (gameArray[24]) {
			case 0:
				setGameobj24(gameObj24 + 1);
				break;
			case 1:
				changeLogic1();
				setGameobj24(gameObj24 - 1);
				break;
			case 2:
				changeLogic2();
				setGameobj24(gameObj24 + 1);
				break;
			case 3:
				changeLogic3();
				setGameobj24(0);
				break;
			default:
				break;
		}
	}

	const insultArray = [
		'You are not as bad as people say, you are much, much worse.',
		"I don't know what your problem is, but I'll bet it's hard to pronounce.",
		'There is no vaccine against stupidity.',
		"You're the reason the gene pool needs a lifeguard.",
		'Oh, the places you’ll go!',
		'You are unattractive!',
		'Is common sense really common? Why don’t I find any in you?',
		'I talked to my therapist about you.',
		'Is there a worse insult than being compared to you?',
	];

	function randomInsult() {
		return insultArray[Math.floor(Math.random() * insultArray.length)];
	}

	return (
		<div className='App'>
			<h1 className='title'>Logic Dots</h1>
			<div className='container'>
				{gameArray[0] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick0}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[0] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick0}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[0] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick0}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[0] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick0}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[0] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[1] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick1}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[1] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick1}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[1] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick1}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[1] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick1}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[1] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[2] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick2}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[2] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick2}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[2] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick2}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[2] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick2}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[2] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[3] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick3}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[3] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick3}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[3] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick3}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[3] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick3}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[3] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[4] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick4}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[4] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick4}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[4] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick4}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[4] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick4}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[4] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[5] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick5}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[5] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick5}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[5] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick5}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[5] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick5}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[5] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[6] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick6}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[6] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick6}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[6] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick6}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[6] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick6}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[6] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[7] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick7}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[7] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick7}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[7] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick7}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[7] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick7}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[7] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[8] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick8}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[8] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick8}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[8] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick8}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[8] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick8}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[8] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[9] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick9}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[9] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick9}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[9] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick9}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[9] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick9}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[9] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[10] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick10}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[10] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick10}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[10] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick10}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[10] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick10}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[10] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[11] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick11}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[11] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick11}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[11] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick11}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[11] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick11}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[11] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[12] === 0 && (
					<motion.div
						ref={middleRef}
						className='game-item0 game-item'
						onClick={handleClick12}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[12] === 1 && (
					<motion.div
						ref={middleRef}
						className='game-item1 game-item'
						onClick={handleClick12}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[12] === 2 && (
					<motion.div
						ref={middleRef}
						className='game-item2 game-item'
						onClick={handleClick12}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[12] === 3 && (
					<motion.div
						ref={middleRef}
						className='game-item3 game-item'
						onClick={handleClick12}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[12] === 4 && (
					<motion.div
						ref={middleRef}
						className='game-item4 game-item coin'
						initial={winPropsCoin.initial}
						animate={winPropsCoin.animate}
						transition={winPropsCoin.transition}
						drag='x'
						dragControls={controls}
						onViewportLeave={handleDragEnd}
					>
						YOU WIN!
					</motion.div>
				)}

				{gameArray[13] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick13}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[13] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick13}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[13] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick13}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[13] === 3 && (
					<motion.div
						ref={middleRef}
						className='game-item3 game-item'
						onClick={handleClick13}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[13] === 4 && (
					<motion.div
						id='centerGameObj'
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[14] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick14}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[14] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick14}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[14] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick14}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[14] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick14}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[14] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[15] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick15}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[15] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick15}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[15] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick15}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[15] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick15}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[15] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[16] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick16}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[16] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick16}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[16] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick16}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[16] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick16}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[16] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[17] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick17}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[17] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick17}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[17] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick17}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[17] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick17}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[17] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[18] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick18}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[18] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick18}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[18] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick18}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[18] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick18}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[18] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[19] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick19}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[19] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick19}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[19] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick19}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[19] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick19}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[19] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[20] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick20}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[20] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick20}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[20] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick20}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[20] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick20}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[20] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[21] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick21}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[21] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick21}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[21] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick21}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[21] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick21}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[21] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[22] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick22}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[22] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick22}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[22] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick22}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[22] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick22}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[22] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[23] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick23}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[23] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick23}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[23] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick23}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[23] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick23}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[23] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}

				{gameArray[24] === 0 && (
					<motion.div
						className='game-item0 game-item'
						onClick={handleClick24}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[24] === 1 && (
					<motion.div
						className='game-item1 game-item'
						onClick={handleClick24}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[24] === 2 && (
					<motion.div
						className='game-item2 game-item'
						onClick={handleClick24}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[24] === 3 && (
					<motion.div
						className='game-item3 game-item'
						onClick={handleClick24}
						initial={motionProps.initial}
						animate={motionProps.animate}
						transition={motionProps.transition}
					></motion.div>
				)}
				{gameArray[24] === 4 && (
					<motion.div
						className='game-item4 game-item'
						initial={winProps.initial}
						animate={winProps.animate}
						transition={winProps.transition}
					></motion.div>
				)}
			</div>
			<p style={{ color: 'white' }}>{level}</p>
			<div id='winPerc' className='winPerc'>
				{!won && winPercentage !== 0 && (
					<>
						<p>{`You have ${winPercentage}% of the dots correct!`}</p>
					</>
				)}
				{!won && winPercentage === 0 && (
					<>
						<p>{`0% correct... ${randomInsult()}`}</p>
					</>
				)}
				{won && (
					<>
						<p>{'100% Dots Correct! You Win!!'}</p>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
