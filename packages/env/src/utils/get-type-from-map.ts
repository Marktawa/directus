import { TYPE_MAP } from '../constants/type-map.js';
import type { EnvType } from '../types/env-type.js';

export const getTypeFromMap = (key: string): EnvType | null => {
	const type = TYPE_MAP[key];

	if (type !== undefined) {
		return type;
	}

	return null;
};
