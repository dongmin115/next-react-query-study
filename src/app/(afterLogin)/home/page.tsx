import style from './home.module.css'
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getPostRecommends} from "@/app/(afterLogin)/home/_lib/getPostRecommends";
import PostRecommends from "@/app/(afterLogin)/home/_component/PostRecommends";

export default async function Home () {
        const queryClient = new QueryClient();
        await queryClient.prefetchQuery({queryKey: ['posts', 'recommends'], queryFn: getPostRecommends});
        const dehydratedState = dehydrate(queryClient);

        queryClient.getQueryData(['posts','recommends'])

    return (
        <main className={style.main}>
                <HydrationBoundary state={dehydratedState}>
            <TabProvider>
            <Tab/>
            <PostForm/>
            <PostRecommends />
            </TabProvider>
                </HydrationBoundary>
        </main>
    )
}