import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import en from '../locale/en.json';
import fr from '../locale/fr.json';
import it from '../locale/it.json';
import de from '../locale/de.json';
import es from '../locale/es.json';

i18n.use(reactI18nextModule).init({
    resources: {
        en,
        fr,
        it,
        de,
        es,
    },
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ',',
    },
    react: {
        wait: true,
    },
});

export default i18n;
