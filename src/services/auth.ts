import { resolve } from "dns";

interface Response{
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response>{  //mesmo que usar axios.get
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'ajsushuahuahsuhasuausa',
                user: {
                    name: 'Iago',
                    email: 'iagooliveira09@outlook.com',
                },                
            });
        }, 1000);
    });
}