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
    return (
        <Container background={background} displayContent={displayContent}>
            <Link href={githubUrl} iconsStyle={iconsStyle}>
                <AiFillGithub/>
            </Link>
            <Link href={facebookUrl} iconsStyle={iconsStyle}>
                <AiFillFacebook />
            </Link>
            <Link href={instagramUrl} iconsStyle={iconsStyle}>
                <AiFillInstagram />
            </Link>
            <Link href={whatsappUrl} iconsStyle={iconsStyle}>
                <AiOutlineWhatsApp />
            </Link>
            <Link href={linkedinUrl} iconsStyle={iconsStyle}>
                <AiFillLinkedin />
            </Link>
            <Link href={twitterUrl} iconsStyle={iconsStyle}>
                <AiFillTwitterSquare />
            </Link>
            <Link href={youtubeUrl} iconsStyle={iconsStyle}>
                <AiFillYoutube />
            </Link>
        </Container>
    )
}
