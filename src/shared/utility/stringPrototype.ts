String.prototype.capitalizeFirstCharacter = function (this:string) {
    if(!this) return this;
    return this.split(" ")[0].substring(0, 1).toUpperCase() + this.substring(1, this.length);
};

export {}