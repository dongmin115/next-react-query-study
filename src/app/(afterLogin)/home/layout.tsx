import {ReactNode} from "react";

export default async function HomeLayout ({children} : {children: ReactNode}) {
    return (
        <div>
            홈레이아웃
            {children}</div>
    )
}