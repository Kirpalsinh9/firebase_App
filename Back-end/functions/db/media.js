exports.getMedia = async (
    database
) => {
    const response = await database.ref('Media/Videos').once('value');
    console.log(response.val())
    return response.val();
}

exports.updateViews = async (
    database,
    currentViews
) => {
    const updates = {}
    const path = `Views`
    const newViews = currentViews + 1
    updates[path] = newViews
    return database.ref().update(updates)
}