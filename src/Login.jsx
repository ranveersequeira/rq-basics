import React from 'react'
import { Text } from "@mantine/core"
import { useQuery } from 'react-query';


const fetchLogin = () => fetch("/login.json").then(res => res.json());
const fetchUser = (id) => fetch(`/${id}.json`).then(res => res.json());





function Login() {
    const { data: login } = useQuery('login', fetchLogin);
    const { data: user } = useQuery('user', () => fetchUser(login?.id), {
        enabled: login?.id !== undefined
    });

    return (
        <Text>{JSON.stringify(login)}</Text>
    )
}

export default Login