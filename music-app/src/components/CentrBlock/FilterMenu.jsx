import { useState} from 'react';
import { useThemeContext } from '../../context/theme'

import RenderClickMenuAuthor from './clickMenuAuthor';
import RenderClickMenuYuar from './clickMenuYuar';
import RenderClickMenuGenre from './clickMenuGenre';

import * as S from './styledFilterMenu'

function FilterMenu (){
  const {theme} = useThemeContext();

    // открытие-скрытие filter-title
    const [isVisibleFilter, setVisibleFilter] = useState(null)

    const toggleVisibleFilter = (filter) => {   
        setVisibleFilter(isVisibleFilter === filter ? null : filter)
    }

    return(
        <S.CenterblockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <S.FilterButton
                onClick={() => toggleVisibleFilter('author')} 
                role="presentation"
                style={{ border:theme.borderBlack}}
                >
                    исполнителю
            </S.FilterButton>
            <S.FilterButton 
                onClick={() => toggleVisibleFilter('year')} 
                role="presentation"
                style={{ border:theme.borderBlack}}
                >
                    году выпуска
            </S.FilterButton>
            <S.FilterButton 
                onClick={() => toggleVisibleFilter("gener")} 
                role="presentation"
                style={{ border:theme.borderBlack}}
                >                
                    жанру
            </S.FilterButton>
            <S.ClickFilterMenu>
                {isVisibleFilter === 'author' && (<RenderClickMenuAuthor/>)}
                {isVisibleFilter === 'year' && (<RenderClickMenuYuar/>)}
                {isVisibleFilter === 'gener' && (<RenderClickMenuGenre/>)}
            </S.ClickFilterMenu>
        </S.CenterblockFilter>   
    )
}

export default FilterMenu;