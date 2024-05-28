"use client";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section3 = () => {
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
      backgroundImage="/assets/carousel-background.png"
      minHeight={200}
      mt={"-90px"}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      className="relative"
    >
      <Heading
        px={51}
        mt={"125px"}
        textTransform="uppercase"
        whiteSpace="pre-wrap"
        textAlign="center"
        as="h1"
        fontSize={"70px"}
        color="#DFAB45"
      >
        We are one of the fastest expanding cloud kitchen brands in India –
        we're here to truly celebrate amazing food, friendship and life...
      </Heading>
      {/* <Button
				alignSelf='center'
				rightIcon={
					<Image
						src='/assets/right-arrow.png'
						alt='Read more'
						height={0}
						width={0}
						style={{ width: 'auto', height: 'auto', position: 'relative' }}
					/>
				}
				boxShadow='card'
				backgroundColor='purple.200'
				borderRadius={'10px'}
				textStyle='header-link'
				marginLeft='auto'
				marginRight='auto'
				color='#FCE3B3'
				position={'absolute'}
				mt='600px'
				minWidth='200px'
			>
				Read more
			</Button> */}
      <div className="mt-20"></div>
      <Slider {...settings}>
        <div className="relative">
          <Flex flexDirection={{ base: "column", md: "row" }} className="mx-44">
            <Flex flex={1} flexDirection="column">
              <Text
                px={51}
                mt={"125px"}
                textTransform="uppercase"
                whiteSpace="pre-wrap"
                textAlign="left"
                as="h4"
                fontSize={"50px"}
                color="#F05C5C"
              >
                december ‘14{" "}
              </Text>
              <Text
                mt={4}
                px={51}
                fontFamily="INDOSCREEN"
                fontSize={20}
                fontWeight={400}
                lineHeight="25px"
                textAlign="left"
                color="#FCE3B3"
              >
                Here to satiate any hungerpang, even late-night!{" "}
              </Text>
            </Flex>

            {/* Second Column */}
            <Flex flex={1} justifyContent="center">
              <Image
                src="/assets/slick/1.png"
                alt="Slick Image"
                width={{ base: "100%", md: "400px" }}
                height={{ base: "auto", md: "400px" }}
                borderRadius={{ base: "0px", md: "50px 0px 0px 0px" }}
                margin={{ base: "20px 0", md: "0 0 0 auto" }}
              />
            </Flex>
          </Flex>

          <Flex
            width="100%"
            height="100px"
            zIndex={-1}
            justifyContent="center"
            alignItems="center"
            mt={"100px"}
          >
            <Image
              src="/assets/slick/footer_1.png"
              alt="Footer Image"
              width="80%"
              height="100%"
            />
          </Flex>
        </div>
        <div className="relative">
          <Flex flexDirection={{ base: "column", md: "row" }} className="mx-44">
            <Flex flex={1} flexDirection="column">
              <Text
                px={51}
                mt={"125px"}
                textTransform="uppercase"
                whiteSpace="pre-wrap"
                textAlign="left"
                as="h4"
                fontSize={"50px"}
                color="#F05C5C"
              >
                december ‘14{" "}
              </Text>
              <Text
                mt={4}
                px={51}
                fontFamily="INDOSCREEN"
                fontSize={20}
                fontWeight={400}
                lineHeight="25px"
                textAlign="left"
                color="#FCE3B3"
              >
                Here to satiate any hungerpang, even late-night!{" "}
              </Text>
            </Flex>

            {/* Second Column */}
            <Flex flex={1} justifyContent="center">
              <Image
                src="/assets/slick/1.png"
                alt="Slick Image"
                width={{ base: "100%", md: "400px" }}
                height={{ base: "auto", md: "400px" }}
                borderRadius={{ base: "0px", md: "50px 0px 0px 0px" }}
                margin={{ base: "20px 0", md: "0 0 0 auto" }}
              />
            </Flex>
          </Flex>

          <Flex
            width="100%"
            height="100px"
            zIndex={-1}
            justifyContent="center"
            alignItems="center"
            mt={"100px"}
          >
            <Image
              src="/assets/slick/footer_1.png"
              alt="Footer Image"
              width="80%"
              height="100%"
            />
          </Flex>
        </div>
        <div className="relative">
          <Flex flexDirection={{ base: "column", md: "row" }} className="mx-44">
            <Flex flex={1} flexDirection="column">
              <Text
                px={51}
                mt={"125px"}
                textTransform="uppercase"
                whiteSpace="pre-wrap"
                textAlign="left"
                as="h4"
                fontSize={"50px"}
                color="#F05C5C"
              >
                december ‘14{" "}
              </Text>
              <Text
                mt={4}
                px={51}
                fontFamily="INDOSCREEN"
                fontSize={20}
                fontWeight={400}
                lineHeight="25px"
                textAlign="left"
                color="#FCE3B3"
              >
                Here to satiate any hungerpang, even late-night!{" "}
              </Text>
            </Flex>

            {/* Second Column */}
            <Flex flex={1} justifyContent="center">
              <Image
                src="/assets/slick/1.png"
                alt="Slick Image"
                width={{ base: "100%", md: "400px" }}
                height={{ base: "auto", md: "400px" }}
                borderRadius={{ base: "0px", md: "50px 0px 0px 0px" }}
                margin={{ base: "20px 0", md: "0 0 0 auto" }}
              />
            </Flex>
          </Flex>

          <Flex
            width="100%"
            height="100px"
            zIndex={-1}
            justifyContent="center"
            alignItems="center"
            mt={"100px"}
          >
            <Image
              src="/assets/slick/footer_1.png"
              alt="Footer Image"
              width="80%"
              height="100%"
            />
          </Flex>
        </div>
      </Slider>
      <Image
        src={`/assets/section2-food.png`}
        alt="Your Image"
        w="315px"
        h="300px"
        objectFit="contain"
        ml={-20}
        mt={"128px"}
      />{" "}
      <Image
        src={`/assets/section3-image3.png`}
        alt="Your Image"
        w="311px"
        h="332px"
        objectFit="contain"
        position={"absolute"}
        right={"20px"}
        bottom={0}
        mt={"480px"}
      />
    </Flex>
  );
};

export default Section3;
