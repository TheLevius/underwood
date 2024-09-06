import { Logo } from './Logo';
import { Menu } from './Menu';

export function Header() {
	return (
		<header className='py-20 flex flex-col gap-4 relative'>
			<Menu />
			<Logo textSize='[32px]' gap='4' />
		</header>
	);
}
