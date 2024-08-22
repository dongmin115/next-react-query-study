"use client"

import {useQuery} from "@tanstack/react-query";
import {getFollowingPosts} from "@/app/(afterLogin)/home/_lib/getFollowingPosts";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from '@/model/Post'

export default function FollowingPosts() {
    const { data} = useQuery<IPost[]>({
        queryKey: ['posts','followings'],
        queryFn:getFollowingPosts,
        staleTime: 60 * 1000,
        gcTime: 60 * 1000 * 5,
    });

    return data?.map((post)=> (
        <Post key={post.postId} post={post} />
    ))
}