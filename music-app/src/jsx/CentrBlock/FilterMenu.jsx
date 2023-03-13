import { useState} from 'react';

import RenderClickMenuAuthor from './clickMenuAuthor';
import RenderClickMenuYuar from './clickMenuYuar';
import RenderClickMenuGenre from './clickMenuGenre';

import * as S from './styledFilterMenu'

function FilterMenu (){
    // открытие-скрытие filter-title
    const [isVisibleFilter, setVisibleFilter] = useState(null)

    const toggleVisibleFilter = (filter) => {   
        setVisibleFilter(isVisibleFilter === filter ? null : filter)
    }

    return(
        <S.centerblockFilter>
            <S.filterTitle>Искать по:</S.filterTitle>
            <S.filterButton
                onClick={() => toggleVisibleFilter('author')} 
                role="presentation"
                >
                    исполнителю
            </S.filterButton>
            <S.filterButton 
                onClick={() => toggleVisibleFilter('year')} 
                role="presentation"
                >
                    году выпуска
            </S.filterButton>
            <S.filterButton 
                onClick={() => toggleVisibleFilter("gener")} 
                role="presentation"
                >                
                    жанру
            </S.filterButton>
            <S.clickFilterMenu>
                {isVisibleFilter === 'author' && (<RenderClickMenuAuthor/>)}
                {isVisibleFilter === 'year' && (<RenderClickMenuYuar/>)}
                {isVisibleFilter === 'gener' && (<RenderClickMenuGenre/>)}
            </S.clickFilterMenu>
        </S.centerblockFilter>   
    )
}

export default FilterMenu;