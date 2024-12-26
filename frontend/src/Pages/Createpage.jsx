// import React from 'react'

import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { useProductStore } from "../store/product.js"

const Createpage = () => {
  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    image:""
  })

  const toast = useToast();

  const{createProduct} = useProductStore();
  const handleAddProduct = async() => {
    // console.log(newProduct)
    const {success,message}= await createProduct(newProduct);
    // console.log("Success:",success);
    // console.log("Message:",message);    
    if(!success){
      toast({
        title:"Error",
        description:message,
        status: "error",
        isClosable:true
      })
    }else{
      toast({
        title:"Success",
        description:message,
        status: "success",
        isClosable:true
      })
    }      
    setNewProduct({name:"",price:"",image:""});
  };
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        Create New Product
      </Heading>
      <Box w={"full"} bg={useColorModeValue("White", "gray.800")}
      p={6} rounded={"lg"} shadow={"md"}>
        <VStack spacing={4}>
        <Input
          placeholder="Product Name"
          name="name"
          value={newProduct.name}
          onChange={(e)=> setNewProduct({...newProduct,name:e.target.value})}
        />

        <Input 
          placeholder="Price"
          name="price"
          type="number"
          value={newProduct.price}
          onChange={(e)=> setNewProduct({...newProduct,price:e.target.value})}
        />

        <Input
        placeholder="Image URL"
        name="image"
        value={newProduct.image}
        onChange={(e)=>{setNewProduct({...newProduct,image:e.target.value})}}
        />

        <Button  colorScheme="blue" onClick={handleAddProduct}>Add Product </Button>
      </VStack>
      </Box>
      </VStack>

      
    </Container>
  )
}

export default Createpage