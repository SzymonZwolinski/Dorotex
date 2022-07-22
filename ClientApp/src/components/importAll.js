export function importAll(r) {
    //import img z folderu do obiektu
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
