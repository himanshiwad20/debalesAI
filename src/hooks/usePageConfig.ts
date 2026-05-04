import { useState, useEffect } from "react";
import { mongoDb } from "../lib/mongodb-client";
import type { PageConfig } from "../types/config";

const DB_NAME = "FullStack";
const COLLECTION = "config_driven_ui";

export function usePageConfig(slug: string) {
  const [config, setConfig] = useState<PageConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchConfig() {
      try {
        setLoading(true);
        setError(null);
        const page = await mongoDb.findOne<PageConfig>(DB_NAME, COLLECTION, {
          slug,
        });
        console.log("PAGE FROM DB:", page);
        if (!cancelled) {
          const safePage = page
            ? {
                ...page,
                sections: Array.isArray(page.sections)
                  ? page.sections
                  : Object.values(page.sections || {}), // 👈 FIX HERE
              }
            : null;

          console.log("SECTIONS:", safePage?.sections);
          setConfig(safePage);
          if (!page) {
            setError(`Page "${slug}" not found`);
          }
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load page config");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchConfig();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { config, loading, error };
}
