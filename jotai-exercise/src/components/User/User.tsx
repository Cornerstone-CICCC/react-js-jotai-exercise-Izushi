import { useAtom } from "jotai"
import { ageAtom, firstNameAtom, hobbiesAtom, lastNameAtom, usersAtom } from "../../atoms/user.atom"
import type { FormEvent } from "react"
import { v4 as uuidv4 } from "uuid"

const User = () => {
  const [users, setUsers] = useAtom(usersAtom)
  const [firstName, setFirstName] = useAtom(firstNameAtom)
  const [lastName, setLastName] = useAtom(lastNameAtom)
  const [age, setAge] = useAtom(ageAtom)
  const [hobbies, setHobbies] = useAtom(hobbiesAtom)

  const hobbyOptions = ['Studying', 'Cooking', 'Traveling']

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUsers([
      ...users,
      {
        id: uuidv4(),
        firstName,
        lastName,
        age,
        hobbies
      }
    ])
    setFirstName("")
    setLastName("")
    setAge(0)
    setHobbies([])
  }

  const handleHobbyChange = (hobby: string) => {
    if (hobbies.includes(hobby)) {
      setHobbies(hobbies.filter(h => h !== hobby))
    } else {
      setHobbies([...hobbies, hobby])
    }
  }

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Enter first name..." />
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Enter last name..." />
        <input type="number" value={age} onChange={e => setAge(Number(e.target.value))} placeholder="Enter age..." />
        <div>
          <p>Select your hobbies:</p>
          {hobbyOptions.map(hobby => (
            <label key={hobby}>
              <input
                type="checkbox"
                checked={hobbies.includes(hobby)}
                onChange={() => handleHobbyChange(hobby)}
              />
              {hobby}
            </label>
          ))}
        </div>
        <button>Add User</button>
      </form>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>First name: {user.firstName}</span>
            <span>Last name: {user.lastName}</span>
            <span>Age: {user.age}</span>
            <span>Hobbies: {user.hobbies.map(hobby => (hobby))}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User