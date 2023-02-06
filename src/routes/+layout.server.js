/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
	return {
		user: locals.user && {
			username: locals.user.username,
			image: locals.user.image,
			bio: locals.user.bio
		}
	};
}
