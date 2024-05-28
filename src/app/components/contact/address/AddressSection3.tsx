import { Box, Flex, Heading, Image, Text, IconButton } from '@chakra-ui/react';

const AddressSection3 = () => {
	return (
		<Flex
			flexDirection='column'
			minHeight={1000}
			mt={'-130px'}
			backgroundImage='/assets/section3-background.png'
			backgroundRepeat='no-repeat'
			backgroundSize='cover'
		>
			<Box mt='250px'>
				<Flex alignItems='center' justifyContent={'space-around'}>
					{/* image */}
					<Flex>
						<Image
							src='https://s3-alpha-sig.figma.com/img/b92c/c7f9/1347d9398d28bcd93919f218710a3100?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mT7KTs1CljldrzNRcGixCICPL-tuLwillRYDVBVP1tlA9PKhRCX1wITaL-WxKVgmVOukePSdXgEQnk2ZQ4OgSsnI6vl3LvinBozcy6me8PxCgyjZq9wMwUSIYmk~xk8jIKARQpX8BKXCYOpOW~aYuk8gQ-3AAKPTyQsM5lsCsTb1KfHp06mGQ4E3HQk0WX1lp8YrZUZUJsAmCSTAZR44SrXcKI2qhC~RfZM7ZoV9xak0Ht92GXvOzUbYOR2JfTWnUD2o8OFLvlR7j-Cl6txw2vIFH3VqIH-6mVXYDhhxDk-I7pdXMv8u1Lg-0gHWUn~lv-N-o8pvqbdArmNAT3NflQ__'
							alt='address'
							objectFit={'cover'}
							width={'650px'}
							height={'460px'}
							borderRadius={'10%'}
							boxShadow={'card-dark'}
						/>
					</Flex>
					<Flex flexDirection={'column'} justifyContent={'space-evenly'}>
						{/* text */}
						<Box>
							<Heading
								fontSize={'40px'}
								lineHeight={'35px'}
								fontWeight={400}
								textColor={'#F05C5C'}
								textTransform={'uppercase'}
							>
								Address
							</Heading>
							<Heading
								fontSize={'25px'}
								lineHeight={'23px'}
								fontWeight={400}
								textColor={'#331D2E'}
								textTransform={'uppercase'}
							>
								VISION FOODWORKS PRIVATE LIMITED
							</Heading>
							<Text
								fontSize={'20px'}
								lineHeight={'25px'}
								fontWeight={'400'}
								textColor={'#331D2E'}
							>
								AJ -256, AJ Block, Sector II
							</Text>
							<Text
								fontSize={'20px'}
								lineHeight={'25px'}
								fontWeight={'400'}
								textColor={'#331D2E'}
							>
								Bidhannagar, Salt Lake
							</Text>
							<Text
								fontSize={'20px'}
								lineHeight={'25px'}
								fontWeight={'400'}
								textColor={'#331D2E'}
							>
								Kolkata - 700091
							</Text>
							<Text
								fontSize={'20px'}
								lineHeight={'25px'}
								fontWeight={'400'}
								textColor={'#331D2E'}
							>
								West Bengal
							</Text>
							<Text
								fontSize={'20px'}
								lineHeight={'25px'}
								fontWeight={'400'}
								textColor={'#331D2E'}
							>
								India
							</Text>
						</Box>

						<Box mt={'30px'}>
							<Heading
								fontSize={'40px'}
								lineHeight={'35px'}
								fontWeight={400}
								textColor={'#F05C5C'}
								textTransform={'uppercase'}
							>
								Directory
							</Heading>

							<Text
								fontSize={'20px'}
								lineHeight={'25px'}
								fontWeight={'400'}
								textColor={'#331D2E'}
							>
								+91 - 82967 38406
							</Text>
							<Text
								fontSize={'20px'}
								lineHeight={'25px'}
								fontWeight={'400'}
								textColor={'#331D2E'}
							>
								hello@eatverse.in
							</Text>
						</Box>
						<Box mt={'30px'}>
							<Heading
								fontSize={'40px'}
								lineHeight={'35px'}
								fontWeight={400}
								textColor={'#F05C5C'}
								textTransform={'uppercase'}
							>
								Socials
							</Heading>
							<Flex gap={4} display={{ base: 'none', md: 'flex' }} mt={'7px'}>
								<IconButton
									icon={
										<Image
											src='/assets/youtube.svg'
											alt='Youtube'
											height={'auto'}
											width={'auto'}
										/>
									}
									aria-label='Youtube'
									boxShadow='card'
									borderRadius={'10px'}
									backgroundColor='yellow.200'
								/>{' '}
								<IconButton
									icon={
										<Image
											src='/assets/linkedin.svg'
											alt='Youtube'
											height={'auto'}
											width={'auto'}
										/>
									}
									aria-label='LinkedIn'
									boxShadow='card'
									borderRadius={'10px'}
									backgroundColor='yellow.200'
								/>{' '}
								<IconButton
									icon={
										<Image
											src='/assets/insta.svg'
											alt='Instagram'
											height={'auto'}
											width={'auto'}
										/>
									}
									aria-label='Youtube'
									boxShadow='card'
									borderRadius={'10px'}
									backgroundColor='yellow.200'
								/>{' '}
								<IconButton
									icon={
										<Image
											src='/assets/fb.svg'
											alt='Facebook'
											height={'auto'}
											width={'auto'}
										/>
									}
									aria-label='Youtube'
									boxShadow='card'
									borderRadius={'10px'}
									backgroundColor='yellow.200'
								/>{' '}
							</Flex>
						</Box>
					</Flex>
				</Flex>
			</Box>
		</Flex>
	);
};

export default AddressSection3;
