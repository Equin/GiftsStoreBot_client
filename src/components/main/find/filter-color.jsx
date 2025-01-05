import "./filter.css";

import { useEffect, useState } from 'react';

function FilterGroup({ stableID, items, title, onSelect, isSingleSelect = true }) {
    const [selectedItems, setSelectedItems] = useState([]);
    const [afterClick, setAfterClick] = useState(false);

    const handleItemClick = (item) => {
        // Check if the item is already selected

        if (isSingleSelect) {
            if (selectedItems.includes(item)) {
                setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.key !== item.key));
            } else {
                setSelectedItems([item]);
            }
        } else {
            if (selectedItems.includes(item)) {
                setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.key !== item.key));
            } else {
                setSelectedItems([...selectedItems, item]);
            }
        }

        setAfterClick(true);
    };

    // Call the onSelect callback whenever selectedItems change
    useEffect(() => {

        if (!afterClick) {
            return;
        }

        onSelect({ stableID, selectedItems });

        setAfterClick(false);

    }, [selectedItems, onSelect, stableID, afterClick]);


    return (
        <div className="filter-container">
            <div className="filter-coll">
                <div className="filter-coll-1">
                    <div className="filter-name">
                        <p>{title}</p>
                    </div>
                </div>
                <div className="filter-coll-2">
                    <ul>
                        {
                            // console.log(items)

                            items.map((item, index) => (
                                <li
                                    key={item.key}
                                    className={`filter-type ${selectedItems.includes(item) ? 'selected' : ''}`}
                                    onClick={() => handleItemClick(item)}
                                >
                                    {item.value}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FilterGroup;