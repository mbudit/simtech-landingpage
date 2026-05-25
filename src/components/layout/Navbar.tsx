import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import { useThemeMode } from '../../hooks/useThemeMode'
import { useLanguageMode } from '../../hooks/useLanguageMode'

type CompanyMenu =
  | {
      type: 'route'
      labelId: string
      labelEn: string
      to: string
    }
  | {
      type: 'hash'
      labelId: string
      labelEn: string
      href: string
    }

type ServicesMenu = {
  labelId: string
  labelEn: string
  href: string
}

const companyMenus: CompanyMenu[] = [
  { type: 'route', labelId: 'Tentang Kami', labelEn: 'About Us', to: '/about-us' },
  { type: 'route', labelId: 'Klien Kami', labelEn: 'Our Clients', to: '/our-clients' },
  { type: 'route', labelId: 'Tim Kami', labelEn: 'Teams', to: '/teams' },
]

const servicesMenus: ServicesMenu[] = [
  { labelId: 'Ringkasan Layanan', labelEn: 'Services Overview', href: '/services/services-overview' },
  { labelId: 'Website Development', labelEn: 'Website Development', href: '/services/website-development' },
  { labelId: 'Mini E-Commerce', labelEn: 'Mini E-Commerce', href: '/services/mini-ecommerce' },
  { labelId: 'Web Application', labelEn: 'Web Application', href: '/services/web-application' },
  { labelId: 'IoT Solution', labelEn: 'IoT Solution', href: '/services/iot-solution' },
  { labelId: 'Cloud & DevOps', labelEn: 'Cloud & DevOps', href: '/services/cloud-devops' },
  { labelId: 'Custom Software', labelEn: 'Custom Software', href: '/services/custom-software' },
  { labelId: 'IT Consulting', labelEn: 'IT Consulting', href: '/services/it-consulting' },
  { labelId: 'Project Inquiry', labelEn: 'Project Inquiry', href: '/services/project-inquiry' },
]

const navText = {
  id: {
    home: 'Beranda',
    company: 'Perusahaan',
    services: 'Layanan',
    solutions: 'Solusi',
    portfolio: 'Portfolio',
    contact: 'Kontak',
    inquiry: 'Project Inquiry',
    switchToLight: 'Mode Terang',
    switchToDark: 'Mode Gelap',
    languageButton: 'EN',
    languageFlag: '🇬🇧',
    languageTitle: 'Switch to English',
  },
  en: {
    home: 'Home',
    company: 'Company',
    services: 'Services',
    solutions: 'Solutions',
    portfolio: 'Portfolio',
    contact: 'Contact',
    inquiry: 'Project Inquiry',
    switchToLight: 'Switch to Light Mode',
    switchToDark: 'Switch to Dark Mode',
    languageButton: 'ID',
    languageFlag: '🇮🇩',
    languageTitle: 'Switch to Bahasa Indonesia',
  },
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const navigate = useNavigate()
  const { theme, toggleTheme } = useThemeMode()
  const { language, setLanguageMode, toggleLanguage } = useLanguageMode()
  const t = navText[language]

  const closeMenus = () => {
    setOpen(false)
    setCompanyOpen(false)
    setServicesOpen(false)
  }

  const goHash = (href: string) => {
    closeMenus()

    if (href.startsWith('/#')) {
      navigate('/')
      window.setTimeout(() => {
        const target = document.querySelector(href.replace('/', ''))
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 120)
      return
    }

    if (href.startsWith('/')) {
      navigate(href)
      return
    }

    window.location.href = href
  }

  const getLabel = (item: { labelId: string; labelEn: string }) => {
    return language === 'id' ? item.labelId : item.labelEn
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenus}>
          <img
            src="/logo-simtech.svg"
            alt="SIMTECH Logo"
            className="h-11 w-auto"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />
          <div>
            <p className="text-sm font-bold tracking-wide text-white">SIMTECH</p>
            <p className="hidden text-xs text-cyan-200 sm:block">
              Simplify Technologies Indonesia
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          <Link to="/" className="transition hover:text-cyan-300">
            {t.home}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 transition hover:text-cyan-300"
              onClick={() => setCompanyOpen((value) => !value)}
            >
              {t.company}
              <ChevronDown size={15} />
            </button>

            {companyOpen && (
              <div className="absolute left-0 top-full min-w-[220px] pt-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
                  {companyMenus.map((menu) => {
                    if (menu.type === 'route') {
                      return (
                        <Link
                          key={menu.labelEn}
                          to={menu.to}
                          className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/[0.05] hover:text-yellow-300"
                          onClick={closeMenus}
                        >
                          {getLabel(menu)}
                        </Link>
                      )
                    }

                    return (
                      <button
                        key={menu.labelEn}
                        type="button"
                        onClick={() => goHash(menu.href)}
                        className="block w-full rounded-xl px-4 py-3 text-left text-slate-300 transition hover:bg-white/[0.05] hover:text-yellow-300"
                      >
                        {getLabel(menu)}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 transition hover:text-cyan-300"
              onClick={() => setServicesOpen((value) => !value)}
            >
              {t.services}
              <ChevronDown size={15} />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full min-w-[280px] pt-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
                  {servicesMenus.map((menu) => (
                    <button
                      key={menu.href}
                      type="button"
                      onClick={() => goHash(menu.href)}
                      className="block w-full rounded-xl px-4 py-3 text-left text-slate-300 transition hover:bg-white/[0.05] hover:text-yellow-300"
                    >
                      {getLabel(menu)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button onClick={() => goHash('/#solutions')} className="transition hover:text-cyan-300">
            {t.solutions}
          </button>

          <Link to="/portfolio" className="transition hover:text-cyan-300" onClick={closeMenus}>
            {t.portfolio}
          </Link>

          <button onClick={() => goHash('/#contact')} className="transition hover:text-cyan-300">
            {t.contact}
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300 hover:text-slate-950"
            aria-label="Toggle language"
            title={t.languageTitle}
          >
            <span className="text-base">{t.languageFlag}</span>
            <span>{t.languageButton}</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-yellow-300 transition hover:border-yellow-300/40 hover:bg-yellow-300 hover:text-slate-950"
            aria-label="Toggle light and dark mode"
            title={theme === 'dark' ? t.switchToLight : t.switchToDark}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            type="button"
            onClick={() => goHash('/services/project-inquiry')}
            className="hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300 md:block"
          >
            {t.inquiry}
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-3 text-sm text-slate-200">
            <Link
              to="/"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              onClick={closeMenus}
            >
              {t.home}
            </Link>

            <Link
              to="/portfolio"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              onClick={closeMenus}
            >
              {t.portfolio}
            </Link>

            <p className="px-2 pt-3 text-xs font-bold uppercase tracking-[0.25em] text-yellow-300">
              {t.company}
            </p>

            {companyMenus.map((menu) => {
              if (menu.type === 'route') {
                return (
                  <Link
                    key={menu.labelEn}
                    to={menu.to}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    onClick={closeMenus}
                  >
                    {getLabel(menu)}
                  </Link>
                )
              }

              return (
                <button
                  key={menu.labelEn}
                  onClick={() => goHash(menu.href)}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left"
                >
                  {getLabel(menu)}
                </button>
              )
            })}

            <p className="px-2 pt-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              {t.services}
            </p>

            {servicesMenus.map((menu) => (
              <button
                key={menu.href}
                onClick={() => goHash(menu.href)}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left"
              >
                {getLabel(menu)}
              </button>
            ))}

            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                setLanguageMode(language === 'id' ? 'en' : 'id')
              }}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left"
            >
              <span>{language === 'id' ? 'English Version' : 'Versi Indonesia'}</span>
              <span className="text-lg">
                {language === 'id' ? '🇬🇧 EN' : '🇮🇩 ID'}
              </span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left"
            >
              <span>{theme === 'dark' ? t.switchToLight : t.switchToDark}</span>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => goHash('/services/project-inquiry')}
              className="rounded-xl bg-yellow-400 px-4 py-3 text-center font-bold text-slate-950"
            >
              {t.inquiry}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
