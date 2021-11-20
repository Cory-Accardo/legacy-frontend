import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home1/Hero";
import Categories from "../sections/home1/Categories";
import SectionDetail from "../sections/homepage/SectionDetail";
import ClientSection from "../sections/common/ClientSection";
import CardSection from "../sections/homepage/CardSection";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero className="position-relative z-index-1" />
        <SectionDetail className="pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
        <Categories className="bg-default-home pt-lg-13 pb-md-7 pb-lg-11 position-relative" />
        <CardSection className="bg-transparent pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
        <ClientSection className="bg-transparent pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
