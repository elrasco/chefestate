import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import './iconFont/essentials/flaticon.css';
import './iconFont/essentialsFill/flaticon.css';
import './iconFont/carparts/style.css';
import './iconFont/alarms/style.css';
import './iconFont/air/style.css';
import './iconFont/contactus/flaticon.css';
import './iconFont/essential-icons/essential-light/essential-light-fonts/essential-light-styles.css';
import './iconFont/essential-icons/essential-regular/essential-regular-fonts/essential-regular-styles.css';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import RouterAuth from './components/RouterAuth';
import * as stores from './stores';

import { Provider } from 'mobx-react';

import { LocaleProvider } from 'antd';

import it_IT from 'antd/lib/locale-provider/it_IT';
import en_US from 'antd/lib/locale-provider/en_US';

import 'moment/locale/it';
import moment from 'moment';

const [language] = (navigator.language || navigator.userLanguage || 'en').split('-');

let locale = en_US;
moment.locale('en');
stores.translationsStore.setLocale('en');

if (language === 'it') {
  locale = it_IT;
  moment.locale('it');
}

const m = moment();

/* console.log(m.localeData().longDateFormat('LL')); */

stores['commonStore'].setLongDateFormat(m._locale._longDateFormat);

stores.authStore.checkSession().then(() => {
  ReactDOM.render(
    <LocaleProvider locale={locale}>
      <Provider {...stores}>
        <Router>
          <RouterAuth />
        </Router>
      </Provider>
    </LocaleProvider>,
    document.getElementById('root')
  );
});

registerServiceWorker();
