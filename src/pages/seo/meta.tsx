import { FC, PropsWithChildren } from 'react';
import { IMeta } from './meta.interface';
import Head from 'next/head';

const getTitle = (title: string) => `${title} | baklay`;

const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{getTitle(title)}</title>
                {description ? (
                    <>
                        <meta name="robots" content="index, nofollow" />
                    </>
                ) : (
                    <>
                        <meta name="robots" content="noindex, nofollow" />
                    </>
                )}
            </Head>
            {children}
        </>
    );
};

export default Meta;
