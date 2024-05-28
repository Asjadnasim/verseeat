import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

const Carving = () => {
	return (
		<Flex
			flexDirection='column'
			backgroundImage='/assets/section3-background.png'
			minHeight={200}
			mt={'-150px'}
			py={100}
			backgroundRepeat='no-repeat'
			backgroundSize='cover'
		>
			<div className='mt-20'></div>
			<Image
				src={`/assets/section3-image1.png`}
				alt='Your Image'
				w='84px'
				h='74px'
				objectFit='contain'
				ml={'60px'}
				mt={0}
				// position={'absolute'}
				// left={'20px'}
				// bottom={-20}
			/>
			<Heading
				px={51}
				textTransform='uppercase'
				whiteSpace='pre-wrap'
				textAlign='center'
				as='h1'
				fontSize={'70px'}
				color='#F05C5C'
				
			>
				Craving an out-of-this-world dining experience from the comfort of your
				home?
			</Heading>
			<Image
				src={`/assets/carving.png`}
				alt='Your Image'
				w='100%'
				h='560px'
				objectFit='contain'
				my={100}
			/>
			<Heading
				px={51}
				textTransform='uppercase'
				whiteSpace='pre-wrap'
				textAlign='center'
				as='h1'
				fontSize={'70px'}
				color='#F05C5C'
				
			>
				Slay hunger with flavours from our{' '}
				<span className='text-[#7500CB]'>eight</span> diverse food planet,
				curated for your delight.
			</Heading>
			<Image
				src={`/assets/section3-image1.png`}
				alt='Your Image'
				w='84px'
				h='74px'
				objectFit='contain'
				ml={'60px'}
			/>
			<Image
				src={`/assets/section2-food.png`}
				alt='Your Image'
				w='315px'
				h='300px'
				objectFit='contain'
				ml={-20}
				mt={'28px'}
			/>{' '}
			{/* <Image
				src={`/assets/main-corriander.png`}
				alt='Your Image'
				w='311px'
				h='332px'
				objectFit='contain'
				position={'absolute'}
				right={'20px'}
				mt={'480px'}
				// bottom={100}
			/> */}
		</Flex>
	);
};

export default Carving;
