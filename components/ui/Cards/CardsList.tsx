import Image from "next/image"

import { CardData } from "./types/cardList.types"
import { Card_container, Cardlist_wrapper } from "./cardsList.style"

export const CardList = function ({ data }: { data: CardData[] }): JSX.Element {
    return (
        <Cardlist_wrapper>
            {data.map((card, i) => (
                <Card_container key={i + 1}>
                    <article className="cardContent">

                        <Image src={`/image/hero-assets/hero-icons/icons/${card.imgPath}.png`} alt={card.imgAlt} width={40} height={40} />

                        <h4>{card.cardTitle}</h4>

                        <p>{card.cardText}</p>

                    </article>
                </Card_container>
            )
            )}
        </Cardlist_wrapper>
    )
}