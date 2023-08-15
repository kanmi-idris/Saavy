import React from 'react';
import HomeIcon from './icons/fi_home';
import SaavyLogo from './images/Logo.svg';
import DollarIcon from './icons/fi_dollar';
import ChatIcon from './icons/Chat';
import BriefcaseIcon from './icons/fi_briefcase';
import ArrowRight from './icons/fi_arrow-right';

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
    default:
      return null;
  }
};

export default Icon;
