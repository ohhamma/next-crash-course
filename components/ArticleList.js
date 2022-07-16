import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'
import styled from 'styled-components'

const ArticleList = ({articles}) => {
  return (
    // <div className={articleStyles.grid}>
    <ArticleGrid>
      {articles.map((article) => (
        <ArticleItem article={article} />
        ))}
    </ArticleGrid>
    // </div>
  )
}

// using styled-components
const ArticleGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
`;

export default ArticleList