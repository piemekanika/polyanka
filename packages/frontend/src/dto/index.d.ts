export interface Shop {
    name: string
    description: string
    photos: object[]
    rate: number
    shopLink: string
}

export interface ShopList {
    shops: Shop[]
}
