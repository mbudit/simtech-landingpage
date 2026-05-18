import { useTranslation } from "react-i18next";

const languages = [
    {
        code: "id",
        label: "ID",
        fullLabel: "Indonesia",
    },
    {
        code: "en",
        label: "EN",
        fullLabel: "English",
    },
    {
        code: "zh",
        label: "中文",
        fullLabel: "Mandarin",
    },
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const handleChangeLanguage = (languageCode) => {
        i18n.changeLanguage(languageCode);
        localStorage.setItem("simtech-language", languageCode);
    };

    return (
        <div className="inline-flex h-11 items-center rounded-full border border-slate-200 bg-white/90 p-1 shadow-sm backdrop-blur">
            {languages.map((language) => {
                const isActive = i18n.language === language.code;

                return (
                    <button
                        key={language.code}
                        type="button"
                        onClick={() => handleChangeLanguage(language.code)}
                        title={language.fullLabel}
                        aria-label={`Change language to ${language.fullLabel}`}
                        className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-300 ${
                            isActive
                                ? "bg-brand-600 text-white shadow-md shadow-brand-500/25"
                                : "text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                        }`}
                    >
                        {language.label}
                    </button>
                );
            })}
        </div>
    );
}