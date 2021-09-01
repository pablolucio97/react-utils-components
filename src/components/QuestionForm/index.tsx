
import QuestionFormProps from '../../types/QuestionFormProps'
import * as Styled from './styles'

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
    idOptionE,
    children

}: QuestionFormProps) => {
    return (
        <Styled.Container>
            <Styled.QuestionContainer>
                <Styled.Question>{question}</Styled.Question>
            </Styled.QuestionContainer>
            <Styled.OptionsContainer>
                <Styled.OptionContainer>
                    <Styled.OptionCheck type='radio' id={idOptionA} value={idOptionA} name={formName} />
                    <Styled.OptionLabel htmlFor={idOptionA}>{optionA}</Styled.OptionLabel>
                </Styled.OptionContainer>
                <Styled.OptionContainer>
                    <Styled.OptionCheck type='radio' id={idOptionB} value={idOptionB} name={formName} />
                    <Styled.OptionLabel htmlFor={idOptionB}>{optionB}</Styled.OptionLabel>
                </Styled.OptionContainer>
                <Styled.OptionContainer>
                    <Styled.OptionCheck type='radio' id={idOptionC} value={idOptionC} name={formName} />
                    <Styled.OptionLabel htmlFor={idOptionC}>{optionC}</Styled.OptionLabel>
                </Styled.OptionContainer>
                <Styled.OptionContainer>
                    <Styled.OptionCheck type='radio' id={idOptionD} value={idOptionD} name={formName} />
                    <Styled.OptionLabel htmlFor={idOptionD}>{optionD}</Styled.OptionLabel>
                </Styled.OptionContainer>
            </Styled.OptionsContainer>
            <Styled.ChildrenContainer>
                {children}
            </Styled.ChildrenContainer>
        </Styled.Container>
    )
}

export { QuestionForm }
