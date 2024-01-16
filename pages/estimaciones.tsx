import LayoutHomePage from "@/src/layouts/home";
import Image from "next/image";

export default function Estimaciones() {

    return (
        <LayoutHomePage title='Gold Brick'>

            <div className="grid grid-cols-2">
                <header className="flex flex-col col-span-2 mt-5 mr-20 items-end">
                    <h2>ESTIMACIONES DE VALOR</h2>
                    <p>MEDIANTE UN ESTUDIO DENOMINADO <span>BOV (BROKER OPINION VALUE)</span>
                        ESTIMAMOS EL PRECIO DE LOS INMUEBLES DE NUESTROS CLIENTES</p>
                </header>
                <main className="grid grid-cols-12 col-span-2 m-5">
                    <section className="flex flex-col col-span-12 lg:col-span-3 text-center p-4 gap-2">
                        <p>
                            Variables para estimar el valor de la propiedad
                        </p>
                        <div className="flex bg-gray-300 h-10 items-center justify-center">
                            Variable 1
                        </div>
                        <div className="flex bg-gray-300 h-10 items-center justify-center">
                            Variable 1
                        </div>
                        <div className="flex bg-gray-300 h-10 items-center justify-center">
                            Variable 1
                        </div>
                        <div className="flex bg-gray-300 h-10 items-center justify-center">
                            Variable 1
                        </div>
                    </section>
                    <section className="col-span-12 lg:col-span-4 p-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, mollitia, nesciunt nobis ipsa impedit distinctio, aperiam ipsam nam beatae voluptatum quas iusto in nostrum rerum nemo molestiae aspernatur recusandae magnam.
                        </p>
                    </section>
                    <section className="col-span-12 lg:col-span-5 pt-4">
                        <Image
                            src="/images/estimaciones.png"
                            alt="Banner"
                            width={500}
                            height={500}
                            className=''
                        />
                    </section>
                </main>
            </div>

        </LayoutHomePage>
    )
}