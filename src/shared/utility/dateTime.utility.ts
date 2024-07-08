export function formatDate(dateTime:string) {
    const date = new Date(dateTime);
    
    const dateString = date.toLocaleDateString('en-us', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return dateString;
}

export function determineTimeLapsed(dateTime:string) {

    const inceptionDate = new Date(dateTime);
    const currentDate = new Date();
    
    const diffInMilliSecs = currentDate.getTime() - inceptionDate.getTime();

    const diffInSecs = diffInMilliSecs / 1000,
    diffInMins = Math.floor(diffInSecs / 60),
    diffInHrs = Math.floor(diffInMins / 60),
    diffInDays = Math.floor(diffInHrs / 24),
    diffInWeeks = Math.floor(diffInDays / 7),
    diffInMonths = Math.floor(diffInWeeks / 4),
    diffInYears = Math.floor(diffInMonths / 12);

    if(diffInYears > 0) return `${diffInYears} year${(diffInYears) && 's'} ago`
    if(diffInMonths > 0) return `${diffInMonths} month${(diffInMonths) && 's'} ago`
    if(diffInWeeks > 0) return `${diffInWeeks} week${(diffInWeeks) && 's'} ago`
    if(diffInDays > 0) return `${diffInDays} day${(diffInDays) && 's'} ago`
    if(diffInHrs > 0) return `${diffInHrs} hr${(diffInHrs) && 's'} ago`
    if(diffInMins > 0) return `${diffInMins} min${(diffInMins) && 's'} ago`
    if(diffInSecs > 0) return `${diffInSecs} sec${(diffInSecs) && 's'} ago`
    
    return `Less than a sec`

}