import {GlobalStyles} from './styles/Globals'
import {InfoCard} from './components/InfoCard/Index'
import {ReadBarProgress} from './components/ReadBarProgress/Index'

//fix text width on InfoCard
//do progressbarread works

const App = () => {
    return(
        <>
            <GlobalStyles/>
            <ReadBarProgress
                background='red'
                barType='thin'
                gradientBackground
                gradientStartColor='yellow'
                gradientEndColor='red'

            />
            <InfoCard
                title='Title'
                subtitle='Subtitle'
                content='Card content'
                animationOnHover    
            />
            <InfoCard
                title='Title'
                subtitle='Subtitle'
                content='Card content'
                animationOnHover    
            />
            <InfoCard
                title='Title'
                subtitle='Subtitle'
                content='Card content'
                animationOnHover    
            />
            <InfoCard
                title='Title'
                subtitle='Subtitle'
                content='Card content'
                animationOnHover    
            />
        </>
    )
}

export default App