declare namespace Order {
  export default interface Entity {
    id: string
    name: string
    price: number
    quantity: number
    description: string
    characteristics: string[]
  }
}
