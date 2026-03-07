"use client";

import { useState } from 'react';
import Logo from './icons/logo';
import { User } from 'lucide-react';


export default function Header() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false); //For mobile navigation
    const [isDarkMode, setIsDarkMode] = useState(false); //for dark mode toggle
    const [lang, setLang] = useState('FR | EN'); //for language options

    return (
        <header className='inline-flex items-center justify-between w-full pt-4 px-24'>
            <div className='w-18 h-18'>
                <Logo />
            </div>
            <nav className='inline-flex gap-4'>
                <a href='#blog' className='menubtn'>Actualité</a>
                <a href='#roasters' className='menubtn'>Roasters</a>
                <a href='#results' className='menubtn'>Résultats</a>
            </nav>
            <div className='inline-flex gap-4 items-center'>
                <button className='userButton'><User size={30} /></button>
                <button onClick={() => setIsDarkMode(!isDarkMode)} className='darkmodebtn'>darkmode</button>
                <button
                    data-popover-target='language-menu'
                    class='rounded-md bg-slate-800 py-2 px-4 
                    border border-transparent text-center text-sm
                    text-white transition-all shadow-md 
                    hover:shadow-lg focus:bg-slate-700 
                    focus:shadow-none active:bg-slate-700 hover:bg-slate-700 
                    active:shadow-none disabled:pointer-events-none disabled:opacity-50 
                    disabled:shadow-none ml-2" type="button"'
                >
                    {lang}
                </button>
            </div>
        </header>
    );
};