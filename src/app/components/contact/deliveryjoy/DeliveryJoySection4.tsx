import { Box, Button, Flex, Heading, Image, Stack } from '@chakra-ui/react';

const DeliveryJoySection4 = () => {
	return (
		<Flex
			flexDirection='column'
			minHeight={1200}
			mt={'-200px'}
			backgroundImage='/assets/section5-background.png'
			backgroundRepeat='no-repeat'
			backgroundSize='cover'
		>
			<Box mt={'150px'}>
				<Flex
					flexDirection={'column'}
					justifyItems={'center'}
					alignItems={'center'}
				>
					<Box>
						<Heading
							fontSize={'70px'}
							lineHeight={'60px'}
							fontWeight={400}
							textColor={'#DFAB45'}
							textTransform={'uppercase'}
							textAlign={'center'}
						>
							Delivery Joy,
						</Heading>
						<Heading
							fontSize={'70px'}
							lineHeight={'60px'}
							fontWeight={400}
							textColor={'#DFAB45'}
							textTransform={'uppercase'}
							textAlign={'center'}
						>
							From the city of joy
						</Heading>
					</Box>

					<Box position={'relative'} mt={'32px'} p={0}>
						<Image
							src='https://s3-alpha-sig.figma.com/img/b92c/c7f9/1347d9398d28bcd93919f218710a3100?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mT7KTs1CljldrzNRcGixCICPL-tuLwillRYDVBVP1tlA9PKhRCX1wITaL-WxKVgmVOukePSdXgEQnk2ZQ4OgSsnI6vl3LvinBozcy6me8PxCgyjZq9wMwUSIYmk~xk8jIKARQpX8BKXCYOpOW~aYuk8gQ-3AAKPTyQsM5lsCsTb1KfHp06mGQ4E3HQk0WX1lp8YrZUZUJsAmCSTAZR44SrXcKI2qhC~RfZM7ZoV9xak0Ht92GXvOzUbYOR2JfTWnUD2o8OFLvlR7j-Cl6txw2vIFH3VqIH-6mVXYDhhxDk-I7pdXMv8u1Lg-0gHWUn~lv-N-o8pvqbdArmNAT3NflQ__'
							alt='address'
							objectFit={'cover'}
							width={'1180px'}
							height={'510px'}
							borderRadius={'35px'}
							boxShadow={'card-light'}
						/>

						<Stack
							direction='row'
							justify='center'
							align='center'
							position='absolute'
							top='50%'
							left='50%'
							transform='translate(-50%, -50%)'
							zIndex={2}
							// width='100%'
						>
							<Button
								alignSelf='end'
								width='270px'
								height='50px'
								fontSize='1.5rem'
								flex={1}
								rightIcon={
									<Image
										src='/assets/right-arrow.png'
										alt='Order Online'
										height={0}
										width={0}
										style={{ width: 'auto', height: 'auto' }}
									/>
								}
								boxShadow='card-light'
								backgroundColor='purple.200'
								borderRadius={'10px'}
								color='white'
							>
								See Locations
							</Button>
						</Stack>
					</Box>
				</Flex>
			</Box>
		</Flex>
	);
};

export default DeliveryJoySection4;
