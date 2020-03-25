export function mutableContext(context, fn, params) {
    //чтоб внутри контекста не было мутаций
    const newInstanceContext = [...context];
    return fn(newInstanceContext, params);
}
