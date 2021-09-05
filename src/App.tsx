import { CSSProperties, useRef } from 'react'
import { GlobalStyles } from './styles/Globals'
import { InfoCard } from './components/InfoCard'
import CollapsibleContainer from './components/CollapsibleContainer'
import { QuestionForm } from './components/QuestionForm'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import SocialRibbon from './components/SocialRibbon'
import { TopMenu } from './components/TopMenu'
import { Section } from './components/Section'
import { useSectionAndMenuLinkage } from './hooks/useSectionAndMenuLinkage'
import { Newsletter } from './components/Newsletter'
import { Title } from './components/Title'
import { Text } from './components/Text'
import { useDialog } from './hooks/useDialogState'
import { CarouselImageLabel } from './components/CarouselImageLabel'
import { UserCard } from './components/UserCard'
import { ImageCard } from './components/ImageCard'
import { ProductCard } from './components/ProductCard'
import { Button } from './components/Button'
import { FormLogin } from './components/FormLogin'
import ScrollProgressRead from 'react-scroll-progress-read'
import Loader from "react-loader-spinner"
import scrollProgressReadContainerStyle from './styles/scrollProgressReadContainerStyle'
import {
    imageLabel1,
    imageLabel10,
    imageLabel2,
    imageLabel3,
    imageLabel4,
    imageLabel5,
    imageLabel6,
    imageLabel7,
    imageLabel8,
    imageLabel9,
    logoImage,
    productImage,
    travelImage,
    userImage
} from './assets/imgs'
import { frameworksSeeds, ideSeeds, libsSeeds, techsSeeds } from './data/links'

//create step indicator
//fix section scroll and section/topmenu context flow



const App = () => {

    const { setDialogOpened, dialogOpened } = useDialog()

    const progressRef = useRef(null)

    function triggerDialog() {
        setDialogOpened(!dialogOpened)
        console.log(dialogOpened)
    }

    const { menuId } = useSectionAndMenuLinkage()

    console.log(menuId)

    const menuItems = [
        {
            itemUrl: menuId,
            itemText: 'Facebook',
        },
        {
            itemUrl: 'https://www.linkedin.com/in/pablo-silva-76b521156/',
            itemText: 'Linkedin',
        },
        {
            itemUrl: menuId,
            itemText: 'Youtube',
        },
    ]



    return (
        <div ref={progressRef}>
            <GlobalStyles />
            <Header
                logoSize='tiny'
                logoUrl={logoImage}
                showSearchBar
                displayElements='spaced'
                fixHeader
                title='React Utils Components'

            />
            <TopMenu
                menuList={menuItems}
            />
            <div style={scrollProgressReadContainerStyle as CSSProperties}>
                <ScrollProgressRead
                    backgroundColor="#CCC"
                    barColor="#55ff"
                    height="5px"
                    target="read-container"
                    refTarget={progressRef}
                />
            </div>
            <Loader
                type="Rings"
                color="#00BFFF"
                height={40}
                width={40}
                timeout={50000}
                secondaryColor='red'
            />
            <ImageCard
                imgUrl={travelImage}
                title='Travel here'
                content='Travel with the best travel agency in the world! Consult our price in our website.'
                size='large'
            />
            <ProductCard
                imgUrl={productImage}
                title='TV SEMPTOSHIBA 32"'
                price='R$1233,90 à vista'
                priceOnCard='ou 12 x 103,99 sem juros'
                size='small'
            />
            <Title
                title='sjdfhskdf'
                renderElement='h3'
            />
            <Text
                text='sdfsdf'
            />
            <Newsletter
                title='Fique por dentro'
                textInfo='Cadastre-se na nossa newsletter e receba novidades.'
                buttonlabel='Cadastrar'
                placeholder='digite seu melhor e-mail'
                style={{
                    borderRadius: '8px',
                }}
                showFocusEffect
                alignContent='center'
            />
            <Button
                label='click'
                showPressedEffect
                buttonStyle='solid'
                action={triggerDialog}
            />


            <FormLogin
                title='New user'
            />
            <UserCard
                imgUrl={userImage}
                size='large'
                style={{
                    borderType: 'thick',
                    borderColor: 'cyan'
                }}
                title='Person'
                content='Desenvolvedor web'
                imgSize='medium'

            />
            <UserCard
                imgUrl={userImage}
                size='large'
                style={{
                    borderType: 'thick'
                }}
                title='Person'
                content='Desenvolvedor web'
            />
            <UserCard
                imgUrl={userImage}
                size='medium'
                style={{
                    borderType: 'thick'
                }}
                title='Person'
                content='Usar um boilerplate facilita o desenvolvimento!'

            />

            <Section menuId={menuId}
                sectionStyle={{
                    background: '#ccc'
                }}
                title='Contact'
            >
                <InfoCard
                    title='Title'
                    subtitle='Subtitle'
                    content='Card content'
                    size='medium'
                >
                    <Button
                        label='click'
                        showPressedEffect
                        buttonStyle='solid'
                        action={triggerDialog}
                    />
                </InfoCard>
                <InfoCard
                    title='Title'
                    subtitle='Subtitle'
                    content='Card content'
                    size='medium'
                >
                    <Button
                        label='click'
                        showPressedEffect
                        buttonStyle='solid'
                        action={triggerDialog}
                    />
                </InfoCard>
                <InfoCard
                    title='Title'
                    subtitle='Subtitle'
                    content='Card content'
                    size='medium'
                >
                    <Button
                        label='click'
                        showPressedEffect
                        buttonStyle='solid'
                        action={triggerDialog}
                    />
                </InfoCard>
            </Section>
            <CarouselImageLabel
                img1Url={imageLabel1}
                img2Url={imageLabel2}
                img3Url={imageLabel3}
                img4Url={imageLabel4}
                img5Url={imageLabel5}
                img6Url={imageLabel6}
                img7Url={imageLabel7}
                img8Url={imageLabel8}
                img9Url={imageLabel9}
                img10Url={imageLabel10}
                containerHeigh='medium'
            />

            <Section menuId='2'
                sectionStyle={{
                    background: '#fff'
                }}
                title='Contact'
            >
                <CollapsibleContainer
                    title='How much it costs?'
                    content='It is free for 3 months and you will paid after this period.'
                    effectColorOnExpand='red'

                />
                <CollapsibleContainer
                    title='How much it costs?'
                    content='It is free for 3 months and you will paid after this period.'
                />

            </Section>

            <SocialRibbon
                iconsStyle={{
                    iconsSize: 'tiny'
                }}
                background='#55ff'
                displayContent='center'
                linkedinUrl='https://www.linkedin.com/in/pablo-silva-76b521156/'
            />
            <Footer
                titleCol1='Techs'
                contentCol1={{
                    content : techsSeeds
                }}
                titleCol2='IDEs'
                contentCol2={{
                    content : ideSeeds
                }}
                titleCol3='Frameworks'
                contentCol3={{
                    content : frameworksSeeds
                }}
                titleCol4='Libs'
                contentCol4={{
                    content : libsSeeds
                }}
                titleCol5='Techs'
                contentCol5={{
                    content : techsSeeds
                }}
                extraDataText='lorem isdfhskjdhfksjdfhgshkdfgsdjkhgfsdjhkfgsdfjkhsgdfjkshdfgs'
            />
        </div>
    )
}

export default App