
"use client"

import { useGetDataByCategory } from '../api/api-hooks';
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { endpoints } from '../api/config';
import { Preloader } from '../components/Preloader/Preloader';

export default function runnersGames() {
    const runnersGames = useGetDataByCategory(endpoints.games, "runner");
    //
    return (
        <main className={'main-inner'}>
            {runnersGames ? (
                <CardsListSection id="runner" title="Ранеры" data={runnersGames}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}
