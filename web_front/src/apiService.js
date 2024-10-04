const url = process.env.REACT_APP_SERVER_URL

export async function getComments() {
    try {
        const response = await fetch(`${url}/items`)
        const comments = await response.json()
        
        return comments
    } catch(e) {
        console.error(`API:getComments: ${e}`)
        return []
    }
}

export async function addComment(comment) {
    try {
        await fetch(`${url}/items`, { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        return true
    } catch(e) {
        console.error(`API:addComment: ${e}`)
        return false
    }
}

export async function removeComment(commentId) {
    try {
        await fetch(`${url}/items/${commentId}`, { 
            method: "DELETE"
        })
        return true
    } catch(e) {
        console.error(`API:removeComment: ${e}`)
        return false
    }
}