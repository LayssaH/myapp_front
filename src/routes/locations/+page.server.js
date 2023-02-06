import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ event, locals ,resolve}) {
    //if (!locals.user) throw redirect(307, '/login');
    //const locations = await api.get("http://localhost:3000/locations/", locals.user.token)
    const locations = await fetch("http://localhost:3000/locations/", locals.user.token)
    return {locations}
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {

        //const locations = await api.get('/locations/','jwt :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2RmYzlhNmVmZmQyYWRhYTU4ZGNkMTAiLCJyb2xlIjoidXNlciIsImlhdCI6MTY3NTYyODQyNn0.15s2xxJxYaeXku-vZVFepBDixaMuDKYaS80FMMGKNFs')
        const locations= "hello"
        return {locations}


        if (body.errors) {
            return fail(401, body);
        }

    }
};