import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Section3 = () => {
  return (
    <Flex
      flexDirection="column"
      backgroundImage="/assets/section3-background.png"
      minHeight={200}
      mt={"-140px"}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Heading
        px={51}
        mt={"125px"}
        textTransform="uppercase"
        whiteSpace="pre-wrap"
        textAlign="center"
        as="h1"
        fontSize={"70px"}
        color="#F05C5C"
      >
        {
          "Transforming the habit of\n‘having a meal’ into a\ncelebration of sharing Joy\nand creating moments."
        }
      </Heading>
      <Image
        src={`/assets/section3-image1.png`}
        alt="Your Image"
        w="84px"
        h="74px"
        objectFit="contain"
        ml={"60px"}
      />
      <Image
        src={`/assets/section2-food.png`}
        alt="Your Image"
        w="315px"
        h="300px"
        objectFit="contain"
        ml={-20}
        mt={"28px"}
      />{" "}
      <Image
        src={`/assets/section3-image3.png`}
        alt="Your Image"
        w="311px"
        h="332px"
        objectFit="contain"
        position={"absolute"}
        right={"20px"}
        mt={"480px"}
      />
      <Button
        alignSelf="center"
        rightIcon={
          <Image
            src="/assets/right-arrow.png"
            alt="Read more"
            height={0}
            width={0}
            style={{ width: "auto", height: "auto", position: "relative" }}
          />
        }
        boxShadow="card"
        backgroundColor="purple.200"
        borderRadius={"10px"}
        textStyle="header-link"
        marginLeft="auto"
        marginRight="auto"
        color="#FCE3B3"
        position={"absolute"}
        mt="600px"
        minWidth="200px"
      >
        Read more
      </Button>
    </Flex>
  );
};

export default Section3;
