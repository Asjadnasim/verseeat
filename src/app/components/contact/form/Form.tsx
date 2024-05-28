import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	FormControl,
	Input,
	Textarea,
	Select,
} from '@chakra-ui/react';
import React from 'react';

const Form = () => {
	return (
		<Flex
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
		>
			<Box>
				<Flex
					flexDirection='row'
					justifyContent='space-between'
					gap='2rem'
					// backgroundColor='blue.200'
					height='90px'
				>
					<Box height='90px'>
						<Heading
							fontSize='25px'
							lineHeight='35px'
							alignItems='center'
							textTransform='uppercase'
							color='yellow.100'
						>
							order/experience
						</Heading>
						<Heading
							pl='1rem'
							alignItems='center'
							fontSize='40px'
							lineHeight='35px'
							color='yellow.100'
							textTransform='uppercase'
						>
							feedback
						</Heading>
					</Box>
					<Box height='60px'>
						<Heading
							fontSize='25px'
							lineHeight='35px'
							alignItems='center'
							textTransform='uppercase'
							color='gray.600'
							pl='1rem'
						>
							Get in touch with
						</Heading>
						<Heading
							alignItems='center'
							fontSize='40px'
							lineHeight='35px'
							color='gray.600'
							textTransform='uppercase'
						>
							the Company
						</Heading>
					</Box>
				</Flex>
			</Box>

			<Box>
				<Flex
					pt='1rem'
					flexDirection='column'
					// backgroundColor='blue.200'
					alignItems='center'
				>
					<FormControl>
						<Flex
							flexDirection='column'
							// backgroundColor='blue.200'
							alignItems='center'
							gap='1rem'
						>
							<Input
								placeholder='Your Full Name*'
								type='text'
								width='620px'
								height='70px'
								alignSelf='center'
								boxShadow='card-light'
								backgroundColor='yellow.50'
								borderRadius={'10px'}
								marginLeft='auto'
								marginRight='auto'
								fontSize='1.5rem'
							/>
							<Input
								placeholder='Your Mobile Number*'
								type='tel'
								width='620px'
								height='70px'
								alignSelf='center'
								boxShadow='card-light'
								backgroundColor='yellow.50'
								borderRadius={'10px'}
								marginLeft='auto'
								marginRight='auto'
								fontSize='1.5rem'
							/>
							<Input
								placeholder='Your Email Id*'
								type='email'
								width='620px'
								height='70px'
								alignSelf='center'
								boxShadow='card-light'
								backgroundColor='yellow.50'
								borderRadius={'10px'}
								marginLeft='auto'
								marginRight='auto'
								fontSize='1.5rem'
							/>
							<Select
								// icon={
								// 	<Image
								// 		src='/assets/down-arrow.png'
								// 		alt='Order Online'
								// 		height={0}
								// 		width={0}
								// 		style={{ width: 'auto', height: 'auto' }}
								// 	/>
								// }
								placeholder='Select The Brand'
								width='620px'
								height='70px'
								alignSelf='center'
								boxShadow='card-light'
								backgroundColor='yellow.50'
								borderRadius={'10px'}
								marginLeft='auto'
								marginRight='auto'
								fontSize='1.5rem'
								color='gray.400'
							>
								<option value='option1'>Mealivore</option>
								<option value='option2'>Bhaaja Fry</option>
								<option value='option3'>Santa Delivers</option>
								<option value='option4'>The Biryani Inc.</option>
								<option value='option5'>Cheeky Chicken</option>
								<option value='option6'>ASIAN FLARE</option>
								<option value='option7'>YAARA DA DHABA</option>
								<option value='option8'>BURGER IN-LAW</option>
							</Select>
							<Textarea
								placeholder='Please Enter Your Feedback Here'
								// type='text'
								width='630px'
								height='260px'
								alignSelf='center'
								boxShadow='card-light'
								backgroundColor='yellow.50'
								borderRadius={'10px'}
								marginLeft='auto'
								marginRight='auto'
								fontSize='1.5rem'
							/>
							<Box pl='30rem' gap='1rem' mt={'24px'}>
								<Button
									alignSelf='end'
									width='160px'
									height='50px'
									fontSize='1.5rem'
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
									textStyle='header-link'
									marginLeft='auto'
									marginRight='auto'
									color='white'
								>
									Submit
								</Button>
							</Box>
						</Flex>
					</FormControl>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Form;
