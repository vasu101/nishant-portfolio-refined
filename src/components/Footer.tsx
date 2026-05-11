const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white/40 py-10 px-6">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <div className="font-black text-lg tracking-tight text-white/80">
          NISHANT
        </div>

        {/* Copyright */}
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Nishant Singh Shekhawat.
          All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm">

          <a
            href="#about"
            className="hover:text-white transition-colors"
          >
            About
          </a>

          <a
            href="#portfolio"
            className="hover:text-white transition-colors"
          >
            Portfolio
          </a>

          <a
            href="#experience"
            className="hover:text-white transition-colors"
          >
            Experience
          </a>

          <a
            href="mailto:nishantshekhawat@gmail.com"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
