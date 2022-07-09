import { Container, Stack, Title } from "@mantine/core"
import { QueryClientProvider } from 'react-query'
import client from "./client";
import GPS from "./GPS";
import Logger from "./Logger";
import Login from "./Login";
import Stopwatch from './StopWatch';
import WebWorker from './Workers';


function App() {
  return (
    <Container>
      <Stack>
        <Title>
          Login
          <Login />
        </Title>
        <Title>
          Stopwatch
          <Stopwatch />
        </Title>
        <Title>
          Logger
          <Logger />
        </Title>
        <Title>
          GPS
          <GPS />
        </Title>
        <Title>
          WebWorker
          <WebWorker />
        </Title>
      </Stack>
    </Container>

  );
}

function WrappedApp() {
  return (
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  )
}

export default WrappedApp;
