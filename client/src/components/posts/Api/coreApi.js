/* eslint-disable prettier/prettier */

import { Url } from "../../../config/config"


export const getPostsAdmin = async () => {
    return fetch(`${Url}post/all`)
        .then(res => res.json())

}