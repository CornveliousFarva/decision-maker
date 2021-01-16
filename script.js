// Variable declarations, telling the script to get the element by the id mentioned in the htnl
const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// In textarea.focus, we are focusing on the specific event, in this case, the textarea
textarea.focus()

// After focusing on the text area, we are adding an event listener. We're having it listen when the user takes their finger off of the key. When that happens, it will create a tag
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

// Creating a tags function
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    // The comma allows us to split the tags up by a comma.
    tagsEl.innerHTML = ''
    
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

// Random select function
function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

// Time is measured in milliseconds, so the 100 mentioned in the above function is 100 milliseconds

// Random tag function
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

// Highlight tags
function highlightTag(tag) {
    tag.classList.add('highlight')
}

// Remove highlight tags
function removeHighlightTag(tag){
    tag.classList.remove('highlight')
}