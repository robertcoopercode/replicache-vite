import { createContext } from 'react';
import {Replicache} from "replicache";
import { M } from '../mutators';

export const ReplicacheContext = createContext<
    | {
    rep: Replicache<M>;
    userID: string;
    onUserIDChange: (userID: string) => void;
}
    | undefined
>(undefined);
