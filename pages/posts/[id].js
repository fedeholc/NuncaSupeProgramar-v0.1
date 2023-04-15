import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date"; 


import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}


export default function Post({ postData }) {

  // TODO: hacer que cada tag lleve a la lista de posts con esa tag
  let tags = "";
  postData.tags.forEach( (tag, index) => {
    tags = tags + tag + ", ";
  });
  tags = tags.slice(0, tags.length-2); // le quita la coma y el espacio a la última

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="post__container">
        <div className="post__fecha">
          <Date dateString={postData.date} />
        </div>
        <h1 className="post__titulo">{postData.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div className="post__tags">Tags: {tags}</div>
      </article>
    </Layout>
  );
}