import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Input,
} from "@chakra-ui/react";

const Section8 = () => {
  return (
    <Flex
      backgroundImage="/assets/home-section8-background.png"
      minHeight={400}
      mt={"-140px"}
      justifyContent="space-between"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex mt={"150px"} ml={"70px"}>
        your video
      </Flex>
      <Flex
        flexDirection={"column"}
        gap={"50px"}
        alignItems={"flex-end"}
        my={"150px"}
        mr={"100px"}
      >
        <Heading
          as="h1"
          whiteSpace={"pre-line"}
          textTransform={"uppercase"}
          color="#F05C5C"
          fontFamily={"Guisol"}
          mt={"10px"}
          mr={"70px"}
          fontSize={"50px"}
          textAlign={"right"}
          lineHeight={"63.7px"}
        >
          {"From our hearts \n to your home"}
        </Heading>
        <Button
          rightIcon={
            <Image
              src="/assets/right-arrow.png"
              alt="see locations"
              height={0}
              width={0}
              style={{ width: "auto", height: "auto", position: "relative" }}
            />
          }
          boxShadow="card"
          backgroundColor="purple.200"
          borderRadius={"10px"}
          textStyle="header-link"
          color="#FCE3B3"
          minWidth="160px"
          mr={"70px"}
        >
          see locations
        </Button>

        <Image
          src={`/assets/roll-food.png`}
          alt="your image"
          w="575px"
          h="413px"
          mt="93px"
          mr="-110px"
        />
      </Flex>
    </Flex>
  );
};

export default Section8;
