export type host = {
    name: string,
    pictures: string
}

export type lodging = {
    id: string,
    title: string,
    cover: string,
    pictures: string[],
    description: string,
    host: host,
    rating: string,
    location: string,
    equipments: string[],
    tags: string[],
    price: number,
    beds: number,
    Guests: number,
    square: number,
    area: number,
    adress: string,
    coordinates: number[],
}

export type Lodgings = lodging[] | undefined

