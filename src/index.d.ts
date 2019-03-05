interface ILocation {
    pathname: string;
}
/**
 *接口返回数据格式
 */
interface IResponse {
    code: number;
    data: any;
    status: string;
}
/**
 * dva dispatch
 */
type IDispatch = (object: { type: string, payload?: object, callback?: (res: IResponse) => void }) => void