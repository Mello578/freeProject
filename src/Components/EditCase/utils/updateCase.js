export function updateCase(context, newCase) {
    const editedCase = context.find(item => item.id === newCase.id);
    Object.assign(editedCase, newCase);
    return context;
}
