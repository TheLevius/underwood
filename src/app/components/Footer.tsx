import { Logo } from './Logo';

export function Footer() {
	return (
		<footer className='flex flex-col justify-center items-center content-center gap-4'>
			<Logo textSize='12' picHeight='24' />
			<div className='text-xs'>{new Date().getFullYear()}</div>
		</footer>
	);
}
