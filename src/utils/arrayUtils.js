function paginateArray(array, limit, offset) {
    return array.slice(offset, offset + limit);
}

function sortArray(array, key, order) {
    return array.sort((a, b) => {
        let aValue = a[key];
        let bValue = b[key];

        // Handle null or undefined values by placing them after others
        if (aValue == null && bValue == null) return 0;
        if (aValue == null) return 1;
        if (bValue == null) return -1;

        // Convert dates to Date objects to compare them correctly
        const aIsDate = typeof aValue === 'string' && !isNaN(Date.parse(aValue));
        const bIsDate = typeof bValue === 'string' && !isNaN(Date.parse(bValue));

        if (aIsDate && bIsDate) {
            aValue = new Date(aValue);
            bValue = new Date(bValue);
        }

        // Compare values based on their type
        if (aValue < bValue) return order === 'asc' ? -1 : 1;
        if (aValue > bValue) return order === 'asc' ? 1 : -1;
        return 0;
    });
}

function searchArray(array, searches) {
    if (!Array.isArray(searches)) {
        searches = [searches];
    }

    const results = array.filter(item => {
        return searches.every(({ key = null, term = null }) => {
            if (term) {
                const terms = term.toString().toLowerCase().split(' ');

                return terms.every(singleTerm => {
                    if (key && key !== '') {
                        const value = item[key];

                        if (value != null) {
                            const stringValue = value.toString().toLowerCase();
                            return stringValue === singleTerm || stringValue.includes(singleTerm);
                        }
                        return false;
                    } else {
                        return Object.values(item).some(value =>
                            value != null && value.toString().toLowerCase().includes(singleTerm)
                        );
                    }
                });
            }
            return false;
        });
    });

    return Array.from(new Set(results));
}

module.exports = {
    paginateArray, sortArray, searchArray
}