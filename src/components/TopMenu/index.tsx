import TopMenuProps from '../../types/TopMenuProps'
import {MenuContainer, MenuItem} from './styles'

const TopMenu = ({menuList} : TopMenuProps) => {

    return(
        <MenuContainer>
            {menuList.map(item => (
                <MenuItem href={item.itemUrl}>{item.itemText}</MenuItem>
            ))}
        </MenuContainer>
    )
}

export { TopMenu}