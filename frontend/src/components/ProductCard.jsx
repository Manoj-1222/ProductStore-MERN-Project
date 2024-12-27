import {
    Box,
    Button,
    Heading,
    HStack,
    IconButton,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useColorModeValue,
    useDisclosure,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product.js";
import { useState } from "react";

const ProductCard = ({ product }) => {
    const [updatedProduct, setupdatedProduct] = useState( product );
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { deleteProduct , updateProduct } = useProductStore();
    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };
    const handleUpdateProduct = async (pid, updatedProduct) => {
        const {success,} =  await updateProduct(pid, updatedProduct);
        if (!success) {
            toast({
                title: "Error",
                description: "Product Upadate Failed",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: "Product Upadated Successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }

        onClose();
    }
    return (
        <Box
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            bg={bg}
            transition="all 0.3s"
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        >
            <Image
                src={product.image}
                alt={product.name}
                h={48}
                w="full"
                objectFit="cover"
            />
            <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
                    ${product.price}
                </Text>
                <HStack spacing={2}>
                    <IconButton
                        icon={<EditIcon />}
                        colorScheme="blue"
                        aria-label="Edit Product"
                        onClick={onOpen}
                    />
                    <IconButton
                        icon={<DeleteIcon />}
                        onClick={() => handleDeleteProduct(product._id)}
                        colorScheme="red"
                        aria-label="Delete Product"
                    />
                </HStack>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input placeholder="Product name" name="name"
                                value={updatedProduct.name} 
                                onChange={(e)=> (setupdatedProduct({...updatedProduct,name:e.target.value}))}
                                />
                            <Input placeholder="Product price" name="price" type="number"
                                value={updatedProduct.price} 
                                onChange={(e)=> (setupdatedProduct({...updatedProduct,price:e.target.value}))}
                                />
                            <Input placeholder="Image URL" name="image"
                                value={updatedProduct.image} 
                                onChange={(e)=> (setupdatedProduct({...updatedProduct,image:e.target.value}))}
                                />
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3}
                        onClick={()=> handleUpdateProduct(product._id, updatedProduct)}
                        >Update</Button>
                        <Button variant='ghost' onClick={onclose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>


            </Modal>
        </Box>
    );
};

export default ProductCard;