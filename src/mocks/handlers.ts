import {http, HttpResponse} from 'msw'
import {headers} from "next/headers";

export const handlers = [
    http.post('/api/login', () => {
        return  HttpResponse.json({
            userId:1,
            nickname: '제로초',
            id: 'zerocho',
            image: '/5Udwvgim.jpg'
        }, {
            headers : {
                'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
            }
        })
    }),
    http.post('/api/logout', () => {
        return new HttpResponse(null,{
            headers : {
                'Set-Cookie': 'connect.sid=;HttpOnly;Path=/Max-Age=0',
            }
        })
    }),
    http.post('/api/users', async()=> {
            return HttpResponse.text(JSON.stringify('user-exists'), {
                status: 403,
                // headers: {
                //     'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/,Max-age=0',
                // }
            })
    }
    )
];