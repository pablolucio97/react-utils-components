import { GlobalStyles } from './styles/Globals'
import { InfoCard } from './components/InfoCard'
import { ReadBarProgress } from './components/ReadBarProgress'
import { Dialog } from './components/Dialog'
import { useDialog } from './hooks/useDialogState'
import { ModalContextProvider } from './context/ModalContext'
import { PrimaryButton } from './components/PrimaryButton'

//do progressbarread works
//create functionalities to dialog -- fix dialog context


const App = () => {

    const { dialogOpened, setDialogOpened } = useDialog()

    function confirmActionx() {
        setDialogOpened(false)
    }

    function cancelActionx() {
        setDialogOpened(false)
    }

    console.log(dialogOpened)


    return (
        <ModalContextProvider>
                <GlobalStyles />
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
                />
                <Dialog
                    title='Dialog'
                    content='Are you sure for delete this item from your cart?'
                    confirmAction={confirmActionx}
                    cancelAction={cancelActionx}
                />
                <PrimaryButton
                    label='click'
                    showPressedEffect
                />
        </ModalContextProvider>
    )
}

export default App