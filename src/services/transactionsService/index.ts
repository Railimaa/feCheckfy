import { create } from './create';
import { getAll } from './getAll';
import { update } from './update';
import { deleted } from './delete';

export const transactionsService = {
    create,
    getAll,
    update,
    deleted
};
