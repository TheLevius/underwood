export function Button({ name = 'Done' }: { name?: string }) {
	return (
		<button className='uppercase rounded-md bg-neutral-600 py-2 mt-4 font-semibold tracking-wide'>
			{name}
		</button>
	);
}
