import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

export default function PlatformSelector() {
  const { data: platforms } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((p) => (
          <MenuItem key={p.id}>{p.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
