interface Contact {
    email: string,
    phone: string
}
export interface FarmerData {
    id: number,
    name: string,
    location: string,
    farmSize: string,
    crops: Array<string>,
    contact: Contact,
    imageUrl: string,
    description: string
}