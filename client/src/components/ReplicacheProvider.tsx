import React from 'react';

import {Replicache} from "replicache";
import {M} from "../mutators";
import { ReplicacheContext } from './ReplicacheContext';

export function ReplicacheProvider({
                                      rep, userID, onUserIDChange,
                                      children,
                                  }: {
    rep: Replicache<M>;
    userID: string;
    onUserIDChange: (userID: string) => void;
    children: React.ReactNode;
}) {
    return (
        <ReplicacheContext.Provider value={{ rep, userID, onUserIDChange, }}>
            {children}
        </ReplicacheContext.Provider>
    );
}
