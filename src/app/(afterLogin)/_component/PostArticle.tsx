"use client"

import {ReactNode} from "react";
import style from './post.module.css'
import {useRouter} from "next/navigation";
import {Post} from "@/model/Post";

type Props = {
    children: ReactNode;
    post: Post;
}

export default function PostArticle ({children,post}: Props) {
    const router = useRouter();

    const onClick = () => {
        router.push(`/${post.User.id}/status/${post.postId}`)
    }

    return (
        <article onClickCapture={onClick} className={style.post}>
            {children}
        </article>
    )
}