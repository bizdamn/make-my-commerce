import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function Login() {
    const router = useRouter();
    const { redirect } = router.query;

    useEffect(() => {
        router.push(redirect || 'https://make-my-commerce.herokuapp.com/login');
    })

    return <div></div>;
}
