import { LinkSosmed } from "./sosmed"

export const Page = () => {
    return (
        <main className="bg-gradient-to-b from-red-700 via-red-800 to-red-900 h-max flex flex-col items-center p-5">
            <img src="logo.png" alt="logo" width={200}/>
            <h2 className="text-white font-bold text-4xl">Mie Pedas</h2>
            <button className="bg-gray-200 p-2 w-60 rounded-xl font-bold m-5">Official | Sosial Media</button>
            <section className="flex gap-5">
                <LinkSosmed href="https://www.instagram.com/jajanzmie" src="instagram.png" alt="instagram" width={50}/>
                <LinkSosmed href="https://desty.page/miegacoan" src="tik-tok.png" alt="tik-tok" width={50}/>
                <LinkSosmed href="https://desty.page/miegacoan" src="whatsapp.png" alt="whatsapp" width={50}/>
            </section>
            <button className="bg-gray-200 p-2 w-60 rounded-xl font-bold m-5">Pesan Sekarang</button>
            <section className="flex items-center gap-5">
                <LinkSosmed href="https://gofood.link/a/LE8FVFS" src="gofood.png" alt="gofood" width={200}/>
                <LinkSosmed href="https://r.grab.com/g/6-20240824_214746_f66a83efb0068a3c_MEXMPS-6-C6LAL4BVANKBCE" src="Grab-Food.png" alt="grabfood" width={200}/>
            </section>
            <button className="bg-gray-200 p-2 w-60 rounded-xl font-bold m-5">Yuk Mampir</button>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15869.074140519519!2d106.6180232!3d-6.0944853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a0128127a173b%3A0x5043ae1dbc0667cd!2sJajan&#39;z%20Mie!5e0!3m2!1sid!2sid!4v1724777382463!5m2!1sid!2sid" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-xl shadow-md"></iframe>

        </main>

    )
}