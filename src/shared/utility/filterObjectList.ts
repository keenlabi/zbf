export default function filterObjectList<T extends object>(filterValue:string, list:T[]) {
    return list.filter((option)=> {
        return  Object.values(option)
                .join(' ')
                .toString()
                .toLowerCase()
                .search(filterValue.toLowerCase()) !== -1
    })
}