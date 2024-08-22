import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import style from './explore.module.css'
import TrendSection from "@/app/(afterLogin)/explore/_component/TrendSection";

export default function Explore(){
    return (
        <main className={style.main}>
            <div className={style.formZone}>
                <SearchForm/>
            </div>
            <div className={style.trend}>
                <h3>나를 위한 트렌드</h3>
                <TrendSection />
            </div>
        </main>
    )
}