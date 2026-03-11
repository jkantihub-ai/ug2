
import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

import { Toaster } from "@/components/ui/sonner";
import { routes } from "@/routes";

function App() {
  return (
    <> 
    <Router hook={import.meta.env.VITE_USE_HASH_ROUTER ? useHashLocation : undefined}>
      <Switch>
        {routes.map(([path, component]) => (
          <Route key={path} path={path} component={component} />
        ))}
      </Switch>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
