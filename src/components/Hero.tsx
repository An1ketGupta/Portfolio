'use client';
import { MaskContainer } from './ui/svg-mask-effect';
import { EncryptedText } from './ui/encrypted-text';

export default function Hero() {
  return (
    <div id="home">
      <MaskContainer revealText = {
            <EncryptedText
            text="Hi, I am Aniket Gupta 🤟"
            className="text-6xl px-4"
            />
        }>
            <div className="text-6xl text-black">
                <div>
                    I am A&nbsp;
                    <span className="text-green-500">
                        Full stack
                    </span>
                    &nbsp; and &nbsp;
                    <span className="text-green-500">
                        Web3 developer
                    </span>. 
                </div>
            </div>
        </MaskContainer>
    </div>
  );
}
