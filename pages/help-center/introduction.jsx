import React from 'react';
import Layout from '../../components/Layout'
import Image from 'next/image'
export default function introduction() {
  return (
    <Layout>
              <div className="header-section-wrapper pt-5">
          <div className="header-section-content">
            <h4 className="header-section-title">Coming Soon</h4>
         
          </div>
          <div className="header-section-image">
          <Image className='image-up-down' width='300' height='300'src='/coming-soon.png'alt='Coming Soon'></Image>
          </div>
        </div>

     
    </Layout>
  );
}
