import * as React from 'react';

const Article = ({ title } : {title: string}) => (
  <div className="uk-container">
    <div className="article">
      <header className="article__header">
        <h1 className="article__title">{title}</h1>
      </header>

      <section className="article__body">
        <p>УЦ Автор мультифункциональная платформа для обучения</p>
        <p>Компания Автор основана молодыми прогрессивными специалистами, которые захотели вывести качество дистанционного обучения в России на новый уровень. Это коллектив профессионалов, долгое время (более 5 лет) проработавших в сфере образования, объективно оценивающих российскую конъюнктуру образовательных услуг. Сейчас эти высококлассные специалисты объединились в целостную организацию, предлагающую своим партнёрам полный спектр услуг в области профессионального дополнительного образования.</p>
        <p>Мы работаем круглосуточно и без выходных.</p>
        <p>Дистанционное обучение не надо укладывать в промежуток с 9 до 18 по будням. Мы не привязываем наши услуги к границам среднестатистического рабочего дня-наш оперативный сервис к Вашим услугам 24 часа в сутки, без выходных и праздников!</p>
        <p>Вам не придётся час дозваниваться до наших операторов и слышать раздражающее «Оставайтесь на линии - Ваш звонок очень важен для нас». Вам не придётся подбирать специальные термины, чтобы объяснить, что у Вас произошло. Наши специалисты всегда доброжелательны, вежливы, и, что самое важное, компетентны.</p>
        <h3>Лицензии</h3>
        <hr/>
        <ul>
          <li><img src="/static/img/sert_1.jpg" alt="Лицензия учебный центр 'Автор'"/></li>
          <li><img src="/static/img/sert_2.jpg" alt="Лицензия учебный центр 'Автор'"/></li>
          <li><img src="/static/img/sert_3.jpg" alt="Лицензия учебный центр 'Автор'"/></li>
        </ul>
      </section>
    </div>
  </div>
);

export default Article;
