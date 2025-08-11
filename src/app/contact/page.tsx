import Image from 'next/image';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
      </header>
      <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
        {/* Signal */}
        <div className="tech-link">
          <Image
            src="/icons/signal.svg"
            alt="Signal"
            width={24}
            height={24}
          />
          <div className="flex-1">
            <p className="font-semibold text-lg mb-1">Signal</p>
            <p className="opacity-75">prestonhorne [ dot 01 ]</p>
          </div>
        </div>

        {/* Email */}
        <div className="tech-link">
          <Image
            src="/icons/envelope.svg"
            alt="Email"
            width={24}
            height={24}
          />
          <div className="flex-1">
            <p className="font-semibold text-lg mb-2">Email</p>
            <div className="space-y-1">
              <p className="opacity-75">me [ at prestonhorne dot com ]</p>
              <p className="opacity-75">preston.m.horne [ at vanderbilt dot edu ]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}