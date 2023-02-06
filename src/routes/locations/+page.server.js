import {redirect} from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
    if (!locals.user) throw redirect(307, '/login');

    let locations = []
    try {
        locations = await api.get("locations", locals.user)
    } catch (e) {
        console.error(e)
    }
    return {locations}
}
