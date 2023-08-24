import React from 'react';
import HomeIcon from './icons/fi_home';
import SaavyLogo from './images/Logo.svg';
import DollarIcon from './icons/fi_dollar';
import ChatIcon from './icons/Chat';
import BriefcaseIcon from './icons/fi_briefcase';
import ArrowRight from './icons/fi_arrow-right';
import HelpCircle from './icons/fi_help-circle';
import Naira from './icons/fi_naira';
import Search from './icons/fi_search';
import PhoneCall from './icons/fi_phone-call';
import Calendar from './icons/fi_calendar';
import ChevronDown from './icons/fi_chevronDown';
import UploadCloud from './icons/fi_uploadCloud';
import Eye from './icons/fi_eye';
import EyeOff from './icons/fi_eyeOff';
import Check from './icons/fi_check';
import InvestmentIllustration from './icons/InvestmentIllustration';

interface IconProp {
  name: string;
}

const Icon = ({name, ...props}: IconProp) => {
  switch (name) {
    case 'home':
      return <HomeIcon {...props} />;
    case 'logo':
      return <SaavyLogo {...props} />;
    case 'dollar':
      return <DollarIcon {...props} />;
    case 'chat':
      return <ChatIcon {...props} />;
    case 'briefcase':
      return <BriefcaseIcon {...props} />;
    case 'arrowRight':
      return <ArrowRight {...props} />;
    case 'helpCircle':
      return <HelpCircle {...props} />;
    case 'naira':
      return <Naira {...props} />;
    case 'search':
      return <Search {...props} />;
    case 'phoneCall':
      return <PhoneCall {...props} />;
    case 'calendar':
      return <Calendar {...props} />;
    case 'chevronDown':
      return <ChevronDown {...props} />;
    case 'uploadCloud':
      return <UploadCloud {...props} />;
    case 'eye':
      return <Eye {...props} />;
    case 'eyeOff':
      return <EyeOff {...props} />;
    case 'check':
      return <Check {...props} />;
    case 'InvestmentIllustration':
      return <InvestmentIllustration />;
    default:
      return null;
  }
};

export default Icon;
