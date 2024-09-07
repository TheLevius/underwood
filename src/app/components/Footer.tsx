import { Logo } from './Logo';

export function Footer() {
	return (
		<footer className='flex flex-col justify-center items-center content-center gap-2 p-4 bg-neutral-500'>
			<Logo textSize='xs' picHeight='24' gap='2' />
			<div className='text-xs'>{new Date().getFullYear()}</div>
		</footer>
	);
}
