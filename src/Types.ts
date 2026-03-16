interface DynamicObjectImages {
    [key: string]: any,
}

export type ProductType = {
    id: string | number,
    name: string,
    shortDescription: string,
    description: string,
    price: number,
    sizes: String[],
    colors: String[],
    images: Record<string, string>,
}

export type ProductsList = ProductType[]