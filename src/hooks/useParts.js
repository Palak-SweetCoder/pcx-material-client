import { useEffect, useState } from 'react';

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://gentle-rose-purse.cyclic.app/parts')
            .then((res) => res.json())
            .then((data) => setParts(data));
    }, []);
    return [parts, setParts];
};
export default useParts;
