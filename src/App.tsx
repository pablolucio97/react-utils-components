import {GlobalStyles} from './styles/Globals'
import {InfoCard} from './components/InfoCard'
import {ReadBarProgress} from './components/ReadBarProgress'
import {Dialog} from './components/Dialog'


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
            <Dialog
                title='Modal'
                content='Are you sure for delete this item from your cart?'
            />
        </>
    )
}

export default App