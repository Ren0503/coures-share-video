export interface Video {
    _id?: string
    title: string
    category: string
    image: string
    description: string
    url: string
    views?: number
    createdAt?: string | Date
    updatedAt?: string | Date
}