function editElement(ref, match, repalcer) {
    let content = ref.textContent;
    let matcher = new RegExp(match, 'g');
    let edited = content.replace(matcher, repalcer);
    ref.textContent = edited;
}