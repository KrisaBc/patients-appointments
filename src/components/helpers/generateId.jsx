export default function generateId (){
    const date = Date.now().toString(18)
    const random = Math.random().toString(18).slice(2)

    return (date + random)
}