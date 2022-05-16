import { Languages } from "react-tiny-i18n";
import APP_CONFIG from "../../constants/app-config";
import en from "./en";

const languages = {
  en,
};

interface ILanguageProvider {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<ILanguageProvider> = ({ children }) => {
  return (
    <Languages languages={languages} defaultLanguage={APP_CONFIG.defaultLang}>
      {children}
    </Languages>
  );
};
export default LanguageProvider;
