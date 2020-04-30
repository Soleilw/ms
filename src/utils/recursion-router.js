export function recursionRouter(roleRouter = [], allRouter = []) {
    var roles = [localStorage.getItem('user')];
    var realRouter = allRouter.filter(() => roles.includes('admin')).map(item => ({
        ...item,
        children: item.children ? recursionRouter(roleRouter, item.children) : null
    }))
    return realRouter;
}