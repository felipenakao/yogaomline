import React, { Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faBars } from "@fortawesome/free-solid-svg-icons";
import Modal from "simple-react-modal";
import "./App.css";

const MessagesSlider = React.lazy(() => import("./components/Messages.jsx"));

const ExpandMenu = (e) => {
  const expanded = document
    .getElementById("topHeader")
    .classList.contains("expanded");

  if (expanded) {
    document.getElementById("topHeader").classList.remove("expanded");
  } else {
    document.getElementById("topHeader").classList.add("expanded");
  }
};

const addFadeClass = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeElement");
    }
  });
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModalAdriana: false,
      showModalFlavia: false,
    };
  }
  componentDidMount() {
    let observer = new IntersectionObserver(addFadeClass, { threshold: 0.5 });
    let target = document.getElementsByClassName("to-animate");

    if (target.length > 0) {
      console.log("target", target[0]);
      document.querySelectorAll(".to-animate").forEach((element) => {
        observer.observe(element);
      });
    }

    document.querySelectorAll(".menu-link").forEach((element) => {
      element.addEventListener("click", () => {
        document.getElementById("topHeader").classList.remove("expanded");
      });
    });
  }

  render() {
    return (
      <div className="yoga-omline">
        <Suspense fallback={<div />}>
          <header id="topHeader" className="yoga-header">
            <nav className="wrapper">
              <ul>
                <li>
                  <img src="img/logo-yoga.webp" />
                </li>
                <li>
                  <a className="menu-link" href="#video">
                    Conheça o Curso
                  </a>
                </li>
                <li>
                  <a className="menu-link" href="#benefits">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a className="menu-link" href="#includes">
                    O que está incluso?
                  </a>
                </li>
                <li>
                  <a className="menu-link" href="#instructors">
                    Instrutoras
                  </a>
                </li>
                <li>
                  <a className="menu-link" href="#messages">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a className="menu-link" href="#prices">
                    <button className="yoga-buy">Quero Adquirir</button>
                  </a>
                </li>
              </ul>
            </nav>

            <FontAwesomeIcon
              icon={faBars}
              className="bars"
              onClick={(e) => ExpandMenu(e)}
            />
          </header>

          <section id="video" className="section-video">
            <div className="section-video__overlay">
              <div className="wrapper">
                <div className="section-video__grid">
                  <img
                    src="img/logo-yoga.webp"
                    className="section-video__logo"
                  />

                  <div className="section-video__media">
                    <label>CONHEÇA O CURSO:</label>
                    <iframe
                      src="https://player.vimeo.com/video/655695798?h=d12b6ce977&color=ff0179&title=0&byline=0&portrait=0"
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <a href="#prices">
                    <button className="yoga-buy">Quero Adquirir</button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="section-healthy">
            <div className="section-healthy__grid wrapper">
              <h2>
                Como você vem cuidando da sua saúde{" "}
                <span>física, mental, emocional e espiritual</span>?
              </h2>

              <div className="section-healthy__content to-animate">
                <img src="img/healthy-img.webp" />
                <p>
                  Com às práticas de yoga você irá aprender respirar com melhor
                  consciência,escutar melhor seu corpo, irá meditar e usufruir
                  dos inúmeros benefícios que o yoga nos oferece.
                </p>
              </div>
            </div>
          </section>

          <section className="section-offer">
            <div className="to-animate">
              <h2>O QUE OFERECEMOS?</h2>
              <p>
                Nós oferecemos o que nós praticamos e temos tido resultados
                transformadores tanto em nossas vidas pessoais, quanto na vida
                das alunas que praticam yoga conosco.
              </p>
            </div>
          </section>

          <section className="section-provides">
            <div className="wrapper">
              <h2 className="to-animate">O QUE PROPORCIONA?</h2>
              <ul className="provides__list to-animate">
                <li className="provides__list__title">+ MAIS</li>
                <li className="provides__list__bullet">ENERGIA</li>
                <li className="provides__list__bullet">CONCENTRAÇÃO</li>
                <li className="provides__list__bullet">DISPOSIÇÃO</li>
              </ul>
              <ul className="provides__list to-animate">
                <li className="provides__list__title provides__list__title--gray">
                  - MENOS
                </li>
                <li className="provides__list__bullet provides__list__bullet--gray">
                  STRESS
                </li>
                <li className="provides__list__bullet provides__list__bullet--gray">
                  ANSIEDADE
                </li>
                <li className="provides__list__bullet provides__list__bullet--gray">
                  INSÔNIA
                </li>
              </ul>
              <p className="to-animate">
                Cada vez mais os médicos ao redor do mundo vem recomendando a
                prática do yoga para alívio do stress, ansiedade, correção da
                postura, alívio de dores no corpo, boa digestão, dormir melhor,
                sentir mais energia, mais disposição, melhora da concentração e
                pode-se usufruir de uma melhor qualidade de vida no geral.
              </p>
            </div>
          </section>

          <section id="benefits" className="section-benefits">
            <div>
              <h2>BENEFÍCIOS DA PRÁTICA</h2>
              <h3>Com as práticas do yoga, tudo melhora!</h3>

              <ul className="benefits__list">
                <li className="to-animate">
                  <img src="img/benefits/icons8-breath-100.webp" />
                  <span>Qualidade da respiração</span>
                </li>
                <li className="to-animate">
                  <img src="img/benefits/icons8-dormir-100.webp" />
                  <span>Qualidade significativa do sono</span>
                </li>
                <li className="to-animate">
                  <img src="img/benefits/icons8-objetivo-100.webp" />
                  <span>Foco e concentração</span>
                </li>
                <li className="to-animate">
                  <img src="img/benefits/icons8-bateria-android-l-100.webp" />
                  <span>Energia para fazer suas atividades</span>
                </li>
                <li className="to-animate">
                  <img src="img/benefits/icons8-spine-100.webp" />
                  <span>Fortalecimento na musculatura e nos ossos</span>
                </li>
                <li className="to-animate">
                  <img src="img/benefits/icons8-gota-de-sangue-64.webp" />
                  <span>Melhora do fluxo sanguíneo</span>
                </li>
                <li className="to-animate">
                  <img src="img/benefits/icons8-agachamentos-100.webp" />
                  <span>Melhora nas articulações</span>
                </li>
                <li className="to-animate">
                  <img src="img/benefits/icons8-mente-sabia-100.webp" />
                  <span>
                    Melhora o equilíbrio e a flexibilidade mental, emocional,
                    física e espiritual
                  </span>
                </li>
                <li className="to-animate">
                  <img src="img/benefits/icons8-gostar-100.webp" />
                  <span>Auto estima e autoconfiança</span>
                </li>
                <li className="to-animate">
                  <img src="img/benefits/icons8-sorridente-100.webp" />
                  <span>Felicidade em viver</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="includes" className="section-includes">
            <h2 className="to-animate">O QUE ESTÁ INCLUSO?</h2>

            <h3 className="to-animate">
              É muito mais do que um simples curso, são <b>práticas de yoga</b>
            </h3>

            <ul>
              <li>
                <img src="img/includes/hatha.webp" className="to-animate" />
                <h4 id="hatha" className="to-animate">
                  5 aulas de <b>HATHA</b>
                </h4>
              </li>
              <li>
                <img src="img/includes/vinyasa.webp" className="to-animate" />
                <h4 id="vinyasa" className="to-animate">
                  5 aulas de <b>VINYASA</b>
                </h4>
              </li>
              <li>
                <img
                  src="img/includes/meditacoes.webp"
                  className="to-animate"
                />
                <h4 id="meditacoes" className="to-animate">
                  5 práticas de <b>MEDITAÇÃO</b>
                </h4>
              </li>
            </ul>

            <div className="includes__extra to-animate">
              <h4>
                <b>1 mês gratuito</b> de acesso livre em nosso studio de Yoga
                OMline
              </h4>

              <span>
                <b>IMPORTANTE: </b> O prazo para a solicitação da participação
                de 1(um) mês gratuito online é de até 3(três) meses após a
                compra do curso.
              </span>
              <br />
              <span>
                As aulas online estarão disponíveis à partir de 10/01/22.
              </span>
              <br />
              <span>
                À partir de janeiro de 2022 teremos Kundalini Yoga em nosso
                Studio de YogaOMline.
              </span>
              <br />
              <span>
                <b>
                  Envie seu WhatsApp para o e-mail:{" "}
                  <a
                    style={{ textDecoration: "none" }}
                    href="mailto:adrianajarva@gmail.com"
                  >
                    <i className="highlight">adrianajarva@gmail.com</i>
                  </a>{" "}
                  e receba o link para participar das aulas.
                </b>
              </span>
            </div>
          </section>

          <section id="extra" className="section-extra">
            <div className="section-extra__background"></div>
            <h2>MATERIAL EXTRA!</h2>

            <div className="extra__book to-animate">
              <img src="img/extra/ebook-transparent.webp" />
              <div className="extra__book__text">
                <p>
                  Ao adquirir o curso você terá acesso ao{" "}
                  <strong>E-book “Yoga para Todos"</strong> onde você irá
                  encontrar o passo-a-passo para execução de 20 posturas
                </p>
              </div>
            </div>
          </section>

          <section id="instructors" className="section-instructors">
            <h2>CONHEÇA AS INSTRUTORAS</h2>

            <div className="instructors__grid">
              <div className="instructors__item to-animate">
                <img src="img/instructors/adriana-jarva.webp" />
                <h4>Adriana Jarva</h4>
                <h5>Vinyasa</h5>

                <a
                  target="_blank"
                  href="https://www.instagram.com/adrianajarva/"
                >
                  <img
                    className="instructors__item__social"
                    width="32"
                    height="32"
                    src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                  />
                </a>

                <p>
                  Minha maior alegria e conquista é perceber a aluna/o se
                  desenvolvendo e se tornando sua melhor versão.
                </p>
                <p>
                  Me formei aos 50 anos de idade como instrutora de Vinyasa flow
                  pela Inner Peace Yoga School em Utah, nos Estados Unidos
                  (05/2020).
                </p>

                <button
                  onClick={() => this.setState({ showModalAdriana: true })}
                >
                  LER BIO COMPLETA
                </button>
              </div>

              <div className="instructors__item to-animate">
                <img
                  alt="instrutora flavia rascassi"
                  src="img/instructors/flavia-rascassi.webp"
                />
                <h4>Flávia Rascassi</h4>
                <h5>Hatha</h5>

                <a
                  target="_blank"
                  href="https://www.instagram.com/flaviarascassi/"
                >
                  <img
                    className="instructors__item__social"
                    width="32"
                    height="32"
                    src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                  />
                </a>

                <p>
                  Eu ajudo às pessoas através da prática de Yoga a se
                  RECONECTAR.
                </p>
                <p>
                  Para que elas encontrem equilíbrio e paz interna, fazendo da
                  prática um hábito diário tanto no tapete, quanto fora dele.{" "}
                </p>

                <button
                  onClick={() => this.setState({ showModalFlavia: true })}
                >
                  LER BIO COMPLETA
                </button>
              </div>
            </div>
          </section>

          <section id="messages" className="section-messages">
            <h2>DEPOIMENTOS</h2>

            <div className="messages__carousel">
              <MessagesSlider />
            </div>
          </section>

          <section id="prices" className="section-prices">
            <h2>QUERO ADQUIRIR O CURSO</h2>

            <div className="prices__card">
              <h4>Material Completo</h4>
              <h5>via plataforma Hotmart</h5>

              <div className="prices__value">
                <p>R$107,00</p>
              </div>

              <div className="prices__content">
                <p>O que está incluso?</p>

                <ul>
                  <li>5 Aulas de Hatha</li>
                  <li>5 Aulas de Vinyasa</li>
                  <li>5 Práticas de Meditação</li>
                  <li>E-book com TODAS as posturas</li>
                  <li>1 mês gratuito nas aulas semanais</li>
                </ul>
              </div>

              <a
                href="https://pay.hotmart.com/E63438027L"
                target="_blank"
                rel="noreferrer"
              >
                <button className="yoga-buy">
                  <FontAwesomeIcon icon={faShoppingBasket} /> COMPRAR O CURSO
                </button>
              </a>
            </div>
          </section>

          <footer>
            <img src="img/logo-yoga.webp" className="loadingLogo" />
          </footer>

          <div className="loading loadingElement">
            <img src="img/logo-yoga.webp" className="loadingLogo" />
          </div>
        </Suspense>

        <Modal
          show={this.state.showModalFlavia}
          onClose={() => this.setState({ showModalFlavia: false })}
          transitionSpeed={1000}
        >
          <div className="modal-text">
            <h5>Flavia Rascassi</h5>

            <p>
              Eu ajudo às pessoas através da prática de Yoga a se RECONECTAR.
            </p>

            <p>
              Para que elas encontrem equilíbrio e paz interna, fazendo da
              prática um hábito diário tanto no tapete, quanto fora dele.
            </p>

            <p>Formação e estudos:</p>

            <p>
              - Capacitação em Yoga coordenado pelo professor Marcos Rojo
              (IEPY).
            </p>

            <p>
              - Anatomia Aplicada ao Yoga na Faculdade de Medicina da Santa Casa
              de São Paulo.
            </p>

            <p>Atuação:</p>

            <p>
              - Instrutora de Hatha Yoga para grupos ou individual, presencial e
              online.{" "}
            </p>

            <p>
              - Prema Yoga, trabalhei em 2011 à 2018 como secretária, onde
              aprofundei meu conhecimento no yoga.{" "}
            </p>

            <p>
              - Instrutora (voluntária) no Posto de Saúde na Faculdade Pública
              da USP (2017 e 2018).
            </p>

            <p>
              - Instrutora de Ashtanga Vinyasa Yoga no Ishaya Terapias &
              Movimento (2018).
            </p>

            <p>
              Desejo que você tenha a possibilidade de ter um tempo pra você e
              perceba seu corpo, o som da sua respiração e aprecie o silêncio.{" "}
            </p>

            <p>Para mim é um prazer participar do seu tempo.</p>
          </div>
        </Modal>

        <Modal
          show={this.state.showModalAdriana}
          onClose={() => this.setState({ showModalAdriana: false })}
          transitionSpeed={1000}
        >
          <div className="modal-text">
            <h5>Adriana Jarva</h5>

            <p>
              Minha maior alegria e conquista é perceber a aluna/o se
              desenvolvendo e se tornando sua melhor versão.
            </p>

            <p>
              Me formei aos 50 anos de idade como instrutora de Vinyasa flow
              pela Inner Peace Yoga School em Utah, nos Estados Unidos
              (05/2020).
            </p>

            <p>
              Antes de praticar yoga me sentia vítima das circunstâncias, era
              insegura,ansiosa, estressada,chata e entrava no sofrimento dos
              desafios que a vida sabiamente nos apresenta, ao invés de
              aproveitar a oportunidade para crescer.
            </p>

            <p>
              Depois com as práticas do yoga venho descobrindo minha melhor
              versão; autenticidade, coragem, amor, autoconfiança, entre muitas
              outras virtudes e valores.Quanto melhor dentro, melhor fora.
            </p>

            <p>
              Assumi o compromisso de praticar e instruir yoga até enquanto
              respirar e puder, tanto no tapetinho, quanto fora dele, expandindo
              a consciência de que o Yoga é a união do corpo, mente e espírito
              em sincronia de tudo com o todo.{" "}
            </p>

            <p>
              Em agosto de 2020 (durante a pandemia) criei o Studio de
              YogaOmLine e iniciei com as aulas de Vinyasa.{" "}
            </p>

            <p>
              Fevereiro de 2021 minha parceira e instrutora de Hatha Flavia
              Rascassi se juntou a nós e nos trouxe práticas do Hatha.{" "}
            </p>

            <p>Juntos somos melhores e mais fortes, sempre!</p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
