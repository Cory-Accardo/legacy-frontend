import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/homepage/Hero";
import Categories from "../sections/homepage/Categories";
import SectionDetail from "../sections/homepage/SectionDetail";
import ClientSection from "../sections/common/ClientSection";
import CardSection from "../sections/homepage/CardSection";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero className="position-relative z-index-1" />
        <SectionDetail className=" pt-12 pb-14" />
        <Categories className="bg-default-home pt-20 pb-22 position-relative" />
        <CardSection className="bg-transparent pt-12 pb-12" />
        <ClientSection className="bg-transparent pt-lg-12 pb-14" />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
