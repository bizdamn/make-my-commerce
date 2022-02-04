import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
export default function Home() {
  return (
      <Layout >
            <div className="header-section-wrapper pt-5">
          <div className="header-section-content">
            <h4 className="header-section-title">Get the Business
Expertise you Need
              <span className="mmc-green-color"> for Free.</span></h4>
            <div className="header-section-text">Start Today to Grow your  <span style={{ color: '#ffbf50' }}>
              <b>  Business Tomorrow.</b></span></div>
            <div className="header-section-link">
                <a href='tel:9821214253' className="mmc-btn mmc-blue-btn" >Start Now</a>
            </div>
          </div>
          <div className="header-section-image">
          <Image className='image-up-down' width='1000' height='1000'src='/consult-expert.png'></Image>
          </div>
        </div>


    </Layout>
  )
}
