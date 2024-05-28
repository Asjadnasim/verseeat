"use client";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Section8 = () => {
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
      backgroundImage="/assets/Section8-background.png"
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
        color="#DFAB45"
      >
        Editorial Recognition{" "}
      </Heading>
      <Flex justifyContent="space-around" px={20} alignItems={"center"} mt={70}>
        <Flex
          h={"320px"}
          w="350px"
          boxShadow="card-light"
          justifyContent="space-around"
          alignItems="center"
          flexDirection="column"
          backgroundColor="#FCE3B3"
          borderRadius="50px"
          overflow={"hidden"}
        >
          <Image
            src={`/assets/blog/blog1.png`}
            alt="Your Image"
            w="100%"
            h="100%"
            objectFit="fill"
            py={0}
            // ml={20}
            // mt={4}
          />

          <Heading
            textAlign="left"
            textTransform="uppercase"
            color="#F05C5C"
            fontSize="25px"
            whiteSpace="pre-wrap"
            fontWeight={400}
            padding={"20px"}
          >
            Kolkata-based MBA students’ Santa Delivers satiates...
          </Heading>
        </Flex>
        <Flex
          h={"320px"}
          w="350px"
          boxShadow="card-light"
          justifyContent="space-around"
          alignItems="center"
          flexDirection="column"
          backgroundColor="#FCE3B3"
          borderRadius="50px"
          overflow={"hidden"}
        >
          <Image
            src={`/assets/blog/blog2.png`}
            alt="Your Image"
            w="100%"
            h="100%"
            objectFit="fill"
            py={0}
            // ml={20}
            // mt={4}
          />

          <Heading
            textAlign="left"
            textTransform="uppercase"
            color="#F05C5C"
            fontSize="25px"
            whiteSpace="pre-wrap"
            fontWeight={400}
            padding={"20px"}
          >
            Quelling late night hunger is a Santa, who was born on a...{" "}
          </Heading>
        </Flex>
        <Flex
          h={"320px"}
          w="350px"
          boxShadow="card-light"
          justifyContent="space-around"
          alignItems="center"
          flexDirection="column"
          backgroundColor="#FCE3B3"
          borderRadius="50px"
          overflow={"hidden"}
        >
          <Image
            src={`/assets/blog/blog3.png`}
            alt="Your Image"
            w="100%"
            h="100%"
            objectFit="fill"
            py={0}
            // ml={20}
            // mt={4}
          />

          <Heading
            textAlign="left"
            textTransform="uppercase"
            color="#F05C5C"
            fontSize="25px"
            whiteSpace="pre-wrap"
            fontWeight={400}
            padding={"20px"}
          >
            The pitchers bring hope and aspirations for an investment...{" "}
          </Heading>
        </Flex>
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

export default Section8;
