import { JazzProvider } from "jazz-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { JazzInspector } from "jazz-inspector";
import { apiKey } from "./apiKey.ts";
import { JazzAccount } from "./schema.ts";

// This identifies the app in the passkey auth
export const APPLICATION_NAME = "jazz-react-tailwind-starter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JazzProvider
      sync={{
        peer: `wss://cloud.jazz.tools/?key=${apiKey}`,
      }}
      AccountSchema={JazzAccount}
    >
      <App />
      <JazzInspector />
    </JazzProvider>
  </StrictMode>
);
