import React from 'react';
import HomeIcon from './icons/fi_home';
import SaavyLogo from './images/Logo';
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
import ChevronRight from './icons/fi_chevron-right';
import Plus from './icons/fi_plus';
import MessageSquare from './icons/fi_message-square';
import Trash_2 from './icons/fi_trash-2';
import List from './icons/fi_list';
import Shield from './icons/fi_shield';
import Share from './icons/fi_share';
import ArrowUp from './icons/fi_arrow-up';
import ArrowDown from './icons/fi_arrow-down';
import LockClosed from './icons/fi_lock-closed';
import LockOpen from './icons/fi_lock-open';
import Facebook from './icons/fi_facebook';
import Twitter from './icons/fi_twitter';
import Instagram from './icons/fi_instagram';
import DocumentOutline from './icons/fi_document_outline';
import Copy from './icons/fi_copy';

interface IconProp {
  name: string;
  onPress?: any;
}

interface map {
  [key: string]: (props: any, {onPress}?: any) => React.JSX.Element;
}
const iconMap: map = {
  home: HomeIcon,
  logo: SaavyLogo,
  dollar: DollarIcon,
  chat: ChatIcon,
  briefcase: BriefcaseIcon,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  helpCircle: HelpCircle,
  naira: Naira,
  search: Search,
  phoneCall: PhoneCall,
  calendar: Calendar,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  uploadCloud: UploadCloud,
  eye: Eye,
  eyeOff: EyeOff,
  check: Check,
  InvestmentIllustration: InvestmentIllustration,
  LearningIllustration: LearningIllustration,
  BusinessSuccess: BusinessSuccess,
  DiverseOpportunities: DiverseOpportunities,
  GoogleLogo: GoogleLogo,
  CheckCircle: CheckCircle,
  X_Circle: X_Circle,
  home_2: Home_2,
  plusCircle_1: PlusCircle_1,
  plusCircle_2: PlusCircle_2,
  ai_icon: Ai_Icon,
  ai_icon_active: Ai_Icon_Active,
  user: User,
  userActive: UserActive,
  playCircle: PlayCircle,
  displayCardChart: DisplayCardChart,
  bell: NotificationBell,
  ai_send: Ai_Send,
  menu: Menu,
  thumbs_up: ThumbsUp,
  thumbs_down: ThumbsDown,
  clipboard: Clipboard,
  plus: Plus,
  square_message: MessageSquare,
  trash: Trash_2,
  list: List,
  shield: Shield,
  share: Share,
  lock_closed: LockClosed,
  lock_open: LockOpen,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  document_outline: DocumentOutline,
  copy: Copy,
};

const Icon = ({name, onPress, ...props}: IconProp) => {
  const IconComponent = iconMap[name];

  if (IconComponent) {
    return <IconComponent onPress={onPress} {...props} />;
  }

  return null;
};

export default Icon;
