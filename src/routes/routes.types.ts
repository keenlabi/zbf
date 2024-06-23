export interface IAppRouterType {
    index?: boolean;
    title?:string;
    path?:string;
    element:JSX.Element;
    children?:IAppRouterType[];
    isProtected?:boolean;
    allowedRoles?:Array<string>;
}