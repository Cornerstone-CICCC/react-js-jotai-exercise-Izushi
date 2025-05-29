import { atom } from "jotai"

export type User = {
  id: string
  firstName: string
  lastName: string
  age: number
  hobbies: string[]
}

const usersAtom = atom<User[]>([])
const firstNameAtom = atom<string>("John")
const lastNameAtom = atom<string>("Doe")
const ageAtom = atom<number>(30)
const hobbiesAtom = atom<string[]>([])

export {
  usersAtom,
  firstNameAtom,
  lastNameAtom,
  ageAtom,
  hobbiesAtom
}