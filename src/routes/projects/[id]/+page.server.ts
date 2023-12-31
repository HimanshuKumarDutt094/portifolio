export async function load({ params }) {
	let param;
	if (params.id === '1') {
		console.log('yay params working');
		param = { id: 1, title: 'anything-cart' };
		return { props: { param } };
	} else if (params.id === '2') {
		console.log('yay params working');
		param = { id: 2, title: 'draw-match' };
		return { props: { param } };
	} else if (params.id === '3') {
		console.log('yay params working');
		param = { id: 3, title: 'supportify-svelte' };
		return { props: { param } };
	} else {
		console.log('yay params working');
		param = { id: 0, title: 'error' };
		return { props: { param } };
	}
}
