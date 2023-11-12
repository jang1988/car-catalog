import { FC, PropsWithChildren } from 'react';
import { IMeta } from '@/pages/seo/meta.interface';
import Header from './header/Header';
import Meta from '@/pages/seo/meta';

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
    return (
        <Meta title={title} description={description}>
            <Header />
            <main>{children}</main>
        </Meta>
    );
};

export default Layout;
