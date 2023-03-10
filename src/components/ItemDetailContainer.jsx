import { Box, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { getProduct } from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ id = 2 }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProduct(id).then((product) => setItem(product));
  }, []);

  return (
    <Box sx={{ display: "grid", placeContent: "center", padding: 2 }}>
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <Skeleton variant="rounded" width={1000} height={350} />
      )}
    </Box>
  );
};

export default ItemDetailContainer;
