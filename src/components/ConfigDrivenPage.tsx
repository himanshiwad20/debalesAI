import { usePageConfig } from "../hooks/usePageConfig";
import { SectionRenderer } from "./SectionRenderer";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LoadingScreen } from "./LoadingScreen";
import { ErrorScreen } from "./ErrorScreen";

interface ConfigDrivenPageProps {
  slug: string;
}

export function ConfigDrivenPage({ slug }: ConfigDrivenPageProps) {
  const { config, loading, error } = usePageConfig(slug);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error} />;
  if (!config) return <ErrorScreen message="Page configuration not found" />;

  if (!config || !Array.isArray(config.sections)) {
    return <ErrorScreen message="Invalid page configuration" />;
  }
  const sortedSections = Array.isArray(config?.sections) ? config.sections : [];
  // const sortedSections = [...config.sections].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {sortedSections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
