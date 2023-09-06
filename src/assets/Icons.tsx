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
import ChevronLeft from './icons/fi_chevron-left';
import BusinessSuccess from './icons/BusinessSuccess';
import DiverseOpportunities from './icons/DiverseOpportunities';
import LearningIllustration from './icons/LearningIllustration';
import GoogleLogo from './icons/GoogleLogo';
import CheckCircle from './icons/fi_check-circle';
import X_Circle from './icons/fi_x-circle';
import Home_2 from './icons/fi_home2';
import PlusCircle_1 from './icons/fi_plus-circle';
import PlusCircle_2 from './icons/fi_plus-circle2';
import Ai_Icon from './icons/fi_Ai-Icon';
import Ai_Icon_Active from './icons/fi_Ai-Icon-Active';
import User from './icons/fi_user';
import UserActive from './icons/fi_user2';
import PlayCircle from './icons/fi_play-circle';
import DisplayCardChart from './icons/DisplayCardChart';
import NotificationBell from './icons/fi_notificationBell';
import Ai_Send from './icons/ai_send';
import Menu from './icons/fi_menu';
import ThumbsUp from './icons/fi_thumbs-up';
import ThumbsDown from './icons/fi_thumbs-down';
import Clipboard from './icons/fi_clipboard';

interface IconProp {
  name: string;
  onPress?: any;
}

const Icon = ({name, onPress, ...props}: IconProp) => {
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
    case 'chevronLeft':
      return <ChevronLeft onPress={onPress} {...props} />;
    case 'uploadCloud':
      return <UploadCloud {...props} />;
    case 'eye':
      return <Eye {...props} />;
    case 'eyeOff':
      return <EyeOff {...props} />;
    case 'check':
      return <Check {...props} />;
    case 'InvestmentIllustration':
      return <InvestmentIllustration {...props} />;
    case 'LearningIllustration':
      return <LearningIllustration {...props} />;
    case 'BusinessSuccess':
      return <BusinessSuccess {...props} />;
    case 'DiverseOpportunities':
      return <DiverseOpportunities {...props} />;
    case 'GoogleLogo':
      return <GoogleLogo {...props} />;
    case 'CheckCircle':
      return <CheckCircle {...props} />;
    case 'X_Circle':
      return <X_Circle {...props} />;
    case 'home_2':
      return <Home_2 {...props} />;
    case 'plusCircle_1':
      return <PlusCircle_1 {...props} />;
    case 'plusCircle_2':
      return <PlusCircle_2 {...props} />;
    case 'ai_icon':
      return <Ai_Icon {...props} />;
    case 'ai_icon_active':
      return <Ai_Icon_Active {...props} />;
    case 'user':
      return <User {...props} />;
    case 'userActive':
      return <UserActive {...props} />;
    case 'playCircle':
      return <PlayCircle {...props} />;
    case 'displayCardChart':
      return <DisplayCardChart {...props} />;
    case 'bell':
      return <NotificationBell {...props} />;
    case 'ai_send':
      return <Ai_Send {...props} />;
    case 'menu':
      return <Menu {...props} />;
    case 'thumbs-up':
      return <ThumbsUp {...props} />;
    case 'thumbs-down':
      return <ThumbsDown {...props} />;
    case 'clipboard':
      return <Clipboard {...props} />;
    default:
      return null;
  }
};

export default Icon;
