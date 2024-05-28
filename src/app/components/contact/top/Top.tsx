import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Form } from '..';

const Top = () => {
	return (
		<Flex flexDirection='column' minHeight={810}>
			<Flex alignItems='center' flexDirection='column'>
				<Flex
					width={'600px'}
					height={'80px'}
					backgroundColor={'#E6D8C3'}
					boxShadow={'card'}
					borderRadius={'20px'}
					justifyContent='space-between'
					alignItems='center'
				>
					<Flex alignItems='center' pl='30px' py='25px'>
						<Text textStyle='header-link' color='#F05C5C' whiteSpace='nowrap'>
							As seen on
						</Text>
						<Image
							src={`/assets/shark-tank-india.png`}
							alt='Your Image'
							w='100%'
							h='60px'
							objectFit='contain'
							pl={5}
						/>
					</Flex>

					<Flex overflow='hidden' borderTopRightRadius='20px'>
						<Image
							src={`/assets/shark-tanks/group.png`}
							alt='Your Image'
							w='100%'
							h='80px'
							objectFit='cover'
							mr={'-25px'}
							ml={'40px'}
						/>
					</Flex>
				</Flex>
				<Heading
					mt={12}
					textAlign='center'
					color='red.100'
					as='h1'
					fontSize='70px'
					textTransform='uppercase'
				>
					let&apos;s chat!
				</Heading>
				<Heading
					className='mb-10'
					textAlign='center'
					color='red.100'
					as='h1'
					fontSize='70px'
					textTransform='uppercase'
				>
					get in touch with eatverses.
				</Heading>
			</Flex>

			<Flex justifyContent={'center'} alignItems={'center'}>
				<Box>
					<Flex justifyContent='space-between' px='50px'>
						<Image
							src={`/assets/main-food1.png`}
							alt='Your Image'
							w='235px'
							h='260px'
							objectFit='contain'
						/>
					</Flex>
					<Flex justifyContent='space-between' px='50px'>
						<Image
							src={`/assets/main-food1.png`}
							alt='Your Image'
							w='235px'
							h='260px'
							objectFit='contain'
							left={'82px'}
							top={'787px'}
						/>
					</Flex>
					<Flex justifyContent='space-between' px='50px'>
						<Image
							src={`/assets/main-food1.png`}
							alt='Your Image'
							w='235px'
							h='260px'
							objectFit='contain'
						/>
					</Flex>
				</Box>

				<Flex justifyContent={'space-around'} px='50px'>
					<Form />
				</Flex>

				<Flex justifyContent='space-between' px='50px'>
					<Image
						src={`/assets/main-food1.png`}
						alt='Your Image'
						w='322px'
						h='305px'
						objectFit='contain'
						left={'1081px'}
						top={'655px'}
					/>
				</Flex>
			</Flex>

			{/* <Flex justifyContent='space-between' px='50px'>
				<Image
					src={`/assets/main-food1.png`}
					alt='Your Image'
					w='290px'
					h='290px'
					objectFit='contain'
					top={'787px'}
					left={'81.32px'}
				/>
				<Flex flexDirection='column'>
					<Flex>
						<Image
							src={`/assets/main-corriander.png`}
							alt='Your Image'
							w='60px'
							h='76px'
							objectFit='contain'
							mt={12}
							ml={-20}
						/>

						<Button
							alignSelf='center'
							leftIcon={
								<Image
									src='/assets/scooter.svg'
									alt='Order Online'
									height={0}
									width={0}
									style={{ width: 'auto', height: 'auto' }}
								/>
							}
							boxShadow='card-light'
							backgroundColor='purple.200'
							borderRadius={'10px'}
							textStyle='header-link'
							marginLeft='auto'
							marginRight='auto'
							color='white'
						>
							Order Online
						</Button>
					</Flex>
				</Flex>
				<Image
					src={`/assets/main-food2.png`}
					alt='Your Image'
					w='290px'
					h='290px'
					objectFit='contain'
					mt={6}
				/>
				<Image
					src={`/assets/basil-leaf.png`}
					alt='Your Image'
					w='65px'
					h='50px'
					objectFit='contain'
					mt={'200px'}
					ml={-20}
				/>
			</Flex> */}
			{/* <Flex px='50px' justifyContent='space-between'>
				<Flex mt={20}>
					<Image
						src={`/assets/swiggy.png`}
						alt='Your Image'
						w='34px'
						h='50px'
						objectFit='contain'
					/>
					<Flex flexDirection='column' ml={2}>
						<Image
							src={`/assets/swiggy-rating.png`}
							alt='Your Image'
							w='162px'
							h='30px'
							objectFit='contain'
						/>

						<Text>Excellent</Text>
					</Flex>
				</Flex>
				<Image
					src={`/assets/main-food3.png`}
					alt='Your Image'
					w='290px'
					h='290px'
					objectFit='contain'
					mt={-20}
				/>

				<Image
					src={`/assets/chilli.png`}
					alt='Your Image'
					w='86px'
					h='80px'
					objectFit='contain'
					mt={12}
					ml={-20}
				/>
				<Flex flexDirection='row' alignItems='center'>
					<Text whiteSpace='nowrap'>Happy Customers</Text>
					<Image
						src={`/assets/rated-by.png`}
						alt='Your Image'
						w='138px'
						h='50px'
						objectFit='contain'
						ml='10px'
					/>
				</Flex>
			</Flex> */}
		</Flex>
	);
};

export default Top;
