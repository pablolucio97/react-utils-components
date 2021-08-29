type SocialRibbonProps = {
    linkedinUrl?: string;
    facebookUrl?: string;
    instagramUrl?: string;
    whatsappUrl?: string;
    githubUrl?: string;
    youtubeUrl?: string;
    twitterUrl?:string;
    iconsStyle?:{
        iconsSize?: 'tiny' | 'small' | 'medium' | 'large'
        iconsColor?: string;
    }
    background?: string;
    displayContent?: 'start' | 'center' | 'end'
    
}

export default SocialRibbonProps