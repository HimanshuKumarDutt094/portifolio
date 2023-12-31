import { json } from '@sveltejs/kit';

export async function GET() {
	const images = { 1: 'anything-cart', 2: 'draw-match', 3: 'supportify-svelte' };

	return json(images);
}
