import { persistentAtom } from '@nanostores/persistent';

export const counter = persistentAtom('count', '0');