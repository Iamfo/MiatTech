import React from 'react';

function ItemList ({items}) {

    return(
        <>
        <ul>
            {items.map((items,index) => (
                <li key = {index}>{items}</li>
            )

            )}
        </ul>
        </>
    );
}

export default ItemList