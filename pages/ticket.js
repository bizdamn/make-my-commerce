import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useForm } from 'react-hook-form';
export default function HelpCenter() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { register, handleSubmit } = useForm();
    async function storeOwnerSubmitHandler(data) {
        console.log(data)
    }
    async function supplierSubmitHandler(data) {
        console.log(data)
    }

    return (
        <>
            <Header />
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList centered onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="User" value="1" />
                            <Tab label="Supplier" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div className="custom-container">
                            <div className="custom-content">
                                <form onSubmit={handleSubmit(storeOwnerSubmitHandler)}>

                                    <label htmlFor="name">Your name</label>
                                    <input id="name" type="text" name="name" {...register('name')} required />
                                    <label htmlFor="email">Your Store ID</label>
                                    <input id="email" type="email" name="email" {...register('email')} required />
                                    <label htmlFor="message">Problem You Are Facing?</label>
                                    <textarea id="message" name="message" required {...register('message')} defaultValue={""} />
                                    <button className="global-button" type="submit">Send message</button>
                                </form>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div className="custom-container">
                            <div className="custom-content">
                                <form onSubmit={handleSubmit(supplierSubmitHandler)}>

                                    <label htmlFor="name">Your name</label>
                                    <input id="name" type="text" name="name" {...register('name')} required />
                                    <label htmlFor="email">Your Supplier ID</label>
                                    <input id="email" type="email" name="email" {...register('email')} required />
                                    <label htmlFor="message">Problem You Are Facing?</label>
                                    <textarea id="message" name="message" required {...register('message')} defaultValue={""} />
                                    <button className="global-button" type="submit">Send message</button>
                                </form>
                            </div>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
            <Footer />
        </>
    )
}
