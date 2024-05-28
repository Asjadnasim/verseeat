import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Section5 = () => {
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
        {[1, 2, 3].map((i) => (
          <Flex
            h={"350px"}
            w="350px"
            boxShadow="card-light"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            backgroundColor="#FCE3B3"
            borderRadius="50px"
          >
            <Heading textAlign="center" as="h1" color="#7500CB" fontSize="70px">
              4.4/5
            </Heading>
            <Heading
              as="h3"
              textAlign="center"
              textTransform="uppercase"
              color="#F05C5C"
              pt="50px"
              fontSize="25px"
              whiteSpace="pre-wrap"
            >
              {"Customer\nhappiness score"}
            </Heading>
          </Flex>
        ))}
      </Flex>
      <Flex justifyContent="flex-end">
        <Image
          src={`/assets/white-dotted-lines.png`}
          alt="Your Image"
          w="112px"
          h="260px"
          objectFit="contain"
          mr={"-74px"}
          mt={2}
        />
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
