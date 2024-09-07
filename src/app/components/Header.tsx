import { Logo } from './Logo';
import { Menu } from './Menu';

export function Header() {
	return (
		<header className='py-20 flex flex-col gap-4 relative bg-neutral-500'>
			<Menu />
			<Logo textSize='[28px]' gap='2' />
		</header>
	);
}
