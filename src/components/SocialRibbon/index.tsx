import { Container, Link } from './styles'
import {
    AiFillGithub,
    AiFillFacebook,
    AiFillInstagram,
    AiOutlineWhatsApp,
    AiFillYoutube,
    AiFillLinkedin,
    AiFillTwitterSquare
} from 'react-icons/ai'
import SocialRibbonProps from '../../types/SocialRibbonsProps'

export default function SocialRibbon({
    background,
    iconsStyle,
    linkedinUrl,
    githubUrl,
    whatsappUrl,
    twitterUrl,
    facebookUrl,
    instagramUrl,
    youtubeUrl,
    displayContent
}: SocialRibbonProps) {

    function openUrl(url?: string) {
        window.open(url, '_blank')
    }

    return (
        <Container background={background} displayContent={displayContent}>
            <Link onClick={() => openUrl(githubUrl)}
                iconsStyle={iconsStyle}
            >
                <AiFillGithub />
            </Link>
            <Link onClick={() => openUrl(facebookUrl)}
                iconsStyle={iconsStyle}
            >
                <AiFillFacebook />
            </Link>
            <Link onClick={() => openUrl(instagramUrl)}
                iconsStyle={iconsStyle}
            >
                <AiFillInstagram />
            </Link>
            <Link onClick={() => openUrl(whatsappUrl)}
                iconsStyle={iconsStyle}
            >
                <AiOutlineWhatsApp />
            </Link>
            <Link onClick={() => openUrl(linkedinUrl)}
                iconsStyle={iconsStyle}
            >
                <AiFillLinkedin />
            </Link>
            <Link onClick={() => openUrl(twitterUrl)}
                iconsStyle={iconsStyle}
            >
                <AiFillTwitterSquare />
            </Link>
            <Link onClick={() => openUrl(youtubeUrl)}
                iconsStyle={iconsStyle}
            >
                <AiFillYoutube />
            </Link>
        </Container>
    )
}
