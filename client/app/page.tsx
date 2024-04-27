'use client';
import Form from '@/pages/components/Form';

const page = () => {
    return (
        <div className="bg-gray-950">
            <section className="bg-gray-950">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 bg-gray-950">
                    <h1 className="font-mono mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
                        Choosing the right university is click away
                    </h1>
                </div>
            </section>
            <Form />
        </div>
    );
};

export default page;
