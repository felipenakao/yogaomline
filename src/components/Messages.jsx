import React from "react";
import Slider from "react-slick";

export default function MessagesSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: true
        }
      },
    ]
  };
  return (
    <Slider {...settings}>


      <div className="messages__item">
        <img src="img/messages/vania.webp"/>
        <h4>Vania Bagnato</h4>

        <p>
          Conheci a professora Adriana Jarva através de uma grande amiga,
                                              Cibele.
        </p>
        <p>Sempre ouvi dizer sobre os benefícios da yoga, mas
                                              nunca encontrei ninguém que me incentivasse a começar. Sou muito
                                              ansiosa e agitada. Na pandemia, senti que as coisas pioraram.
        </p>
        <p>
          Desde que comecei a praticar , fui me sentindo muito mais
                                              tranquila e comecei a dormir melhor.
        </p>
        <p>
          Existe uma grande conexão entre as professoras Adriana e Flávia
                                              e elas têm muito amor para dar!
        </p>
        <p>
          Pratiquem! Pois a magia acontece! 🤩🤩
        </p>

      </div>

      <div className="messages__item">
        <img src="img/messages/magda.webp"/>
        <h4>Magda Strasburg</h4>

        <p>
          Já pratiquei yoga antes,  gosto demais da amplitude da prática não só no momento da aula mas os inúmeros benefícios fora do tapetinho.

        </p>
        <p>Desde o ano passado retornei fazendo aulas on-line e não parei mais.

        </p>
        <p>
          Entre tantas coisas que poderia destacar a respiração foi com certeza a mais relevante. Não só pq as profes nos lembram de respirar, sim parece doido mas as vezes precisamos ser lembrados de “respirar” algo tão natural e automático e que ao fazermos conscientes e adequadamente coloca tanta coisa no lugar.
        </p>

      </div>

      <div className="messages__item">
        <img src="img/messages/viviane.webp"/>
        <h4>Viviane Vianna</h4>

        <p>
          Em meio à pandemia, descobri na Yoga Online, uma forma maravilhosa de me manter ativa, aumentar minha imunidade e flexibilidade, além de fazer novos amigos!
        </p>
        <p>
          Algumas das melhorias que percebi logo nas primeiras semanas foram: melhorar a qualidade do sono e reduzir dores na cervical e lombar.
        </p>
        <p>
          Ao longo dos últimos meses, mais uma fantástica professora se juntou nesse projeto, a Flavia Rascassi com as aulas de Hatha Yoga, ela e a Adriana simplesmente se complementam!
        </p>

      </div>

      <div className="messages__item">
        <img src="img/messages/maria-julia.webp"/>
        <h4>Maria Julia</h4>

        <p>
          Comecei a praticar Yoga com a Adriana Jarva em março de 2021, quando minha prima Maggy me colocou para participar da aula e desde então não parei mais.
        </p>
        <p>
          Quando comecei a praticar Yoga com a Adriana e a Flávia percebi que o yoga na verdade vai muito além daquilo que ouvimos e imaginamos, é uma prática que me ajudou muito a repensar a forma de ver o mundo e a troca de energias com o universo; me ajudou muito nas minhas crises de ansiedade, postura e flexibilidade (hoje já consigo abrir espacate, uma coisa que sempre quis fazer kkk).
        </p>
        <p>
          Muito amor por esse tempinho que passamos juntas e por todos os ensinamentos que nos são passados! ❤️

        </p>

      </div>

      <div className="messages__item">
        <img src="img/messages/olivia.webp"/>
        <h4>Olivia de Oliveira</h4>

        <p>
          Tenho o privilégio de ser amiga da Adriana Jarva desde 2011, e acompanhei mesmo de longe o processo dos estudos, práticas e a formação da Dri, que à cada passo mais ela mergulhava de corpo e alma numa dedicação contagiante de equilíbrio, alegria, prazer e amor.
        </p>
        <p>
          As professoras Adriana Jarva e da Flavia Rascassi  vão  “além do “tapetinho”  transformando em tão pouco tempo o meu dia-a-dia , explorando o território sagrado do meu SER com muita sabedoria e respeito. Muitos benefícios já tive , mas o mais acentuado e que tanto buscava era o equilíbrio “dentro e fora do tapetinho” isso mudou a minha forma de pensar e agir!
        </p>

        <p>Namastê</p>

      </div>

      <div className="messages__item">
        <img src="img/messages/avatar.webp"/>
        <h4>Diana</h4>

        <p>No Yoga eu aprendi a crescer e evoluir como pessoa e mulher, aprendi a encontrar a minha paz de espírito, minha paz interior, a ter equilíbrio e hoje sinto falta quando não consigo praticar as aulas 🧘🏼‍♀️ pelos meus dias corridos e no Yoga aprendi que temos que ter um tempo para nós fora e dentro do tapetinho 🙏🏻🧘🏼‍♀️♥️</p>
        <p>Hoje não vivo sem o 🧘🏼‍♀️ Yoga 🧘🏼‍♀️, faz parte do meu dia a dia 🙏🏻
        </p>
        <p>Sei da  Prof Flávia Rascassi mas infelizmente não tive o prazer de praticar a aula dela ainda pq é no sábado, ou em horário do meu trabalho, mas vou fazer de tudo para encaixar essa aula no meu dia a dia 🙏🏻🧘🏼‍♀️</p>
        <p>Gratidão por ter conhecido e praticado essa benção do Yoga 🧘🏼‍♀️ que transformou a minha vida e a mim 🙏🏻♥️</p>
      </div>


      <div className="messages__item">
        <img src="img/messages/avatar.webp"/>
        <h4>Jessica</h4>

        <p>Na pandemia eu experimentei algumas coisas novas online. Comecei as aulas de Yoga sem noção nenhuma e sem tapete. Ao longo das aulas dou muita risada de mim mesma, porque afinal, se eu desequilibrei eu não entendi a nova postura, "tá tudo bem" como as instrutoras dizem, e realmente tá tudo muito bem.
        </p>
        <p>Percebi que a prática me aliviou das tensões menstruais grandemente, meu maior ganho.
        </p>
        <p>Quanto às tensões do dia a dia, já comecei aulas com um nózinho de tensão nas costas e se desmancham durante a aula.
        </p>

        <p>Quanto a parte de meditar e ficar em silêncio, pra mim é muito fácil por ser acostumada a orar.
        </p>

        <p>Eu apenas vejo vantagens. Adoro as aulas de Yoga e super recomendo.”
        </p>
      </div>


      <div className="messages__item">
        <img src="img/messages/avatar.webp"/>
        <h4>Rose Ramos</h4>

        <p>Faço yoga 🧘🏻‍♀️ com Adriana Jarva e Flavia Rascassi.</p>
        <p>Eu tive um acidente de bike, e menos de uma semana após o incidente, resolvi voltar à praticar yoga! Quando comecei a fisioterapia, foi mais fácil  pq eu já estava me exercitando! Meu fisioterapeuta me disse que o Yoga realmente me ajudou na recuperação! Ajudou meu corpo e minha confiança!</p>
        <p>Gratidão à Adriana e a Flávia pelo suporte.</p>
        <p>Namaste 🙏😍</p>
      </div>
    </Slider>
  );
}
