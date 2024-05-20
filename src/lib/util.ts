// place files you want to import through the `$lib` alias in this folder.
export const generateId = (len: number): string => {
	const c = 'abcdefghijklmnopqrstuvwxyz0123456789';
	const cl = c.length;
	let r = '';
	for (let i = 0; i < len; i++) {
		r += c[Math.floor(Math.random() * cl)];
	}
	return r;
};
