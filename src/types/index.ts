export type Location = {
  lat: number
  long: number
}

export type Job = {
  id: string
  name: string
  email: string
  phone: string
  title: string
  salary: string
  address: string
  benefits: string[]
  location: Location
  pictures: string[]
  createdAt: Date
  updatedAt: Date
  description: string
  employment_type: string[]
}
