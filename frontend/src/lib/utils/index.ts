
import { randomBytes } from "crypto"

export const serializeNonPOJOs = (object : any) =>{
    return structuredClone(object)
}

export const generateUsername = (name : string) => {
    const id = randomBytes(2).toString('hex')
    return `${name.slice(0 , 5)}${id}`
}