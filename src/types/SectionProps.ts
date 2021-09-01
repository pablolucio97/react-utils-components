import { ReactNode } from "react";
type SectionProps = {
  menuId?: string;
  title?: string;
  children?: ReactNode;
  sectionStyle?:{
      background?: string;
  }
  contentOrientation?:  'horizontal' | 'vertical'
};

export default SectionProps;
