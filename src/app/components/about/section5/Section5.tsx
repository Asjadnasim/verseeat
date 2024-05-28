"use client";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Section5 = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <Flex
      flexDirection="column"
      minHeight={400}
      mt={"-160px"}
      backgroundImage="/assets/section5-background.png"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex mt="200px" justifyContent="space-evenly">
        <Flex
          justifyContent="space-around"
          alignItems="center"
          flexDirection={"column"}
        >
          <Heading
            as="h6"
            textAlign="center"
            textTransform="uppercase"
            color="#DFAB45"
            fontSize="70px"
            whiteSpace="pre-wrap"
            fontWeight={700}
            borderBottom="2px solid #DFAB45"
            mx="20px" // Add some margin for spacing
          >
            our purpose
          </Heading>
          <Heading
            as="h6"
            textAlign="center"
            textTransform="uppercase"
            color="#DFAB45"
            fontSize="70px"
            whiteSpace="pre-wrap"
            fontWeight={700}
            borderBottom="2px solid #DFAB45"
            mx="20px" // Add some margin for spacing
            style={{
              "-webkit-text-fill-color": "transparent",
              "-webkit-text-stroke": 1,
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: 1,
            }}
          >
            our vision
          </Heading>
          <Heading
            as="h6"
            textAlign="center"
            textTransform="uppercase"
            color="#DFAB45"
            fontSize="70px"
            whiteSpace="pre-wrap"
            fontWeight={700}
            borderBottom="2px solid #DFAB45"
            mx="20px" // Add some margin for spacing
            style={{
              "-webkit-text-fill-color": "transparent",
              "-webkit-text-stroke": 1,
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: 1,
            }}
          >
            our mission
          </Heading>
          <Heading
            as="h6"
            textAlign="center"
            textTransform="uppercase"
            color="#DFAB45"
            fontSize="70px"
            whiteSpace="pre-wrap"
            fontWeight={700}
            borderBottom="2px solid #DFAB45"
            mx="20px" // Add some margin for spacing
            style={{
              "-webkit-text-fill-color": "transparent",
              "-webkit-text-stroke": 1,
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: 1,
            }}
          >
            our values
          </Heading>
        </Flex>
        <Flex
          h={"550px"}
          w="550px"
          boxShadow="card-dark"
          justifyContent="space-around"
          alignItems="center"
          flexDirection="column"
          backgroundColor="#FCE3B3"
          borderRadius="50px"
          padding={45}
        >
          {/* <Slider {...settings}>
						<div>
					
						</div>
						<div>
							<Image
								src={`/assets/aboutus/1.png`}
								alt='Your Image'
								w='120px'
								h='120px'
								objectFit='contain'
								// ml={20}
								// mt={4}
							/>

							<Heading
								as='p'
								textAlign='center'
								// textTransform='uppercase'
								color='#333333'
								fontSize='30px'
								whiteSpace='pre-wrap'
								fontFamily={'INDOSCREEN'}
								fontWeight={400}
							>
								Sparking joy and connection through diverse and flavourful
								culinary adventures, fostering a global community that
								celebrates the richness of food and life.
							</Heading>
						</div>
					</Slider> */}
          <Image
            src={`/assets/aboutus/1.png`}
            alt="Your Image"
            w="120px"
            h="120px"
            objectFit="contain"
            // ml={20}
            // mt={4}
          />

          <Heading
            as="p"
            textAlign="center"
            // textTransform='uppercase'
            color="#333333"
            fontSize="30px"
            whiteSpace="pre-wrap"
            fontFamily={"INDOSCREEN"}
            fontWeight={400}
          >
            Sparking joy and connection through diverse and flavourful culinary
            adventures, fostering a global community that celebrates the
            richness of food and life.
          </Heading>
        </Flex>
      </Flex>
      <Flex justifyContent="flex-end">
        {/* <Image
          src={`/assets/white-dotted-lines.png`}
          alt="Your Image"
          w="112px"
          h="260px"
          objectFit="contain"
          mr={"-74px"}
          mt={2}
        /> */}
        <Image
          src={`/assets/section5-food.png`}
          alt="Your Image"
          w="270px"
          h="260px"
          objectFit="contain"
          ml={20}
          mt={4}
        />{" "}
      </Flex>
    </Flex>
  );
};

export default Section5;
