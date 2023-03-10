import { Box } from "@mui/material";
import Item from "./Item";

const ItemList = ({ items }) => {
  const renderedItems = items.map((item) => <Item key={item.id} item={item} />);

  return <Box sx={{ display: "flex", gap: 2 }}>{renderedItems}</Box>;
};

export default ItemList;
