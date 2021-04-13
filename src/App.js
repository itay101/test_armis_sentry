import "./styles.css";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://e83ea496e0ae4ab88d01494e80f02abc@o562192.ingest.sentry.io/5717978",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

function fireExceptionToSentry(){
  throw Error('Test')
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello Team Armis</h1>
      <h2>Check this out</h2>
      <button onClick={fireExceptionToSentry}>Send exception to Sentry</button>
    </div>
  );
}
