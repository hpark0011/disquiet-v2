import { FooterItemProps } from '@/types/post-card';
import Icon from '@/components/Icon';

const FooterItem: React.FC<FooterItemProps> = ({ icon, value }) => (
  <div className='flex items-center w-full  justify-center rounded-[6px] cursor-pointer bg-white transition-all duration-300 ease-in-out hover:bg-primary-button-hover'>
    <Icon name={icon} className='w-[22px] h-[22px]' />
    <span className='ml-1 text-label text-muted'>{value}</span>
  </div>
);

export default FooterItem;
