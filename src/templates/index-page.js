import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Slideshow from "../components/Slideshow";
import LazyYoutube from "../components/LazyYoutube";

import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';
import { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({ banners, videofeature, mainpitch, description, intro, contentComponent }) => 
{
  
  const videofeatureDescription = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(videofeature.description).toString();
  const PageContent = contentComponent || HTMLContent; // TODO: fix it later. should be Content but preview is not working
    
  return (
  <div>
    <Slideshow slides={banners} />
    <section class="section has-background-light">
      <div class="container">
        <h1 class="title has-text-centered">{videofeature.title}</h1>
        <div class="columns">
          <div class="column">
            <figure class="image is-16by9 lazyimage">
              <LazyYoutube url={videofeature.url} />
            </figure>
          </div>
          <PageContent className="column is-one-third content" content={videofeatureDescription} />
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">OLD HEADING</h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)
    };

IndexPageTemplate.propTypes = {
  banners: PropTypes.array,
  videofeature: PropTypes.object,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  contentComponent: PropTypes.func
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        banners={frontmatter.banners}
        videofeature={frontmatter.videofeature}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        videofeature {
          title
          url
          description
        }
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
