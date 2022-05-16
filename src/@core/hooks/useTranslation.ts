import { t as translate } from "react-tiny-i18n";

interface IUseTranslationReturnProps {
  t: (key: string, variables?: Record<string, string>) => string;
}
const useTranslation = (): IUseTranslationReturnProps => {
  const t = (key: string, variables?: Record<string, string>) =>
    translate(key, variables);

  return { t };
};

export default useTranslation;
