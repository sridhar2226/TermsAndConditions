import Header from "./Header";
import PolicyNavigation from "./PolicyNavigation";

interface PolicyLayoutProps {
  children: React.ReactNode;
}

const PolicyLayout = ({ children }: PolicyLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-8">
          {children}
        </div>
      </main>
      <PolicyNavigation />
    </div>
  );
};

export default PolicyLayout;
