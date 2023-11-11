import { NextPage } from 'next';
import { useRouter } from 'next/router';

const CarPage: NextPage = () => {

    const { asPath, pathname, query, push, replace } = useRouter();
    console.log('asPath: ', asPath);
    console.log('pathname: ', pathname);
    console.log('query: ', query);


    return <div>
        <button onClick={() => push('/')}>go home</button>
        <button onClick={() => replace('/')}>go home</button>
    </div>;
};

export default CarPage;
