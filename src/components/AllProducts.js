import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, TextField } from "@mui/material";
import Alert from '@mui/material/Alert';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products`)
      .then((res) => {
        console.log(res.data.products, 1111);
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);  // Initially show all products
      })
      .catch((err) => {
        console.log(err, 2222);
      });
  }, []);

  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    const filtered = products.filter((value) => value.title.toLowerCase().includes(searchValue));
    setFilteredProducts(filtered);
  };

  return (
    <div style={{ padding: 10 }}>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField onChange={handleChange} label={"Search products here"} />
      </Box>
      {filteredProducts.length === 0 ? (
        <Alert severity="warning" color="warning">
          No products found.
        </Alert>
      ) : (
        <Grid
          container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            "& > :not(style)": {},
          }}
        >
          {filteredProducts.map((item) => (
            <Card key={item.id} sx={{ width: 345 }}>
              <CardMedia
                component="img"
                alt={item.title}
                height="200"
                width="200"
                image={item.images[0]}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {item.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography variant="h5">₹price: {item.price}</Typography>
                <Typography
                  variant="h5"
                  style={{ textAlign: "end", width: "100%" }}
                >
                  brand: {item.brand}
                </Typography>
              </CardActions>
            </Card>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default AllProducts;
