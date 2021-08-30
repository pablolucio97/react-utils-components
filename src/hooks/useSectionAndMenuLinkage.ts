import {useContext} from 'react'
import {SectionAndMenuContext} from '../context/SectionAndMenuContext'

function useSectionAndMenuLinkage() {
    return useContext(SectionAndMenuContext)
}

export {useSectionAndMenuLinkage}