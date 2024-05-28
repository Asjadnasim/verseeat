'use client';

import React, { ReactNode, useState } from 'react';
import {
	Box,
	Flex,
	Heading,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react';
import { Minus, Plus } from 'lucide-react';
import { descAccordion } from '.';

interface CustomAccordionButtonProps {
	children: ReactNode;
}

const CustomAccordionButton: React.FC<CustomAccordionButtonProps> = ({
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<AccordionButton onClick={toggleAccordion}>
			<Box flex='1' textAlign='left'>
				{children}
			</Box>
			{isOpen ? (
				<Minus size={20} color='#F05C5C' />
			) : (
				<Plus size={20} color='#F05C5C' />
			)}
		</AccordionButton>
	);
};

const FAQsection5 = () => {
	return (
		<Flex
			flexDirection='column'
			minHeight={1450}
			mt={'-200px'}
			backgroundImage='/assets/section4-background.png'
			backgroundRepeat='no-repeat'
			backgroundSize='cover'
		>
			<Box mt={'110px'} width={'100%'}>
				<Flex
					flexDirection={'column'}
					justifyItems={'center'}
					alignItems={'center'}
					width={'100%'}
				>
					<Box textAlign={'center'} mb={8}>
						<Heading
							fontSize={'70px'}
							lineHeight={'60px'}
							fontWeight={400}
							textColor={'#DFAB45'}
							textTransform={'uppercase'}
							textAlign={'center'}
						>
							frequently
						</Heading>
						<Heading
							fontSize={'70px'}
							lineHeight={'60px'}
							fontWeight={400}
							textColor={'#DFAB45'}
							textTransform={'uppercase'}
							textAlign={'center'}
						>
							asked questions
						</Heading>
					</Box>
				</Flex>

				<Flex justifyContent={'center'}>
					<Accordion
						allowToggle
						width={'90%'}
						textAlign={'center'}
						alignItems={'center'}
						borderColor={'#DFAB45'}
					>
						<AccordionItem borderTop={'none'}>
							<h2>
								<CustomAccordionButton>
									<Heading
										as='h1'
										fontSize={'40px'}
										lineHeight={'60px'}
										fontWeight={400}
										textColor={'#F05C5C'}
										textTransform={'uppercase'}
									>
										What are Special Menus?
									</Heading>
								</CustomAccordionButton>
							</h2>
							<AccordionPanel
								pb={4}
								fontSize={'25px'}
								lineHeight={'30px'}
								fontWeight={400}
								textColor={'#FCE3B3'}
							>
								If you have a seasonal or special menu that changes every day
								(e.g. Chef&apos;s Special), you can keep your customers
								up-to-date by uploading these menus via the Zomato for Business
								app.
							</AccordionPanel>
						</AccordionItem>
						{descAccordion.map(({ id, title, desc }) => (
							<AccordionItem key={id}>
								<h2>
									<CustomAccordionButton>
										<Heading
											as='h1'
											fontSize={'40px'}
											lineHeight={'60px'}
											fontWeight={400}
											textColor={'#F05C5C'}
											textTransform={'uppercase'}
										>
											{title}
										</Heading>
									</CustomAccordionButton>
								</h2>
								<AccordionPanel
									pb={4}
									fontSize={'25px'}
									lineHeight={'30px'}
									fontWeight={400}
									textColor={'#FCE3B3'}
								>
									{desc}
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</Flex>
			</Box>
		</Flex>
	);
};

export default FAQsection5;
