'use client';
import { MaskContainer } from './ui/svg-mask-effect';
import { EncryptedText } from './ui/encrypted-text';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div id="home" className="relative">
            <MaskContainer revealText={
                <EncryptedText
                    text="Hi, I am Aniket Gupta 🤟"
                    className="text-6xl px-4"
                />
            }>
                <div className="text-6xl text-black">
                    <div>
                        <span className='text-white dark:text-black'>
                            I am a&nbsp;
                        </span>
                        <span className="text-green-500">
                            Full stack
                        </span>
                        <span className='text-white dark:text-black'>
                            &nbsp; and &nbsp;
                        </span>
                        <span className="text-green-500">
                            Web3 developer
                        </span>.
                    </div>
                </div>
            </MaskContainer>

            {/* Scroll Down Indicator */}
            <motion.a
                href="#about"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary hover:text-green-500 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                </motion.svg>
            </motion.a>
        </div>
    );
}
