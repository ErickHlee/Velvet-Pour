import { useGSAP } from '@gsap/react'
import { navLinks } from '../../constants'
import gsap from 'gsap'

const Navbar = () => {
    useGSAP(() => {
        // de "inBetween" é o processo de gerar imagem que vai entre os keyFrames (início e fim do frame);
        const navTween = gsap.timeline({
            ScrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTween.fromTo('nav',
            { backgroundColor: 'trnasparent' },
            {
                backgroundColor: '#00000050', backgroundFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut',
            });
    });


    return (
        <nav>
            <div>
                <a href="#home" className='flex justify-around items-center gap-2'>
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar