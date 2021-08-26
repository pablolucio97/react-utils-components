
import QuestionFormProps from '../../types/QuestionFormProps'
import {
    Container,
    OptionCheck,
    OptionLabel,
    OptionsContainer,
    Question,
    QuestionContainer,
    OptionContainer
} from './styles'

const QuestionForm = ({
    formName,
    question,
    optionA,
    optionB,
    optionC,
    optionD,
    optionE,
    idOptionA,
    idOptionB,
    idOptionC,
    idOptionD,
    idOptionE

}: QuestionFormProps) => {
    return (
        <Container>
            <QuestionContainer>
                <Question>{question}</Question>
            </QuestionContainer>
            <OptionsContainer>
                <OptionContainer>
                    <OptionCheck type='radio' id={idOptionA} value={idOptionA} name={formName} />
                    <OptionLabel htmlFor={idOptionA}>{optionA}</OptionLabel>
                </OptionContainer>
                <OptionContainer>
                    <OptionCheck type='radio' id={idOptionB} value={idOptionB} name={formName} />
                    <OptionLabel htmlFor={idOptionB}>{optionB}</OptionLabel>
                </OptionContainer>
                <OptionContainer>
                    <OptionCheck type='radio' id={idOptionC} value={idOptionC} name={formName} />
                    <OptionLabel htmlFor={idOptionC}>{optionC}</OptionLabel>
                </OptionContainer>
                <OptionContainer>
                    <OptionCheck type='radio' id={idOptionD} value={idOptionD} name={formName} />
                    <OptionLabel htmlFor={idOptionD}>{optionD}</OptionLabel>
                </OptionContainer>
            </OptionsContainer>
        </Container>
    )
}

export { QuestionForm }
