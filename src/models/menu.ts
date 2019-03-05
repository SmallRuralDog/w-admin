import _ from 'lodash'
const filterMenuData = (menuData: IRouter[]) => {
    if (!menuData) {
        return [];
    }
    return menuData
        .filter(item => item.name).map(item => {
            if (item.routes && item.routes.length > 0) {
                item.routes = filterMenuData(item.routes)
            }
            return item;
        })
};

const menuDataToList = (menuData: IRouter[], allRoutes: IRouter[]) => {
    if (!menuDataToList) {
        return;
    }
    menuData
        .filter(item => item.name)
        .map(item => {
            allRoutes.push(item)
            if (item.routes && item.routes.length > 0) {
                menuDataToList(item.routes, allRoutes)
            }
        })
}

export default {
    namespace: 'menu',
    state: {
        menuData: [],
        allRoutes: []
    },
    effects: {
        *getMenuData({ payload }, { put }) {
            const { routes } = payload
            const menuData = filterMenuData(routes);
            const allRoutes: IRouter[] = []
            menuDataToList(menuData, allRoutes)
            yield put({
                type: 'save',
                payload: {
                    menuData: menuData,
                    allRoutes: allRoutes
                }
            })
        }
    },
    reducers: {
        save(state, action) {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}