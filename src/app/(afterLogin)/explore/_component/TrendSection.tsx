'use client';

import {Hashtag} from "@/model/Hashtag";
import Trend from "@/app/(afterLogin)/_component/Trend";
import {useQuery} from "@tanstack/react-query";
import {getTrends} from "@/app/(afterLogin)/_lib/getTrends";

export default function TrendSection() {
    const { data} = useQuery<Hashtag[]>({
        queryKey: ['trends'],
        queryFn:getTrends,
        staleTime: 60 * 1000,
        gcTime: 60 * 1000 * 5,
    });

    return data?.map((trend: Hashtag)=> <Trend trend={trend} key={trend.tagId}/>)

}