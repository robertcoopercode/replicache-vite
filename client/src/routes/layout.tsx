import {Link, Outlet} from 'react-router-dom';
import {useCallback, useEffect, useState} from "react";
import {Replicache} from "replicache";
import {mutators} from "mutators";
import {nanoid} from "nanoid";
import {ReplicacheProvider} from "components/ReplicacheProvider";

export default function () {
    // See https://doc.replicache.dev/licensing for how to get a license key.
    const licenseKey = import.meta.env.VITE_REPLICACHE_LICENSE_KEY;
    if (!licenseKey) {
        throw new Error('Missing VITE_REPLICACHE_LICENSE_KEY');
    }
    const [userID, setUserID] = useState('');
    const [r, setR] = useState<Replicache<M> | null>(null);

    useEffect(() => {
        if (!userID) {
            return;
        }
        console.log('updating replicache');
        const r = new Replicache({
            name: userID,
            licenseKey,
            mutators,
            pushURL: `/api/replicache/push?userID=${userID}`,
            pullURL: `/api/replicache/pull?userID=${userID}`,
            logLevel: 'debug',
        });
        setR(r);
        return () => {
            void r.close();
        };
    }, [userID]);

    const storageListener = useCallback(() => {
        let userID = localStorage.getItem('userID');
        if (!userID) {
            userID = nanoid(6);
            localStorage.setItem('userID', userID);
        }
        setUserID(userID);
    }, []);
    useEffect(() => {
        storageListener();
        addEventListener('storage', storageListener, false);
        return () => {
            removeEventListener('storage', storageListener, false);
        };
    }, []);

    const handleUserIDChange = (userID: string) => {
        localStorage.setItem('userID', userID);
        storageListener();
    };

    if (!r) {
        // TODO: Show loading spinner
        return null;
    }

    return <div className={'p-10'}><ReplicacheProvider userID={userID} onUserIDChange={handleUserIDChange}
                                                       rep={r}>
        <div>
            <ul className={'flex gap-x-8'}>
                <li className={'text-lg text-blue-600 font-medium hover:text-blue-400'}><Link to={'/todo'}>Todo
                    app</Link></li>
                <li className={'text-lg text-blue-600 font-medium hover:text-blue-400'}><Link to={'/playground'}>Playground
                    app</Link></li>
            </ul>
        </div>
        <div><Outlet/></div>
    </ReplicacheProvider></div>;
}
