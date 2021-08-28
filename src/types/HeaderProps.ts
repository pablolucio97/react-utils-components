type HeaderProps = {
    title?: string;
    logoUrl?: string;
    logoSize?: "tiny" | "small" | "medium" | "large";
    headerSize?: "medium" | "large";
    headerBackground?: string;
    showReadbar?: boolean;
    showSearchBar?:Boolean;
    readBarbackground?: string;
    readBargradientBackground?: boolean;
    readBarType?: 'thick' | 'thin';
    readBargradientStartColor?: string;
    readBargradientEndColor?: string;
    displayElements?: 'center' | 'spaced'
  };
  
  export default HeaderProps;
  