import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={logo} alt="SIMTECH" className="h-10 w-10" />
                            <span className="text-white font-bold text-2xl tracking-wide">SIMTECH</span>
                        </div>
                        <p className="max-w-sm leading-relaxed mb-6">
                            Partner teknologi terpercaya untuk transformasi digital kesehatan dan bisnis Anda.
                            Aman, Terukur, Terintegrasi.
                        </p>
                        <div className="flex gap-4">
                            {/* Social links placeholder */}
                            {['Instagram', 'LinkedIn', 'Facebook'].map(social => (
                                <a key={social} href="#" className="text-slate-400 hover:text-white transition-colors">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Layanan</h4>
                        <ul className="space-y-3">
                            <li><a href="#services" className="hover:text-brand-400 transition-colors">SIMRS Terintegrasi</a></li>
                            <li><a href="#services" className="hover:text-brand-400 transition-colors">Web & Mobile Apps</a></li>
                            <li><a href="#services" className="hover:text-brand-400 transition-colors">IoT & Hardware</a></li>
                            <li><a href="#services" className="hover:text-brand-400 transition-colors">IT Consultant</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Perusahaan</h4>
                        <ul className="space-y-3">
                            <li><a href="#about" className="hover:text-brand-400 transition-colors">Tentang Kami</a></li>
                            <li><a href="#portfolio" className="hover:text-brand-400 transition-colors">Portofolio</a></li>
                            <li><a href="#pricing" className="hover:text-brand-400 transition-colors">Karir</a></li>
                            <li><a href="#contact" className="hover:text-brand-400 transition-colors">Hubungi Kami</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© {new Date().getFullYear()} PT Simplify Technologies Indonesia. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
