import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Slideshow from "../components/Slideshow";
import PageSections from "../components/PageSections"; 
import { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({ banners, sections, contentComponent }) => 
(
  <div>
    <Slideshow slides={banners} />
    <PageSections items={sections} contentComponent={contentComponent} />
  </div>
);

IndexPageTemplate.propTypes = {
  banners: PropTypes.array,
  sections: PropTypes.array,
  contentComponent: PropTypes.func
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        banners={frontmatter.banners}
        sections={frontmatter.sections}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        banners {
          image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 75) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          subheading
        }
        sections {
          title
          description
          align
          contentSize
          imageResize
          youtubeId
          image {
            childImageSharp {
              fluid(maxWidth: 1024, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
