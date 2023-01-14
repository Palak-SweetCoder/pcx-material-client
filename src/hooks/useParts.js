import { useEffect, useState } from 'react';

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://pcx-material-server.up.railway.app/parts')
            .then((res) => res.json())
            .then((data) => setParts(data));
    }, []);
    return [parts, setParts];
};
export default useParts;
