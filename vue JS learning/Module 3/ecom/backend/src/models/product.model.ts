export type Category="electronics" | "clothing" | "books" | "home"

export interface product{
    id:number
    product_name:string
    price:number
    image_url:string
    category:Category
    stock:number
    rating:number
    description:string
    discount?:number
}

export interface cart_item{
    product_id:number
    quantity:number
}

export interface api_response<T>{
    success:boolean
    data?:T
    error?:string
}