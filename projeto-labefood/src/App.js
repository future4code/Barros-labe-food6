import RouterPage from "./routes/router";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <RouterPage />
  </ChakraProvider>
  );
}

export default App;
