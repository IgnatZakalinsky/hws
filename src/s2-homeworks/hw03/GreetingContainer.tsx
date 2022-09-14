import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: any // need to fix any
    addUserCallback: any // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (e: any) => { // need to fix any
        setName(e.currentTarget.value.trim()) // need to fix

        error && setError('')
    }
    const addUser = () => { // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
        if (!name) {
            setError('name is required!')
        } else {
            // addUserCallback(name)
            setName('')
        }
    }

    const onBlur = () => { // если имя пустое - показать ошибку
        if (!name) {
            setError('name is required!')
        }
    }

    const onEnter = (e: any) => { // если нажата кнопка Enter - добавить
        if (e.key === 'Enter') {
            addUser()
        }
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users[users.length - 1]?.name // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
