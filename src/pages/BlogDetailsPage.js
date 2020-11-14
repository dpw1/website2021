import React, { Component, useState, useEffect } from "react";
import ScrollToTop from "./../components/ScrollToTop";
import Header from "./../components/Header";
import Hero from "./../components/Hero";
import Portfolio from "./../components/Portfolio";
import Faq from "./../components/Faq";
import Contact from "./../components/Contact";
import Footer from "./../components/Footer";

import Skeleton from "react-loading-skeleton";
import { Helmet } from "react-helmet";
import sanitizeHtml from "sanitize-html";

import { blogApi } from "./../api/api";
import BlogBreadcrumb from "../components/BlogBreadcrumb";
import BlogContent from "../components/BlogContent";
import Preloader from "./../components/Preloader";
import { generateBlogUrl } from "./../utils/utils";
import Parallax from "./../components/Parallax";

const BlogDetailsPage = (props) => {
  const { data } = props;

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const slug = data.match.params.slug;

  let excerpt;

  useEffect(() => {
    const getPost = async () => {
      const { data } = await blogApi.getPostBySlug(slug);

      setPost(data[0]);
      setIsLoading(false);
    };

    getPost();
  }, [slug]);

  useEffect(() => {
    if (!post) {
      return;
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
      window.ezfy.start();
    }, 75);
  }, [post]);

  return (
    <React.Fragment>
      <Preloader></Preloader>
      {!isLoading && (
        <React.Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{post.title.rendered}</title>
            <link rel="canonical" href={generateBlogUrl(slug)} />
            <meta
              name="description"
              content={sanitizeHtml(post.excerpt.rendered, {
                allowedTags: [],
                allowedAttributes: [],
              }).trim()}
            />
          </Helmet>
          <Header page={"blog"}></Header>
          <BlogContent post={post}></BlogContent>
          <Parallax
            title="In need of a Shopify developer?"
            subtitle={`Get in touch with us, we'll work together to find
            a custom solution that attend your needs.`}
            buttonText="Request a free quote"></Parallax>
          <Contact></Contact>
          <Footer page={"blog"}></Footer>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default BlogDetailsPage;
