import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrders = [
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "Added" },
    { value: "created", label: "Created" },
    { value: "updated", label: "Updated" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Popularity" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
