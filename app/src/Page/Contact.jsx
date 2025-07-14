import React, { useState } from "react";
import Title from "../components/Text/Title";
import InputModal from "../components/Text/InputModal";
import ButtonModal from "../components/Button/ButtonModal";
import { Github, Linkedin, Mail } from "lucide-react";

function ContactPage() {
  const developers = [
    {
      name: "Giovanni Donati",
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQFaBHwGxf05gg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1661763856317?e=1758153600&v=beta&t=KGckaO-NKH4kf-DQd03SIV2kTVkIBluK7PEajJY5B4c",
      jobTitle: "Desenvolvedor de Software",
      github: "https://github.com/GiovanniDonati",
      linkedin: "https://www.linkedin.com/in/giovanni-donati-dev/",
      email: "grdonati99@gmail.com",
    },
    {
      name: "Carlos Gabriel Rech dos Santos",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQFzUTZypiaQew/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704832180201?e=1758153600&v=beta&t=vRPnOwJ8neb5-WWo-xYTHGxpYAjPmURdN5RiffNZ6C4",
      jobTitle: "Desenvolvedor de Software",
      github: "https://github.com/carlosgbrs",
      linkedin:
        "https://www.linkedin.com/in/carlos-gabriel-rech-dos-santos-6586b52a9/",
      email: "carlosgabrielrsantos84@gmail.com",
    },
    {
      name: "Heitor Baretta Fachin",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGdsPEOTlKiqg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690731253440?e=1758153600&v=beta&t=VgnTVcdTKHwohBRRXBQGqdxnDk4V5z7fA6vdU429ZgM",
      jobTitle: "Desenvolvedor de Software",
      github: "https://github.com/HeitorFachin",
      linkedin: "https://www.linkedin.com/in/heitor-baretta-fachin-6658a3232/",
      email: "heitorbaretta@gmail.com",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    contactEmail: "",
    phone: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipientEmail = "grdonati99@gmail.com";
    const subject = encodeURIComponent(
      `[Contato via Website] ${formData.subject}`
    );
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
        `Email de Contato: ${formData.contactEmail}\n` +
        `Telefone: ${formData.phone}\n\n` +
        `Assunto: ${formData.subject}\n` +
        `Descrição:\n${formData.description}`
    );

    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setFormData({
      name: "",
      contactEmail: "",
      phone: "",
      subject: "",
      description: "",
    });
    alert("Seu email será encaminhado. Verifique seu cliente de email.");
  };

  return (
    <div className="flex flex-col h-screen grow space-y-8 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto w-full">
        <Title>ENTRE EM CONTATO CONOSCO</Title>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputModal
              placeholder="Seu Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <InputModal
              placeholder="Seu Email"
              name="contactEmail"
              type="email"
              value={formData.contactEmail}
              onChange={handleChange}
              required
            />
            <InputModal
              placeholder="Telefone (opcional)"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <InputModal
            placeholder="Assunto"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Descreva sua mensagem..."
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className=" w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 resize-y"
            required
          ></textarea>
          <div className="flex justify-center">
            <ButtonModal
              bgColor={
                "flex justify-center items-center bg-blue-600 hover:bg-blue-700"
              }
              type="submit"
            >
              <Mail size={20} className="mr-4 text-center" /> Enviar
            </ButtonModal>
          </div>
        </form>
      </div>

      <div className="bg-white px-8 py-4 rounded-lg shadow-md max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Equipe de Desenvolvimento
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-sm w-full max-w-xs text-center h-80"
            >
              <img
                src={dev.image}
                alt={dev.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {dev.name}
              </h3>
              <p className="text-gray-600 mb-4">{dev.jobTitle}</p>
              <div className="absolute bottom-4 flex justify-center space-x-4">
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  title="GitHub"
                >
                  <Github size={28} />
                </a>
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href={`mailto:${dev.email}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  title="Email"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
