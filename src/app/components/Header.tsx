import { Logo } from './Logo';
import { Menu } from './Menu';

export function Header() {
	return (
		<header className='py-20 flex flex-col items-center gap-4 relative'>
			<Menu />
			<Logo />
		</header>
	);
}
