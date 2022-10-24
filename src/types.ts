interface host {
    name: string,
    pictures: string
}

export type lodging = {
    id: string,
    title: string,
    cover: string,
    pictures: Array<string>,
    description: string,
    host: host,
    rating: string,
    location: string,
    equipments: Array<string>,
    tags: Array<string>,
    price: number,
    beds: number,
    Guests: number,
    square: number,
    area: number,
    adress: string,
    coordinates: Array<number>,
}

export type Lodgings = lodging[] | undefined

