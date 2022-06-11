import {camelCase} from 'lodash'

const getIconPath = (name: string) => {
    return camelCase(name);
}
export default getIconPath
