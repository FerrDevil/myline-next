
import { NextResponse } from 'next/server';
import { transporter } from '../emailTransporter';


export const credentials = {
    from: '"Myline Clinic" <myline@myline.clinic>', // sender address
    to: "myline.info@yandex.ru", // list of receivers
}

export async function POST(request) {
    try{
        const formInfo = await request.json()

        const info = await transporter.sendMail({
            ...credentials,
            subject: "Заявка на звонок", // Subject line
            text: `Имя: ${formInfo.name}\n Номер телефона: ${formInfo.phoneNumber}\n`, // plain text body
            html:
            `<ul style="font-size: 16px; font-weight: 400; list-style: none; ">
                <li>Имя: ${formInfo.name}</li>
                <li>Номер телефона: ${formInfo.phoneNumber}</li>
            </ul>`, // html body
          });
        
    }
    catch(error){
        return NextResponse.json({ error: error.message }, {status: 400})
    }

    
    return NextResponse.json({ request: "fulfilled" });
}

