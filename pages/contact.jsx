import config from "../blog.config.js"
import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
export default function Contact() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const { register, handleSubmit } = useForm();
    async function submitHandler(data) {
        closeSnackbar();
        const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.status == 200) {
            enqueueSnackbar('We have received your Message. We will get back to you soon', { variant: 'success' }
            );
        }
    }

    return (
        <>
            <div className="custom-wrap  ">
                <div className="custom-image global-bg-image" style={{ backgroundImage: 'url(/images/main/contact.jpg)' }} />
                <div className="custom-container">

                    <div className="custom-content pt-5">
                        <form onSubmit={handleSubmit(submitHandler)}>
                            <h1>Contact Us</h1>
                            <label htmlFor="name">Your name</label>
                            <input id="name" type="text" name="name" {...register('name')} required />
                            <label htmlFor="email">Your email address</label>
                            <input id="email" type="email" name="email" {...register('email')} required />
                            <label htmlFor="message">Your message</label>
                            <textarea id="message" name="message" required {...register('message')} defaultValue={""} />
                            <button className="global-button" type="submit">Send message</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
