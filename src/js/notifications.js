import { error, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';

// import 'material-design-icons/iconfont/material-icons.css';
defaultModules.set(PNotifyMobile, {});

defaults.styling = 'material';
defaults.icons = 'material';


export default error;