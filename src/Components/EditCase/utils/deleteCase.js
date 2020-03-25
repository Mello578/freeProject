export function deleteCase(context, newCase) {
    return context.filter(item => item.id !== newCase.id);
}
