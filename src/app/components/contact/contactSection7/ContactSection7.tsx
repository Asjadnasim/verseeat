import React from 'react';
import { Box, Button, Flex, Heading, Image, Stack } from '@chakra-ui/react';

const ContactSection7 = () => {
	return (
		<Flex
			flexDirection='column'
			minHeight={1100}
			mt={'-370px'}
			backgroundImage='/assets/section3-background.png'
			backgroundRepeat='no-repeat'
			backgroundSize='cover'
		>
			<Flex
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
				height={'100vh'}
			>
				<Box textAlign={'center'} mb={8}>
					<Heading
						fontSize={'70px'}
						lineHeight={'60px'}
						fontWeight={400}
						textColor={'#F05C5C'}
						textTransform={'uppercase'}
						textAlign={'center'}
					>
						Transforming the habit of
					</Heading>
					<Heading
						fontSize={'70px'}
						lineHeight={'60px'}
						fontWeight={400}
						textColor={'#F05C5C'}
						textTransform={'uppercase'}
						textAlign={'center'}
					>
						‘having a meal’ into a
					</Heading>
					<Heading
						fontSize={'70px'}
						lineHeight={'60px'}
						fontWeight={400}
						textColor={'#F05C5C'}
						textTransform={'uppercase'}
						textAlign={'center'}
					>
						celebration of sharing Joy
					</Heading>
					<Heading
						fontSize={'70px'}
						lineHeight={'60px'}
						fontWeight={400}
						textColor={'#F05C5C'}
						textTransform={'uppercase'}
						textAlign={'center'}
					>
						and creating moments.
					</Heading>
				</Box>
				<Box mt={'24px'}>
					<Button
						alignSelf='end'
						width='239px'
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
						boxShadow='card-light'
						backgroundColor='purple.200'
						textStyle='header-link'
						marginLeft='auto'
						marginRight='auto'
						color='white'
					>
						Read More
					</Button>
				</Box>
			</Flex>
		</Flex>
	);
};

export default ContactSection7;
