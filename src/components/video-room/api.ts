const openMediaDevices = async (constraints) => {
    return navigator.mediaDevices.getUserMedia(constraints)
}

const getAllDevices = async () => {
    return navigator.mediaDevices.enumerateDevices();
}

export { openMediaDevices, getAllDevices }