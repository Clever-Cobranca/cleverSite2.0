import { FaWhatsapp } from "react-icons/fa";
import "../navigationLinks.css";
import { Link } from "react-router";


export default function Links() {
  const linkData = [
    // {
    //   id: 1,
    //   icon: whatsapp,
    //   text: "WhatsApp #1 (11) 9 8841-2881",
    //   link: "https://wa.me/5511988412881",
    // },
    // {
    //   id: 2,
    //   icon: whatsapp,
    //   text: "WhatsApp #2 (11) 9 1069-9108",
    //   link: "https://wa.me/5511910699108",
    // },
    // {
    //   id: 3,
    //   icon: phone,
    //   text: "Telefone Fixo (11) 5199-1997",
    //   link: "tel:1151991997",
    // },
    {
      id: 4,
      icon: <FaWhatsapp size={24} color="black" />,
      text: "0800 000 4820",
      link: "https://wa.me/5508000004820",
    },
    // {
    //   id: 5,
    //   icon: whatsapp,
    //   text: "(11) 9 6017-9965",
    //   link: "https://wa.me/5511960179965",
    // },
  ];
  return (
    <main className="mainNav">
      <div className="overlayNav">
        <section className="cardNav">
          <Link to="/">
            <img
              src="/logo-clever-primary.svg"
              alt="Logotipo Clever Cobrança"
              width={201}
              height={70}
            />
          </Link>
          <h1 className="h1Nav">Central de Atendimento</h1>
          <p>Clique no botão abaixo</p>
          <ul className="linkListNav">
            {linkData.map((link) => (
              <li key={link.id}>
                <a href={link.link} className="linkButtonNav">
                  {link.icon}
                  <span>{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
