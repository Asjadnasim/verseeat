import { Text, Flex, IconButton, Button, Image } from "@chakra-ui/react";

import React from "react";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <Image
        src="/assets/Header.svg"
        alt="Youtube"
        height={"auto"}
        width={"100%"}
      />
      <Flex
        gap={4}
        px={16}
        py={4}
        flexDirection="row"
        justifyContent="space-between"
      >
        <Flex gap={"40px"} display={{ base: "none", md: "flex" }}>
          <Text as={Link} href="about-us" textStyle="header-link">
            ABOUT
          </Text>
          <Text as={Link} href="brands" textStyle="header-link">
            BRANDS
          </Text>
          <Text as={Link} href="locations" textStyle="header-link">
            LOCATIONS
          </Text>
          <Text as={Link} href="blogs" textStyle="header-link">
            BLOGS
          </Text>
        </Flex>

        <IconButton
          display={{
            base: "inline-flex",
            md: "none",
          }}
          icon={
            <Image
              src="/assets/menu.png"
              alt="Menu"
              height={0}
              width={0}
              style={{ width: "auto", height: "auto" }}
            />
          }
          aria-label="Menu"
          boxShadow="card"
          borderRadius={"10px"}
          backgroundColor="yellow.200"
        />

        <Link href="/">
          <Image
            src="/assets/eatverse.svg"
            alt="EatVerse Logo"
            height={"auto"}
            width={"auto"}
          />
        </Link>

        <Flex gap={4} display={{ base: "none", md: "flex" }}>
          <IconButton
            icon={
              <Image
                src="/assets/youtube.svg"
                alt="Youtube"
                height={"auto"}
                width={"auto"}
              />
            }
            aria-label="Youtube"
            boxShadow="card"
            borderRadius={"10px"}
            backgroundColor="yellow.200"
          />{" "}
          <IconButton
            icon={
              <Image
                src="/assets/linkedin.svg"
                alt="Youtube"
                height={"auto"}
                width={"auto"}
              />
            }
            aria-label="LinkedIn"
            boxShadow="card"
            borderRadius={"10px"}
            backgroundColor="yellow.200"
          />{" "}
          <IconButton
            icon={
              <Image
                src="/assets/insta.svg"
                alt="Instagram"
                height={"auto"}
                width={"auto"}
              />
            }
            aria-label="Youtube"
            boxShadow="card"
            borderRadius={"10px"}
            backgroundColor="yellow.200"
          />{" "}
          <IconButton
            icon={
              <Image
                src="/assets/fb.svg"
                alt="Facebook"
                height={"auto"}
                width={"auto"}
              />
            }
            aria-label="Youtube"
            boxShadow="card"
            borderRadius={"10px"}
            backgroundColor="yellow.200"
          />{" "}
          <Button
            leftIcon={
              <Image
                src="/assets/call.svg"
                alt="Youtube"
                height={"auto"}
                width={"auto"}
              />
            }
            boxShadow="card"
            backgroundColor="yellow.100"
            borderRadius={"10px"}
            textStyle="header-link"
          >
            Contact Us
          </Button>
        </Flex>

        <IconButton
          display={{
            base: "inline-flex",
            md: "none",
          }}
          icon={
            <Image
              src="/assets/call.svg"
              alt="Call"
              height={0}
              width={0}
              style={{ width: "auto", height: "auto" }}
            />
          }
          aria-label="Call"
          boxShadow="card"
          borderRadius={"10px"}
          backgroundColor="yellow.200"
        />
      </Flex>
    </div>
  );
};

export default Header;
