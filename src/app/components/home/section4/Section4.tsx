import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Section4 = () => {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="#331D2E"
      minHeight={400}
      mt={"-140px"}
    >
      <Heading
        px={51}
        mt={"200px"}
        textTransform="uppercase"
        whiteSpace="pre-wrap"
        textAlign="center"
        as="h1"
        fontSize={"70px"}
        color="#DFAB45"
      >
        {"our house\nof brands"}
      </Heading>
      <Text
        px={51}
        mt={"15px"}
        textTransform="uppercase"
        whiteSpace="pre-wrap"
        textAlign="center"
        fontSize={"25px"}
        color="#FCE3B3"
      >
        {"Exploring everything from\nClassic to Experimental"}
      </Text>

      <Flex
        height={"800px"}
        width="800px"
        alignItems="center"
        justifyContent="center"
      >
        <Text textAlign="center" color="white">
          Image
        </Text>
      </Flex>

      <Flex justifyContent="space-between">
        <Image
          src={`/assets/section4-leafs.png`}
          alt="Your Image"
          w="230px"
          h="180px"
          objectFit="contain"
          ml={-6}
          mt={"200px"}
        />

        <Flex>
          <Flex
            flexDirection="column"
            mt={"155px"}
            justifyContent="space-between"
          >
            <Image
              src={`/assets/section4-food3.png`}
              alt="Your Image"
              w="96px"
              h="98px"
              objectFit="contain"
            />
            <Image
              src={`/assets/section4-food2.png`}
              alt="Your Image"
              w="100px"
              h="100px"
              objectFit="contain"
              mr={"-20px"}
            />
          </Flex>

          <Image
            src={`/assets/section4-food.png`}
            alt="Your Image"
            w="226px"
            h="332px"
            objectFit="contain"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section4;
