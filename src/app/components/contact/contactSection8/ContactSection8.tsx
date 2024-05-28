import React from 'react';
import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Input,
	FormControl,
} from '@chakra-ui/react';
import { heading } from '.';

const ContactSection8 = () => {
	return (
		<Flex
			flexDirection='column'
			minHeight={1100}
			mt={'-370px'}
			background={'#DFAB45'}
		>
			<Flex mt={'120px'} justifyContent={'space-around'} height={'100vh'}>
				<Box>{/* Images  */}</Box>
				<Flex
					flexDirection={'column'}
					justifyContent={'center'}
					height={'100vh'}
				>
					<Box textAlign={'right'} mb={8}>
						{heading.map((item) => (
							<Heading
								key={item.id}
								fontSize={'70px'}
								lineHeight={'70px'}
								fontWeight={'bolder'}
								textTransform={'uppercase'}
								textAlign={'center'}
								style={{
									// WebkitTextStroke: '2px #331D2E',
									textShadow: `
                -3px -3px 0 black,
                -3px 3px 0 black,
                3px -3px 0 black,
                3px 3px 0 black`,
									color: '#DFAB45',
								}}
							>
								{item.title}
							</Heading>
						))}
					</Box>

					<Flex justifyContent='flex-end' gap='1rem'>
						<Box marginLeft='auto'>
							<FormControl>
								<Input
									placeholder='Your Email Here'
									type='email'
									width='620px'
									height='70px'
									boxShadow='card-dark'
									backgroundColor='yellow.50'
									borderRadius='10px'
									fontSize='1.5rem'
								/>
							</FormControl>
						</Box>
					</Flex>

					<Flex justifyContent={'flex-end'}>
						<Box mt={'24px'}>
							<Button
								alignSelf='end'
								width='165px'
								height='55px'
								borderRadius={'10px'}
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
								boxShadow='card-dark'
								backgroundColor='purple.200'
								textStyle='header-link'
								marginLeft='auto'
								marginRight='auto'
								color='white'
							>
								Submit
							</Button>
						</Box>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ContactSection8;
