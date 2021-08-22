import {GlobalStyles} from './styles/Globals'
import {InfoCard} from './components/InfoCard/Index'

//fix text width on InfoCard

const App = () => {
    return(
        <>
            <GlobalStyles/>
            <InfoCard
                title='Title'
                subtitle='Subtitle'
                content='Card content'
            />
        </>
    )
}

export default App