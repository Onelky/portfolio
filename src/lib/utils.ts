import camelCase from 'lodash/camelCase'

const getIconPath = (name: string) => {
    return camelCase(name);
}
export default getIconPath
