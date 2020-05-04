import React, { memo } from 'react';
import { shallowEqual } from 'react-redux';

const MemoComp = ({count}) => {
    console.log('MemoComp rendered...');
    return (
        <div>
            {count}
        </div>
    )
}

const propsAreEqual = (prevProps, nextProps) => {
    return shallowEqual(prevProps, nextProps);
}

// export default MemoComp;
export default memo(MemoComp, propsAreEqual);
