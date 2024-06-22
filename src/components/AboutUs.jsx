import React from 'react';

const AboutUs = () => {
    const developers = [
        {
            name: "Harin Karru",
            role: "Front-end Developer, studying at NIT Warangal",
            description: "Hello, I'm Harin, a passionate front-end developer currently studying at NIT Warangal. I specialize in creating interactive and responsive user interfaces that deliver a seamless user experience. My journey in web development has been driven by a curiosity for cutting-edge technologies and a commitment to clean, efficient code. I thrive in collaborative environments where innovative ideas come to life. Let's build something amazing together!"
        },
        {
            name: "Kuchana Aditya",
            role: "Front-end Developer, studying at SR University",
            description: "Hi there! I'm Kuchana, a front-end developer currently pursuing my studies at SR University. My focus is on crafting intuitive and visually appealing interfaces that captivate users. With a strong foundation in HTML, CSS, and JavaScript. I'm passionate about creating accessible and user-friendly experiences that leave a lasting impression. I'm always eager to learn and adapt to new technologies to stay ahead in this ever-evolving field."
        }
    ];

    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal h-full">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl py-8 text-center text-orange-600 font-bold">About Us</h1>

                <div className="flex flex-wrap justify-center items-center">
                    {developers.map((developer, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="text-center mb-4">
                                    <h2 className="text-xl font-bold text-gray-800">{developer.name}</h2>
                                    <p className="text-sm text-gray-600">{developer.role}</p>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{developer.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
