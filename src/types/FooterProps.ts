type FooterItem = {
  text?: string;
  url?: string;
};

type FooterProps = {
  titleCol1?: string;
  contentCol1?: {
    content?: FooterItem[];
  };
  titleCol2?: string;
  contentCol2?: {
    content?: FooterItem[];
  };
  titleCol3?: string;
  contentCol3?: {
    content?: FooterItem[];
  };
  titleCol4?: string;
  contentCol4?: {
    content?: FooterItem[];
  };
  titleCol5?: string;
  contentCol5?: {
    content?: FooterItem[];
  };
  showExtraData?: boolean;
  extraDataText?: string;
};

export default FooterProps;
