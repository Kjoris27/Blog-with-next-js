import { POSTS } from '@/app/utils/posts';
import PageContainer from '@/components/page-container';
import PageTitle from '@/components/page-title';
import PostsList from '@/components/posts-list';
import React from 'react'

//Route dynamique (représenté avec des crochets), et même le dossier est dans []


type Props = {
    params: {
        slug: string;
    };
};

export default function CategoriesPage({ params }: Props) {
    const { slug } = params;        
    return (
        <PageContainer>
            <div className="py-10 px-4">
                <PageTitle title={slug.replace("-", " ")} />
                <PostsList posts={POSTS} />
            </div>
        </PageContainer>

    )   
}
