import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Box from '@mui/material/Box';
export default function HelpCenter() {


    return (

        <Layout>



            <Box sx={{ width: '100%', typography: 'body1' }}>
                <div className="row m-4">
                    <div className='mx-3'>
                        <h4 className="header-section-title ">Help Center</h4>
                    </div>
                    <div className="col-md my-2">
                        <div className="card text-center help-center-card">
                            <div className="card-body">
                                <h6 className="card-title">Intro to Make My Commerce</h6>
                                <p className="card-text">Follow these steps and set up your E-Commerce Store Easily</p>
                                <Link href='/help-center/introduction'>
                                    <a className="mmc-btn mmc-small-btn mmc-blue-btn my-4" >Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md my-2">
                        <div className="card text-center help-center-card">
                            <div className="card-body">
                                <h6 className="card-title">Online Store</h6>
                                <p className="card-text">Sell online from your own E-Commerce website.</p>
                                <Link href='/help-center/online-store'>
                                    <a className="mmc-btn mmc-small-btn mmc-blue-btn my-4" >Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row m-4">
                    <div className="col-md my-2">
                        <div className="card text-center help-center-card">
                            <div className="card-body">
                                <h6 className="card-title">How to choose Products to Source</h6>
                                <p className="card-text">Add products and manage your inventory.</p>
                                <Link href='/help-center/products'>
                                    <a className="mmc-btn mmc-small-btn mmc-blue-btn my-4" >Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md my-2">
                        <div className="card text-center help-center-card">
                            <div className="card-body">
                                <h6 className="card-title">Shipping</h6>
                                <p className="card-text">Manage the delivery of products by setting up Automated Shipping.</p>
                                <Link href='/help-center/shipping'>
                                    <a className="mmc-btn mmc-small-btn mmc-blue-btn my-4" >Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Layout>
    )
}
