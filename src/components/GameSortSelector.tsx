import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string;
  onSelectOrder: (sortOrders: string) => void;
}

export default function GameSortSelector({ onSelectOrder, sortOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release data" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find((o) => o.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {currentSortOrder?.label || "Relavance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((o) => (
          <MenuItem
            key={o.value}
            value={o.value}
            onClick={() => onSelectOrder(o.value)}>
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
