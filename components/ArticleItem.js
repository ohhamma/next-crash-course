import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'
import styled from 'styled-components'

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        {/* <ArticleTitle>{article.title} &rarr;</ArticleTitle> */}
        <p>{article.excerpt}</p>
        {/* <ArticleBody>{article.excerpt}</ArticleBody> */}
      </a>
    </Link>
  )
}

// using styled-components
const ArticleTitle = styled.div`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const ArticleBody = styled.div`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`;

export default ArticleItem
