import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Input,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      flexDirection="column"
      minHeight={400}
      mt={"-270px"}
      backgroundImage="/assets/section10-background.png"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex mt="150px" flexDirection="column" alignItems="center">
        <Image
          src={`/assets/footer eat verse logo.png`}
          alt="Your Image"
          w="100px"
          h="100px"
          objectFit="cover"
        />
        <Heading color="#F05C5C" textTransform="uppercase" mt="30px">
          hunger. happiness. home.
        </Heading>
      </Flex>
      <Image
        src={`/assets/Line 2.png`}
        alt="Your Image"
        objectFit="cover"
        mt="70px"
      />
      <Flex justifyContent="center" gap="100px" mt="50px" mb="50px ">
        <Text color="#FCE3B3" fontFamily="INDOSCREEN">
          About
        </Text>
        <Text color="#FCE3B3" fontFamily="INDOSCREEN">
          Brands
        </Text>
        <Text color="#FCE3B3" fontFamily="INDOSCREEN">
          Locations
        </Text>
        <Text color="#FCE3B3" fontFamily="INDOSCREEN">
          Blogs
        </Text>
      </Flex>
      <Image src={`/assets/Line 2.png`} alt="Your Image" objectFit="cover" />
      <Flex justifyContent="center" gap="400px">
        <Text color="#FCE3B3" py={"50px"}>
          © 2024, Vision Foodworks Private Limited
        </Text>
        <Text color="#FCE3B3" py={"50px"}>
          privacy policy || Terms & Conditions
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
