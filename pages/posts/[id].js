import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeSlug from 'rehype-slug';
import { MDXProvider } from '@mdx-js/react';
import Link from 'next/link';

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
        rehypePlugins: [rehypeCodeTitles, rehypePrism, rehypeSlug]
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

const customHeadingThree = function({ id, ...props }) {
  console.log(id);

  if (id) {
    return (
      <Link href={`#${id}`}>
        <h3 id={ id } { ...props } />
      </Link>
    );
  }
  return <h1 { ...props } />;
}

const components = {
  h3: customHeadingThree
};

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
        <div className='prose mt-6'>
          <MDXProvider components={components}>
            <MDXRemote {...mdxSource } components={{...components}} />
          </MDXProvider>
        </div>
      </article>
      
    </Layout>
  );
}