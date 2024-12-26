// import React from 'react'

import { Button, Container, Flex, HStack, Link, Text,useColorMode,  } from "@chakra-ui/react"
import { FaPlus } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
// import { useProductStore } from "../store/product";

const Navbar = () => {
const {colorMode,toggleColorMode} = useColorMode();
// const {products} = useProductStore();
return (
    <Container maxW={"1140px"} px={4} >
    <Flex
    h={16}
    alignItems={"center"}
    justifyContent={"space-between"}
    flexDir={{
        base:"column",
        sm:"row"
    }}
    >

<Text
	fontSize={{ base: "22", sm: "28" }}
	fontWeight={"bold"}
	textTransform={"uppercase"}
	textAlign={"center"}
	bgGradient={"linear(to-r, cyan.400, blue.500)"}
	bgClip={"text"}
	>
		<Link href={'/'}>Product Store 🛍️</Link>
</Text>

<HStack spacing={3} alignItems={"center"}>
<Link href='/create'>
    <Button>
    <FaPlus fontSize={20} />
    </Button>
</Link>
<Button onClick={toggleColorMode}>
{colorMode==="light"? <IoMoon/> : <LuSun/>}
</Button>
</HStack>


    </Flex>
    </Container>
)
}

export default Navbar