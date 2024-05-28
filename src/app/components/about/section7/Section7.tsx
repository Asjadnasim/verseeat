"use client";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Section7 = () => {
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
      backgroundImage="/assets/Section7-background.png"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Heading
        px={200}
        mt={200}
        textTransform="uppercase"
        whiteSpace="pre-wrap"
        textAlign="center"
        as="h1"
        fontSize={"70px"}
        color="#331D2E"
      >
        these are why <br /> eatverse <br /> is here to stay{" "}
      </Heading>
      <Flex justifyContent="space-around" px={20} alignItems={"center"} mt={70}>
        <Image
          src={`/assets/eatverse/1.png`}
          alt="Your Image"
          w="250px"
          h="250px"
          objectFit="contain"
        />
        <Image
          src={`/assets/eatverse/2.png`}
          alt="Your Image"
          w="250px"
          h="250px"
          objectFit="contain"
        />
        <Image
          src={`/assets/eatverse/3.png`}
          alt="Your Image"
          w="250px"
          h="250px"
          objectFit="contain"
        />
        <Image
          src={`/assets/eatverse/4.png`}
          alt="Your Image"
          w="250px"
          h="250px"
          objectFit="contain"
        />
      </Flex>

      <Flex justifyContent="flex-end">
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

export default Section7;
