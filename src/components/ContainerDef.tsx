import React, {FC} from 'react';

const ContainerDef: FC = ({children}) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
};

export default ContainerDef;
