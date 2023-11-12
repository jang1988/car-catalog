import React, { FC } from 'react';
import Layout from '@/components/layout/Layout';
import { Titillium_Web } from 'next/font/google';

const googleFont = Titillium_Web({ weight: ['400', '700'], subsets: ['latin'] });

const Home: FC = () => {
    return (
        <Layout title='Home' description='We loveeeeee'>
            <p className={googleFont.className}>Home</p>
        </Layout>
    );
};

export default Home;
