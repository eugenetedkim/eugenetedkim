import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const source = await getPostData(params.id);
  const mdxSource = await serialize(
                            source.content,
                            {
                              mdxOptions: {
                                rehypePlugins: [rehypePrism, rehypeCodeTitles]
                              },
                              parseFrontmatter: true
                            }
                          );
  return {
    props: {
      mdxSource
    }
  }
}

export default function Post({ mdxSource }) {
  return (
    <Layout>
      <Head>
        <title>{mdxSource.frontmatter.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{mdxSource.frontmatter.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={mdxSource.frontmatter.date}/>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
        <div className='prose'>
          <MDXRemote {...mdxSource } />
        </div>
      </article>
      
    </Layout>
  );
}