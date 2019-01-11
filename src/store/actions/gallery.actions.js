import { GALLERY } from './actions.constants'

export const galleryActions = {
    listImages,
    orderByNewest,
    orderByOldest
}

function listImages(data) {
    return { type: GALLERY.LIST_IMAGES, data }
}

function orderByNewest() {
    return { type: GALLERY.ORDERBY_NEWEST }
}

function orderByOldest() {
    return { type: GALLERY.ORDERBY_OLDEST }
}