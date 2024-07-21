export function capitalizeFirstCharacter (message:string) {
    if(!message) return message;
    return message.split(" ")[0].substring(0, 1).toUpperCase() + message.substring(1, message.length);
}

export function removeURLTrailingSlash(urlWithTrailingSlash:string) {
    return urlWithTrailingSlash.replace(/\/+$/, "");
}