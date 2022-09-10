export interface Shop {
    name: string
    description: string
    photos: Photo[]
    badges: Badge[]
    rate: number
    shopLink: string
    id: number
}

export interface Badge {
    label: string
    color: string
}

export interface Photo {
    url: string
}

export interface ShopList {
    shops: Shop[]
}
