import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-4xl px-4 py-6">
        <Link to="/" className="block">
          <h1 className="text-xl font-semibold text-foreground">
            Solai Pharma Agencies
          </h1>
          <p className="text-sm text-muted-foreground">
            shop.peonylifesciences.com
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
