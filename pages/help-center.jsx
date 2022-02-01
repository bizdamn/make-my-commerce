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
            <div className="row my-4">
                            <div className="col-md">
                                <div className="card text-center help-center-card">
                                    <div className="card-body">
                                        <h6 className="card-title">Intro to Make My Commerce</h6>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <Link href='/login'>
                                            <a className="mmc-btn mmc-small-btn mmc-blue-btn my-4" >Get Started</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="card text-center help-center-card">
                                    <div className="card-body">
                                        <h6 className="card-title">Online Store</h6>
                                        <p className="card-text">How to make an Online E-commerce Store</p>
                                        <Link href='/login'>
                                            <a className="mmc-btn mmc-small-btn mmc-blue-btn my-4" >Get Started</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-md">
                                <div className="card text-center help-center-card">
                                    <div className="card-body">
                                        <h6 className="card-title">How to choose Products to Source</h6>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <Link href='/login'>
                                            <a className="mmc-btn mmc-small-btn mmc-blue-btn my-4" >Get Started</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="card text-center help-center-card">
                                    <div className="card-body">
                                        <h6 className="card-title">Online Store</h6>
                                        <p className="card-text">How to make an Online E-commerce Store</p>
                                        <Link href='/login'>
                                            <a className="mmc-btn mmc-small-btn mmc-blue-btn my-4" >Get Started</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
            </Box>
            <Footer />
        </>
    )
}
