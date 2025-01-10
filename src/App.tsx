import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ControlLayout } from "./layouts/control-layout";
import { AuthButton } from "./components/global/auth-buttons";
import { Toaster } from "sonner";
import { Widget } from "./components/global/widget";

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <ControlLayout>
        <AuthButton />
        <Widget />
      </ControlLayout>
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
