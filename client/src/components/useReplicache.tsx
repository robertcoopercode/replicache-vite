import { useContext } from 'react';

import {ReplicacheContext} from "components/ReplicacheContext";

export const useReplicache = () => {
	const replicacheContext = useContext(ReplicacheContext);
	if (replicacheContext === undefined) {
		throw new Error('useReplicache must be used within a ReplicacheProvider');
	}

	return replicacheContext;
};
