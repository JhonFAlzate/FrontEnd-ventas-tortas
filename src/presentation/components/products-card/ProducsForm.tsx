import { crateProduct } from "@/api/ProductsAPI";
import { productsSchema } from "@/interface/index";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  CheckboxIcon,
  useDisclosure,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type ProducsFormProps = {

  title: string;
};

type InputsProduc = {
  nombreProducto: string;
  tipoProducto: string;
  precioVenta: number;
  precioCompra: number;
};

export default function ProducsForm({ title}: ProducsFormProps) {


    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();
    const navigate = useNavigate();
    

    // Leer si modal existe
    const queryParams = new URLSearchParams(location.search);
    const modalTask = queryParams.get("newProduct");
    const show = !!modalTask;
  
    // Determinar apertura o cierre del modal basado en query params
    if (show && !isOpen) {
      onOpen();
    } else if (!show && isOpen) {
      onClose();
    }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsProduc>();


  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: crateProduct,
    onError: (error) => toast.error(error.message),
    onSuccess: (data) => {
      toast.success(data),
        queryClient.invalidateQueries({ queryKey: ["tortas"] });
    },
  });

  const onSubmit = (data: InputsProduc) => {
    mutate(data);
    reset();
  };

  const tipoProductos = productsSchema.shape.tipoProducto.options;

  return (
    <>
      <Modal blockScrollOnMount={false}  isOpen={isOpen} onClose={() => navigate(location.pathname, {replace:true})}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={!!errors.nombreProducto}>
                <FormLabel>Nombre del Producto</FormLabel>
                <Input
                  placeholder="Nombre del Producto"
                  {...register("nombreProducto", {
                    required: "Este campo es obligatorio",
                  })}
                />
                <FormErrorMessage>
                  {errors.nombreProducto?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.tipoProducto}>
                <FormLabel>Tipo Producto</FormLabel>
                <Select
                  placeholder="Select option"
                  {...register("tipoProducto", {
                    required: "Este campo es obligatorio",
                  })}
                >
                  {tipoProductos.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors.tipoProducto?.message}
                </FormErrorMessage>
              </FormControl>

              {/* Precio de Compra */}
              <FormControl isInvalid={!!errors.precioCompra}>
                <FormLabel>Precio de Compra</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                  >
                    $
                  </InputLeftElement>
                  <Input
                    placeholder="Precio de Compra"
                    {...register("precioCompra", {
                      required: "Este campo es obligatorio",
                      min: {
                        value: 1,
                        message: "El precio debe ser mayor a 0",
                      },
                      valueAsNumber: true,
                    })}
                    type="number"
                  />
                  <InputRightElement>
                    <CheckboxIcon color="green.500" />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.precioCompra?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.precioVenta}>
                <FormLabel>Precio de Venta</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                  >
                    $
                  </InputLeftElement>
                  <Input
                    placeholder="Precio de Venta"
                    {...register("precioVenta", {
                      required: "Este campo es obligatorio",
                      min: {
                        value: 1,
                        message: "El precio debe ser mayor a 0",
                      },
                      valueAsNumber: true,
                    })}
                    type="number"
                  />
                  <InputRightElement>
                    <CheckboxIcon color="green.500" />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.precioVenta?.message}
                </FormErrorMessage>
              </FormControl>

              <Input
                type="submit"
                value="Guardar Producto"
                mt={4}
                textColor={"black"}
              />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
