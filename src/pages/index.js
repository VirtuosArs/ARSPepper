import React from "react";
import ABOUT from "../components/about";
import Layout from "../components/layout";


function IndexPage() {
  return (
    <Layout>

    <ABOUT
        title="About Us"
        keywords={[`aboutUs`, `peper`, `react`, `content`]}
      />
      {/* <SEO
        title="GatsbyJS Tailwind Starter"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      /> */}

    </Layout>
  );
}

export default IndexPage;
