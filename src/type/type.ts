export interface ProductType {
    id: number,
    title: string,
    price: number,
    color: string,
    des: string,
    rating: number,
    review: 556,
    quantity: number,
    thumbnails: string[]
  }

  export interface CartItemType extends ProductType{
    quantity: number
  }

  export interface PersonalInfoType {
    name: string
    email: string
    phone: string,
    shipmentMethod: string
    paymentMethod: string
    address: string
  }