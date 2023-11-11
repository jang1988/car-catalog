import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header: FC = () => {
    const { pathname } = useRouter();
    console.log('pathname: ', pathname)

    return (
        <header className={styles.header}>
            <Link href="/" className={pathname === '/' ? styles.active : ''}>
                Home
            </Link>
            <Link href="/about" className={pathname === '/about' ? styles.active : ''}>
                About page
            </Link>
        </header>
    );
};

export default Header;
