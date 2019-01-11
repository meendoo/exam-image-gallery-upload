import { MODAL } from './actions.constants'

export const modalActions = {
    openModal,
    closeModal,
    filesDropped,
    clearFiles
}

function openModal() {
    return { type: MODAL.OPEN }
}

function closeModal() {
    return { type: MODAL.CLOSE }
}

function filesDropped(files) {
    return { type: MODAL.FILES_DROPPED, files }
}

function clearFiles() {
    return { type: MODAL.FILES_DROPPED }
}