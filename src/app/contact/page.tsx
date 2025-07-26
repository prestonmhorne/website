//import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <div>
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <div className="space-y-3">
            <div className="tech-link">
              <Image
                src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/signal.svg"
                alt="Signal"
                width={20}
                height={20}
              />
              <div>
                <p className="font-medium">Signal</p>
                <p className="text-sm opacity-75">prestonhorne [ dot 01 ]</p>
              </div>
            </div>
            
            <div className="tech-link">
              <Image
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/maildotru.svg"
                alt="Email"
                width={20}
                height={20}
              />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm opacity-75">me [ at prestonhorne dot com ]</p>
                <p className="text-sm opacity-75">preston.m.horne [ at vanderbilt dot edu ]</p>
              </div>
            </div>
            
            <div className="tech-link">
              <Image
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/gnuprivacyguard.svg"
                alt="GPG"
                width={20}
                height={20}
              />
              <div>
                <p className="font-medium">GPG</p>
                <p className="text-sm opacity-75">[Public Key]</p>
                <p className="text-sm opacity-75">[Fingerprint]</p>
              </div>
            </div>
          </div>
        </div>
  );
}