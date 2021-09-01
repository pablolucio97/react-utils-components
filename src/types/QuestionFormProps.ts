import { ReactNode } from "react"

type QuestionFormProps = {
    question: string;
    formName: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    optionE?: string;
    idOptionA: string;
    idOptionB: string;
    idOptionC: string;
    idOptionD: string;
    idOptionE?: string;
    children?: ReactNode
}

export default QuestionFormProps