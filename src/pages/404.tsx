import { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';

const NotFound: NextPage = () => {
    return (
        <Layout title='Not Found'>
            <Head>
                <title>Not Found</title>
            </Head>
            <Image priority src='/404.png' alt='' width={500} height={400}/>
        </Layout>
    );
};

export default NotFound;
