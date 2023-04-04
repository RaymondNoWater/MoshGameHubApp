import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";

export default function NavBar(): JSX.Element {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Nav Bar</Text>
    </HStack>
  );
}
