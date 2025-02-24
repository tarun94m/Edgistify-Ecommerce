import Header from "./Header";
import { Helmet } from "react-helmet";

// eslint-disable-next-line react/prop-types
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce",
  description: "mern stack project",
  keywords: "e-commerce,react,node,express,mongodb",
  author: "Kai",
};

export default Layout;
