import { useState, useEffect } from "react";
import { ConfigDrivenPage } from "./components/ConfigDrivenPage";
import { seedDatabase } from "./lib/seed-data";
import { LoadingScreen } from "./components/LoadingScreen";
import { ErrorScreen } from "./components/ErrorScreen";

function App() {
  const [seeded, setSeeded] = useState(false);
  const [seedError, setSeedError] = useState<string | null>(null);

  useEffect(() => {
    seedDatabase()
      .then(() => setSeeded(true))
      .catch((err) => {
        console.error("Seed failed:", err);
        const msg = err instanceof Error ? err.message : "Failed to initialize";
        setSeedError(msg);
        setSeeded(true);
      });
  }, []);

  if (!seeded) return <LoadingScreen />;
  if (seedError) {
    const isLocalMongo = seedError.includes("127.0.0.1") || seedError.includes("localhost");
    const displayMsg = isLocalMongo
      ? "Your MONGO_URI points to a local address (localhost:27017). Supabase Edge Functions run in the cloud and cannot reach your local machine. Please update the MONGO_URI secret to use a MongoDB Atlas connection string (mongodb+srv://...)."
      : seedError;
    return <ErrorScreen message={displayMsg} />;
  }

  return <ConfigDrivenPage slug="home" />;
}

export default App;
