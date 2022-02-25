import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Blog/PostItem'
import { PostListItemType } from 'types/PostItem.types'

import useInfiniteScroll, {
    useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'


type PostListProps = {
    selectedCategory: string
    posts: PostListItemType[]
    limit: number
}


export type PostType = {
    node: {
        id: string
        frontmatter: {
            title: string
            summary: string
            date: string
            categories: string[]
            thumbnail: {
                publicURL: string
            }
        }
    }
}

const PostListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px;
    margin: 0 auto;
  
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      width: 100%;
      padding: 50px 20px;
    }
  `

const PostList: FunctionComponent<PostListProps> = function ({
    selectedCategory,
    posts,
    limit
}) {
    const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
        selectedCategory,
        posts,
    )

    return (
        <PostListWrapper ref={containerRef}>
            {postList.map(
                ({
                    node: {
                        id,
                        fields: { slug },
                        frontmatter,
                    },
                }: PostListItemType) => (
                    <PostItem {...frontmatter} link={slug} key={id} />
                ),
            ).slice(0, limit)}
        </PostListWrapper>
    )
}

export default PostList