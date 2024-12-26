// import React from 'react'
import {Container, Text, VStack, Link, SimpleGrid} from '@chakra-ui/react'
import { useProductStore } from '../store/product'
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
// import{Link} from 'react-router-dom';

const Homepage = () => {
  const {fetchProducts,products} = useProductStore();
  useEffect(()=>{fetchProducts()},
  [fetchProducts])
  // console.log("products", products)




  return (
    <Container maxW={'container.xl'} py={12}>
      <VStack spacing={8}>
        <Text
        fontSize={"30"}
        fontWeight={"bold"}
        bgGradient={"linear(to-r,cyan.400,blue.500)"}
        bgClip={"text"}
        textAlign={"center"}
        >
          Current Products 🚀
        </Text>


        <SimpleGrid columns={{
          base:1,
          md:2,
          lg:3
        }}
        spacing={10}
        w={"full"}
        >
          {products.map((product)=>(
            <ProductCard key = {product._id} product = {product} />
          ))}
        </SimpleGrid>

        {products.length===0 && (<Text
        fontSize={"xl"}textAlign={"center"} fontWeight={"bold"} color={'gray.500'}>
          No Products found 😢{" "}
          <Link href ={"/create"}>
          <Text as={'span'} color={'blue.600'} _hover={{textDecoration:"underline"}}>
            Create a product
        </Text>
          </Link>
        </Text>)}
      </VStack>
    </Container>
  )
}

export default Homepage