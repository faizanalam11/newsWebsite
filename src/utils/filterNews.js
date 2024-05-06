export function filterNews(searchText, data){
    const filterData = data?.filter((n) => 
        n?.title?.toUpperCase()?.includes(searchText.toUpperCase())
    );
    return filterData;
}