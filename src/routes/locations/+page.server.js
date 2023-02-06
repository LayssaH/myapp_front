import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ event, locals ,resolve}) {
    //if (!locals.user) throw redirect(307, '/login');
    const locations = await api.get("http://localhost:3000/locations/", locals.user.token,'GET')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    //const locations = await fetch("http://localhost:3000/locations/", locals.user.token)
    return locations
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {



        if (body.errors) {
            return fail(401, body);
        }

    }
};